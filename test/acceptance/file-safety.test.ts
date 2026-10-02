import { chmodSync, lstatSync, mkdirSync, readFileSync, statSync, symlinkSync, unlinkSync, writeFileSync } from "node:fs";
import { hostname } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { RedirectRefusedError } from "../../src/errors.js";
import { createClient } from "../../src/index.js";
import { runCli } from "../../src/cli/main.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { cliRun, clientEnv, countPath, enrollEnv, expectNoSecretLeak, runSetup, scratch } from "./support.js";

/**
 * Vectors table line 56: "Symlink/traversal/unsafe ownership/concurrent
 * CLI/redirect → No leaked secret or overwritten file; saved identity retained
 * on uncertainty". Contract §7: exclusive creation/no-follow opens, fstat
 * regular-file/owner/mode checks, atomic rename; reject symlinked or
 * writable-by-others path components; per-profile exclusive locks (never stolen
 * by age); the SDK never follows redirects on credentialed requests.
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

async function provisioned(): Promise<{ box: ReturnType<typeof scratch>; env: Record<string, string>; profileRaw: string; keyRaw: string; keyPath: string }> {
  const box = scratch();
  const env = enrollEnv(gateway, box.dir);
  const setup = await runSetup(env);
  expect(setup.code).toBe(0);
  const profilePath = join(box.dir, "profiles", "default.json");
  const profile = JSON.parse(readFileSync(profilePath, "utf8")) as { privateKeyPath: string };
  return { box, env, profileRaw: readFileSync(profilePath, "utf8"), keyRaw: readFileSync(profile.privateKeyPath, "utf8"), keyPath: profile.privateKeyPath };
}

describe("vector: symlink, traversal, unsafe ownership, concurrent CLI, redirect", () => {
  test("symlinked key file is refused before any network call; files retained", async () => {
    const { box, env, profileRaw } = await provisioned();
    try {
      const profile = JSON.parse(profileRaw) as { privateKeyPath: string };
      const real = `${profile.privateKeyPath}.real`;
      writeFileSync(real, readFileSync(profile.privateKeyPath, "utf8"), { mode: 0o600 });
      unlinkSync(profile.privateKeyPath);
      symlinkSync(real, profile.privateKeyPath);

      const requestsBefore = gateway.requestLog.length;
      const run = cliRun(clientEnv(box.dir, gateway.origin));
      expect(await runCli(["status"], run.ctx)).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")).toBe(profileRaw);
      expect(lstatSync(profile.privateKeyPath).isSymbolicLink()).toBe(true);
      expect(run.stderr.join("\n")).toMatch(/symlink/i);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("symlinked profile file is refused before any network call", async () => {
    const { box, env, profileRaw } = await provisioned();
    try {
      const profilePath = join(box.dir, "profiles", "default.json");
      const real = `${profilePath}.real`;
      writeFileSync(real, profileRaw, { mode: 0o600 });
      unlinkSync(profilePath);
      symlinkSync(real, profilePath);

      const requestsBefore = gateway.requestLog.length;
      const run = cliRun(clientEnv(box.dir, gateway.origin));
      expect(await runCli(["status"], run.ctx)).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(lstatSync(profilePath).isSymbolicLink()).toBe(true);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("traversal-shaped key path outside the keys dir is still gated; target untouched", async () => {
    const { box, env, profileRaw } = await provisioned();
    try {
      // A hand-edited profile pointing outside the managed keys dir at a file we own.
      const outsider = join(box.top, "outside.pem");
      writeFileSync(outsider, "not a private key", { mode: 0o600 });
      const profilePath = join(box.dir, "profiles", "default.json");
      const edited = { ...(JSON.parse(profileRaw) as Record<string, unknown>), privateKeyPath: outsider };
      writeFileSync(profilePath, `${JSON.stringify(edited, null, 2)}\n`);

      const requestsBefore = gateway.requestLog.length;
      const run = cliRun(clientEnv(box.dir, gateway.origin));
      expect(await runCli(["status"], run.ctx)).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(readFileSync(outsider, "utf8")).toBe("not a private key");
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("non-0600 key file is refused and not repaired in place", async () => {
    const { box, env, profileRaw, keyRaw, keyPath } = await provisioned();
    try {
      chmodSync(keyPath, 0o644);
      const requestsBefore = gateway.requestLog.length;
      const run = cliRun(clientEnv(box.dir, gateway.origin));
      expect(await runCli(["status"], run.ctx)).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")).toBe(profileRaw);
      expect(readFileSync(keyPath, "utf8")).toBe(keyRaw);
      expect(statSync(keyPath).mode & 0o777).toBe(0o644);
      expect(run.stderr.join("\n")).toMatch(/0600/);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("non-0700 keys dir is refused before any network call", async () => {
    const { box, env, profileRaw } = await provisioned();
    try {
      chmodSync(join(box.dir, "keys"), 0o755);
      const requestsBefore = gateway.requestLog.length;
      // setup (unlike the lock-free read-only status) verifies its directories first.
      const { code, run } = await runSetup(clientEnv(box.dir, gateway.origin));
      expect(code).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")).toBe(profileRaw);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("group-writable ancestor is refused before any network call", async () => {
    const box = scratch();
    try {
      const shared = join(box.top, "shared");
      mkdirSync(join(shared, "config", "profiles"), { recursive: true, mode: 0o700 });
      mkdirSync(join(shared, "config", "keys"), { recursive: true, mode: 0o700 });
      chmodSync(shared, 0o777);
      // No sticky bit: another local user could swap this directory.
      expect(statSync(shared).mode & 0o1000).toBe(0);

      const requestsBefore = gateway.requestLog.length;
      const env = enrollEnv(gateway, join(shared, "config"));
      const run = cliRun(env);
      expect(await runCli(["setup"], run.ctx)).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(run.stderr.join("\n")).toMatch(/writable by other users/);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      chmodSync(join(box.top, "shared"), 0o700);
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("concurrent CLI with a live lock holder waits instead of trampling; identity retained", async () => {
    const { box, env, profileRaw } = await provisioned();
    try {
      const lockPath = join(box.dir, "profiles", "default.lock");
      writeFileSync(
        lockPath,
        JSON.stringify({ ownerId: "live-holder", pid: process.pid, host: hostname() }),
        { mode: 0o600 },
      );

      const requestsBefore = gateway.requestLog.length;
      // The mutating setup path serializes per profile; status stays lock-free and read-only.
      const { code, run } = await runSetup(clientEnv(box.dir, gateway.origin));
      expect(code).not.toBe(0);

      expect(gateway.requestLog.length).toBe(requestsBefore);
      expect(run.stderr.join("\n")).toMatch(/another .* holds .*\.lock|wait for it to finish/i);
      // The holder's lock and our saved identity are untouched.
      expect(JSON.parse(readFileSync(lockPath, "utf8"))).toMatchObject({ ownerId: "live-holder" });
      expect(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")).toBe(profileRaw);
      expectNoSecretLeak([run], [env.EASYAPI_API_KEY ?? ""]);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });

  test("3xx on a credentialed request is refused; nothing is forwarded to the target", async () => {
    const { box, profileRaw } = await provisioned();
    try {
      gateway.onResource("GET", "/v1/fx/convert", (res) => {
        res.writeHead(307, { Location: `${gateway.origin}/v1/me` });
        res.end();
      });
      const meBefore = countPath(gateway, "/v1/me");
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const failure = await createClient({}, runtime)
        .request("get", "/v1/fx/convert", { query: { from: "EUR", to: "RON", amount: 1 } })
        .catch((error: unknown) => error);

      expect(failure).toBeInstanceOf(RedirectRefusedError);
      // The redirect target never saw the token or the proof.
      expect(countPath(gateway, "/v1/me")).toBe(meBefore);
      expect(readFileSync(join(box.dir, "profiles", "default.json"), "utf8")).toBe(profileRaw);
    } finally {
      box.cleanup();
    }
  }, { timeout: 15_000 });
});
