import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { createClient } from "../../src/index.js";
import { runCli } from "../../src/cli/main.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import {
  cliRun,
  clientEnv,
  countPath,
  enrollEnv,
  expectNoSecretLeak,
  runSetup,
  scratch,
  withoutBootstrap,
} from "./support.js";

/**
 * Vectors table line 9: "Drop enrollment response, restart without bootstrap key
 * → Saved ID/signer completes token/verification; no new identity".
 * Contract §3 (Enrollment): "On restart, first try token acquisition with the saved
 * ID/key, then /v1/me. A committed enrollment therefore resumes without the bootstrap
 * secret. ... Never silently substitute a server-generated ID or regenerate the key."
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

describe("vector: dropped enrollment response resumes without the bootstrap key", () => {
  test("saved ID/signer completes token and verification; no new identity", async () => {
    const box = scratch();
    try {
      const env = enrollEnv(gateway, box.dir);
      const credentialsBefore = gateway.credentials.size;

      // The server commits, then the response is lost on the wire. (A destroyed
      // socket never fires the harness's finish hook, so observe the commit in
      // the credential store rather than the request log.)
      gateway.dropNextResponse("enroll");
      const first = await runSetup(env);
      expect(first.code).not.toBe(0);
      expectNoSecretLeak([first.run], [env.EASYAPI_API_KEY ?? ""]);

      const pending = JSON.parse(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")) as {
        credentialId: string;
        privateKeyPath: string;
        status: string;
      };
      expect(pending.status).toBe("pending");
      expect(existsSync(pending.privateKeyPath)).toBe(true);
      // The enrollment committed exactly once server-side despite the lost response.
      expect(gateway.credentials.has(pending.credentialId)).toBe(true);
      expect(gateway.credentials.size).toBe(credentialsBefore + 1);

      // Restart without the bootstrap key: the saved ID/signer must finish the job.
      const bare = withoutBootstrap(env);
      expect(bare.EASYAPI_API_KEY).toBeUndefined();
      const enrollCallsBefore = countPath(gateway, "/v1/auth/enroll");
      const second = await runSetup(bare);
      expect(second.code).toBe(0);

      const done = JSON.parse(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")) as {
        credentialId: string;
        privateKeyPath: string;
        status: string;
        generation: number;
      };
      // No new identity: same credential ID, same key file, now verified at generation 1.
      expect(done.credentialId).toBe(pending.credentialId);
      expect(done.privateKeyPath).toBe(pending.privateKeyPath);
      expect(done.status).toBe("verified");
      expect(done.generation).toBe(1);
      // The resume used token + verification, not a second enrollment:
      // no new identity server-side and no further enrollment call logged.
      expect(gateway.credentials.size).toBe(credentialsBefore + 1);
      expect(countPath(gateway, "/v1/auth/enroll")).toBe(enrollCallsBefore);

      const me = await createClient({}, { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform }).me();
      expect(me.authentication).toMatchObject({ method: "dpop", credentialId: pending.credentialId, generation: 1 });
      expectNoSecretLeak([first.run, second.run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("resuming an unknown (never-committed) enrollment asks for the bootstrap key again", async () => {
    const box = scratch();
    try {
      const env = enrollEnv(gateway, box.dir);
      expect((await runSetup(env)).code).toBe(0);

      // Simulate "never committed": point the saved identity at a credential ID the
      // server never saw, then drop the bootstrap key. Token acquisition must fail
      // with unknown-client and setup must demand the bootstrap secret again
      // (prompt unavailable here, so it exits nonzero asking for it).
      const profilePath = join(box.dir, "profiles", "default.json");
      const saved = JSON.parse(readFileSync(profilePath, "utf8")) as Record<string, unknown>;
      saved.credentialId = "11111111-1111-4111-8111-111111111111";
      writeFileSync(profilePath, `${JSON.stringify(saved, null, 2)}\n`);

      const bare = withoutBootstrap(env);
      const run = cliRun(bare);
      const code = await runCli(["setup"], run.ctx);
      expect(code).not.toBe(0);
      expect(run.stderr.join("\n")).toMatch(/API key|bootstrap|setup/i);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });
});
