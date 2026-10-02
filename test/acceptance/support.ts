import { mkdtempSync, mkdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { CliContext } from "../../src/cli/context.js";
import { runCli } from "../../src/cli/main.js";
import { SetupError } from "../../src/errors.js";
import type { MockGateway } from "../harness/mock-gateway.js";

/**
 * Local acceptance-test support. Expectations are derived from
 * `.ship/tmp/SDK_DPOP_CONTRACT.md` and `.ship/tmp/SDK_DPOP_VECTORS.md`,
 * never from the implementation under `src/`.
 */

export interface Scratch {
  /** EASYAPI_CONFIG_DIR value (holds `profiles/` and `keys/`). */
  dir: string;
  /** Top temp dir to remove on cleanup. */
  top: string;
  cleanup: () => void;
}

/** Temp dirs live under `os.tmpdir()` and are always cleaned up by the caller. */
export function scratch(): Scratch {
  const top = mkdtempSync(join(tmpdir(), "easyapi-accept-"));
  const dir = join(top, "config");
  mkdirSync(join(dir, "profiles"), { recursive: true, mode: 0o700 });
  mkdirSync(join(dir, "keys"), { recursive: true, mode: 0o700 });
  return { dir, top, cleanup: () => rmSync(top, { recursive: true, force: true }) };
}

export interface CliRun {
  ctx: CliContext;
  stdout: string[];
  stderr: string[];
}

/** CLI context with a failing prompt, so success proves the bootstrap key came from the environment. */
export function cliRun(env: Record<string, string>): CliRun {
  const stdout: string[] = [];
  const stderr: string[] = [];
  return {
    stdout,
    stderr,
    ctx: {
      env,
      cwd: process.cwd(),
      platform: process.platform,
      timeoutMs: 10_000,
      io: {
        out: (line) => void stdout.push(line),
        err: (line) => void stderr.push(line),
        readSecret: () => Promise.reject(new SetupError("prompt not available in tests")),
      },
    },
  };
}

export async function runSetup(env: Record<string, string>, extra?: Partial<CliContext>): Promise<{ code: number; run: CliRun }> {
  const run = cliRun(env);
  if (extra) Object.assign(run.ctx, extra);
  const code = await runCli(["setup"], run.ctx);
  return { code, run };
}

export async function runRotate(env: Record<string, string>, extra?: Partial<CliContext>): Promise<{ code: number; run: CliRun }> {
  const run = cliRun(env);
  if (extra) Object.assign(run.ctx, extra);
  const code = await runCli(["rotate"], run.ctx);
  return { code, run };
}

/** Environment for a fresh enrollment against the harness gateway. */
export function enrollEnv(gateway: MockGateway, configDir: string): Record<string, string> {
  return {
    EASYAPI_API_KEY: gateway.createParentKey(),
    EASYAPI_CONFIG_DIR: configDir,
    EASYAPI_BASE_URL: gateway.origin,
  };
}

/** Same as `enrollEnv` but without the bootstrap key (post-enrollment use). */
export function clientEnv(configDir: string, origin: string): Record<string, string> {
  return { EASYAPI_CONFIG_DIR: configDir, EASYAPI_BASE_URL: origin };
}

export const withoutBootstrap = (env: Record<string, string>): Record<string, string> => {
  const { EASYAPI_API_KEY: _dropped, ...rest } = env;
  return rest;
};

/** Number of harness requests seen on this exact path. */
export function countPath(gateway: MockGateway, path: string): number {
  return gateway.requestLog.filter((entry) => entry.path === path).length;
}

/** Fail the test if any CLI output leaks the bootstrap secret or private key material. */
export function expectNoSecretLeak(runs: CliRun[], secrets: string[]): void {
  const text = runs.flatMap((run) => [...run.stdout, ...run.stderr]).join("\n");
  expect(text).not.toContain("-----BEGIN PRIVATE KEY-----");
  for (const secret of secrets) {
    if (secret) expect(text).not.toContain(secret);
  }
}
