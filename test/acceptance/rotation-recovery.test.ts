import { cpSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { createClient } from "../../src/index.js";
import { OAuthError } from "../../src/errors.js";
import { Session } from "../../src/session.js";
import { loadKeyFile } from "../../src/resolve.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { clientEnv, enrollEnv, expectNoSecretLeak, runRotate, runSetup, scratch } from "./support.js";

/**
 * Vectors table line 43: "Rotate concurrently, drop winning response → One next
 * generation; winner verifies new signer; no old-proof exception".
 * Contract §3 (rotation): "After response loss, try that verification first. If it
 * succeeds, finalize locally... Ambiguity retains both keys and exits nonzero.
 * There is no old-key overlap window, old-proof replay... Another rotation winning
 * later is a conflict, never an automatic overwrite of that winner."
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

const readProfile = (configDir: string) =>
  JSON.parse(readFileSync(join(configDir, "profiles", "default.json"), "utf8")) as {
    credentialId: string;
    privateKeyPath: string;
    publicKeyThumbprint: string;
    status: string;
    generation?: number;
    pendingRotation?: { privateKeyPath: string; publicKeyThumbprint: string; expectedGeneration: number };
  };

const runtimeFor = (configDir: string) => ({
  env: clientEnv(configDir, gateway.origin),
  cwd: process.cwd(),
  platform: process.platform as NodeJS.Platform,
});

describe("vector: rotation races and lost responses", () => {
  test("dropped winning response finalizes locally at exactly one next generation", async () => {
    const box = scratch();
    try {
      const env = enrollEnv(gateway, box.dir);
      expect((await runSetup(env)).code).toBe(0);
      const before = readProfile(box.dir);
      expect(before.generation).toBe(1);

      gateway.dropNextResponse("rotate");
      const rotated = await runRotate(clientEnv(box.dir, gateway.origin));
      expect(rotated.code).toBe(0);

      const after = readProfile(box.dir);
      expect(after.status).toBe("verified");
      expect(after.generation).toBe((before.generation ?? 1) + 1);
      expect(after.pendingRotation).toBeUndefined();
      expect(after.publicKeyThumbprint).not.toBe(before.publicKeyThumbprint);

      // The winner verifies the new signer end to end (token + /v1/me).
      const me = await createClient({}, runtimeFor(box.dir)).me();
      expect(me.authentication).toMatchObject({
        method: "dpop",
        credentialId: before.credentialId,
        generation: after.generation,
        publicKeyThumbprint: after.publicKeyThumbprint,
      });
      expectNoSecretLeak([rotated.run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("two concurrent rotations yield exactly one next generation; the winner verifies", async () => {
    const boxA = scratch();
    const boxB = scratch();
    try {
      const env = enrollEnv(gateway, boxA.dir);
      expect((await runSetup(env)).code).toBe(0);
      const genesis = readProfile(boxA.dir);
      const startGeneration = genesis.generation ?? 1;

      // A second host holding the same credential and generation races the first.
      // Each host needs its own key files: repoint the copy's absolute key path
      // at the copied file so the two CLIs share nothing on disk.
      cpSync(boxA.dir, boxB.dir, { recursive: true });
      const profileBPath = join(boxB.dir, "profiles", "default.json");
      const profileB = JSON.parse(readFileSync(profileBPath, "utf8")) as { privateKeyPath: string };
      expect(profileB.privateKeyPath.startsWith(boxA.dir)).toBe(true);
      profileB.privateKeyPath = join(boxB.dir, "keys", `${genesis.credentialId}.pem`);
      writeFileSync(profileBPath, `${JSON.stringify(profileB, null, 2)}\n`);
      const envA = clientEnv(boxA.dir, gateway.origin);
      const envB = clientEnv(boxB.dir, gateway.origin);

      const [resultA, resultB] = await Promise.all([runRotate(envA), runRotate(envB)]);
      const codes = [resultA.code, resultB.code].sort();
      // Exactly one winner; the loser exits nonzero without touching the winner's state.
      // (The loser authenticates with the retired signer, so the server rejects it with
      // 401 before any generation check; the required observable is a clean nonzero exit
      //  with both keys retained, not any particular conflict wording.)
      expect(codes).toEqual([0, 1]);
      const loser = resultA.code === 0 ? resultB : resultA;
      const loserText = loser.run.stderr.join("\n");
      expect(loserText).toMatch(/kept|retain|resume|conflict|rejected/i);
      expect(loserText).not.toMatch(/replay|old-proof|overwrote|overwrite/i);

      // Exactly one next generation exists server-side.
      const credential = gateway.credentials.get(genesis.credentialId);
      expect(credential?.generation).toBe(startGeneration + 1);

      // The winner's saved identity verifies with the new signer at the new generation.
      const winnerDir = resultA.code === 0 ? boxA.dir : boxB.dir;
      const winner = readProfile(winnerDir);
      expect(winner.status).toBe("verified");
      expect(winner.generation).toBe(startGeneration + 1);
      expect(winner.pendingRotation).toBeUndefined();
      const me = await createClient({}, runtimeFor(winnerDir)).me();
      expect(me.authentication).toMatchObject({
        method: "dpop",
        credentialId: genesis.credentialId,
        generation: startGeneration + 1,
      });
      // The locally saved fingerprint is the fingerprint the server just verified.
      const thumbprint =
        me.authentication && "publicKeyThumbprint" in me.authentication ? me.authentication.publicKeyThumbprint : undefined;
      expect(thumbprint).toBeDefined();
      if (thumbprint === undefined) throw new Error("missing publicKeyThumbprint in /v1/me response");
      expect(winner.publicKeyThumbprint).toBe(thumbprint);

      // The loser's saved identity is retained (old generation + pending candidate),
      // not overwritten with the winner's state.
      const loserDir = resultA.code === 0 ? boxB.dir : boxA.dir;
      const retained = readProfile(loserDir);
      expect(retained.generation).toBe(startGeneration);
      expect(retained.pendingRotation).toBeDefined();

      // No old-proof exception: the retired signer is simply unknown now (401 invalid_client).
      const oldSigner = loadKeyFile(retained.privateKeyPath, process.cwd());
      const stale = new Session({ origin: gateway.origin, credentialId: genesis.credentialId, signer: oldSigner });
      const failure = await stale.request({ method: "GET", rawPath: "/v1/me" }).catch((error: unknown) => error);
      expect(failure).toBeInstanceOf(OAuthError);
      expect(failure).toMatchObject({ error: "invalid_client", status: 401 });
    } finally {
      boxA.cleanup();
      boxB.cleanup();
    }
  }, { timeout: 60_000 });
});
