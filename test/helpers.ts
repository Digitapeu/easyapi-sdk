import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { CliContext } from "../src/cli/context.js";
import { HTTPClient } from "../src/lib/http.js";
import { createMachineClient, type MachineClientOptions } from "../src/machine-auth/client.js";
import type { FetchLike } from "../src/machine-auth/http.js";
import type { EasyApi } from "../src/sdk/sdk.js";
import { runCli } from "../src/cli/main.js";
import { SetupError } from "../src/machine-auth/errors.js";
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

/** One outgoing request as seen on the wire: resource calls and token exchanges alike. */
export interface Attempt {
  method: string;
  url: string;
  authorization: string | null;
  dpop: string | null;
}

type Inner = (input: string | URL | Request, init?: RequestInit) => Promise<Response> | Response;

/** A fetch that records the credential headers of every attempt (string URL or Request alike), then delegates. */
export function recordingFetch(attempts: Attempt[] | undefined, inner: Inner = (input, init) => fetch(input, init)): FetchLike {
  return async (input, init) => {
    const request = input instanceof Request ? input : undefined;
    const headers = new Headers(request ? request.headers : init?.headers);
    attempts?.push({
      method: (request?.method ?? init?.method ?? "GET").toUpperCase(),
      url: request ? request.url : String(input),
      authorization: headers.get("authorization"),
      dpop: headers.get("dpop"),
    });
    return inner(input, init);
  };
}

/**
 * A machine client whose token exchange and resource calls both go through one tap that records every
 * attempt and then delegates to `inner` (the real fetch by default). `inner` is where a test injects
 * transport failures; the gateway stays the real offline harness.
 */
export function machineClient(
  runtime: Provisioned["runtime"],
  options: MachineClientOptions = {},
  tap: { attempts?: Attempt[]; inner?: Inner } = {},
): EasyApi {
  const record = recordingFetch(tap.attempts, tap.inner);
  return createMachineClient({ ...options, fetch: record, sdk: { ...options.sdk, httpClient: new HTTPClient({ fetcher: record }) } }, runtime);
}

/** A fast, bounded retry policy so retry behaviour can be exercised without waiting on production backoff. */
export const quickRetries = { strategy: "backoff", backoff: { initialInterval: 1, maxInterval: 5, exponent: 1, maxElapsedTime: 2_000 }, retryConnectionErrors: true } as const;

/** Answer bodies that satisfy the generated client's strict response schemas. */
const checkedAt = "2026-11-03T12:00:00.000Z";
export const companyData = (cui: string, name = "Example SRL") => ({
  cui,
  name,
  registrationNumber: null,
  address: null,
  vat: { vatActive: true, vatOnPayment: false, vatNumber: null },
  active: true,
  checkedAt,
});
export const litigationData = (cui: string) => ({
  company: { cui, name: "Example SRL" },
  queried: { party: null },
  sameName: { status: "checked", count: 0, listed: false, companies: [] },
  matches: [],
  truncated: false,
  source: "portal",
  criminalMattersExcluded: true,
  checkedAt,
});
export const ratesData = () => ({ base: "RON", date: "2026-11-03", rates: [{ currency: "EUR", rate: 5 }], source: "BNR", checkedAt });
export const batchData = () => ({ companies: [], notFound: [] });
