import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { CliContext } from "../src/cli/context.js";
import { runCli } from "../src/cli/main.js";
import { SetupError } from "../src/errors.js";
import type { MockGateway } from "./harness/mock-gateway.js";

export interface CliRun {
  ctx: CliContext;
  stdout: string[];
  stderr: string[];
}

export function tempConfigDir(): { dir: string; cleanup: () => void } {
  const base = mkdtempSync(join(tmpdir(), "easyapi-test-"));
  return { dir: join(base, "config"), cleanup: () => rmSync(base, { recursive: true, force: true }) };
}

/** A CLI context whose prompt always fails, so a test only passes if EASYAPI_API_KEY was honoured. */
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
      timeoutMs: 5000,
      io: {
        out: (line) => void stdout.push(line),
        err: (line) => void stderr.push(line),
        readSecret: () => Promise.reject(new SetupError("prompt not available in tests")),
      },
    },
  };
}

export interface Provisioned {
  env: Record<string, string>;
  runtime: { env: Record<string, string>; cwd: string; platform: NodeJS.Platform };
  configDir: string;
  cleanup: () => void;
}

/** Runs the real `easyapi setup` against the harness and returns the resulting environment. */
export async function provision(gateway: MockGateway, now?: () => number): Promise<Provisioned> {
  const config = tempConfigDir();
  const env = { EASYAPI_API_KEY: gateway.createParentKey(), EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: gateway.origin };
  const run = cliRun(env);
  if (now) run.ctx.now = now;
  const code = await runCli(["setup"], run.ctx);
  if (code !== 0) throw new Error(`setup failed: ${run.stderr.join(" ")}`);
  const { EASYAPI_API_KEY: _bootstrap, ...clientEnv } = env;
  return { env: clientEnv, runtime: { env: clientEnv, cwd: process.cwd(), platform: process.platform }, configDir: config.dir, cleanup: config.cleanup };
}
