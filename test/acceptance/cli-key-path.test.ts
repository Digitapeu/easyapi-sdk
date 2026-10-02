import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { assertValidProfile } from "../../src/profile-store.js";
import { runCli } from "../../src/cli/main.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { cliRun, enrollEnv, scratch, type Scratch } from "./support.js";

/**
 * Vectors table line 41: "CLI enrollment with a relative or Windows key path
 * → Rejected by the profile check before any network call; no credential created".
 * Contract §7: "Paths become absolute on save"; the profile schema requires an
 * absolute key path, and the CLI validates the profile (including the key path)
 * before the write and before any network call.
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

const RELATIVE_PATHS = ["keys/credential.pem", "../keys/credential.pem", "~/keys/credential.pem", "credential.pem"];
const WINDOWS_PATHS = ["C:\\easyapi\\keys\\credential.pem", "C:/easyapi/keys/credential.pem", "\\\\server\\share\\credential.pem"];

function validProfileFields(origin: string) {
  return {
    credentialId: "0b0f7b3e-5c3e-4a55-9c1e-2a6f0f6f9d11",
    publicOrigin: origin,
    publicKeyThumbprint: "A".repeat(42) + "A",
    status: "pending" as const,
  };
}

describe("vector: enrollment with a relative or Windows key path", () => {
  test.each(RELATIVE_PATHS)("profile check rejects relative key path %s", (keyPath) => {
    expect(() =>
      assertValidProfile({ ...validProfileFields(gateway.origin), privateKeyPath: keyPath }),
    ).toThrow(/absolute/);
  });

  test.each(WINDOWS_PATHS)("profile check rejects Windows key path %s", (keyPath) => {
    expect(() =>
      assertValidProfile({ ...validProfileFields(gateway.origin), privateKeyPath: keyPath }),
    ).toThrow(/absolute/);
  });

  test.each([...RELATIVE_PATHS, ...WINDOWS_PATHS])(
    "saved profile with key path %s fails setup before any network call",
    async (keyPath) => {
      const box: Scratch = scratch();
      try {
        // A profile carried over from another machine (e.g. Windows-authored) or
        // hand-edited: written as raw JSON to bypass the writer's own validation.
        const profilePath = join(box.dir, "profiles", "default.json");
        const profile = { ...validProfileFields(gateway.origin), privateKeyPath: keyPath };
        writeFileSync(profilePath, `${JSON.stringify(profile, null, 2)}\n`, { mode: 0o600 });
        const rawBefore = readFileSync(profilePath, "utf8");

        const requestsBefore = gateway.requestLog.length;
        const credentialsBefore = gateway.credentials.size;
        const env = enrollEnv(gateway, box.dir);
        const run = cliRun(env);
        const code = await runCli(["setup"], run.ctx);

        expect(code).not.toBe(0);
        // No network call happened and no credential was created server-side.
        expect(gateway.requestLog.length).toBe(requestsBefore);
        expect(gateway.credentials.size).toBe(credentialsBefore);
        // The invalid profile was not overwritten or "fixed" in place.
        expect(readFileSync(profilePath, "utf8")).toBe(rawBefore);
        // Nothing secret leaks into CLI output.
        expect(run.stdout.join("\n") + run.stderr.join("\n")).not.toContain(env.EASYAPI_API_KEY ?? "");
      } finally {
        box.cleanup();
      }
    },
    { timeout: 15_000 },
  );

  test("a valid absolute profile is not rejected by the same check", async () => {
    const box: Scratch = scratch();
    try {
      const env = enrollEnv(gateway, box.dir);
      const run = cliRun(env);
      // Fresh setup generates an absolute key path and must proceed to the network.
      const code = await runCli(["setup"], run.ctx);
      expect(code).toBe(0);
      const saved = JSON.parse(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")) as { privateKeyPath: string };
      expect(saved.privateKeyPath.startsWith("/")).toBe(true);
    } finally {
      box.cleanup();
    }
  });
});
