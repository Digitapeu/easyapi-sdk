import { HTTPClient } from "../lib/http.js";
import { clientForIdentity, type MachineIdentity } from "../machine-auth/client.js";
import type { EasyApi } from "../sdk/sdk.js";
import type { FetchLike } from "../machine-auth/http.js";
import type { Clock } from "../machine-auth/proofs.js";
import { currentRuntime, type Runtime } from "../machine-auth/resolve.js";
import { readSecretFromTty } from "./prompt.js";

export interface CliIo {
  out(line: string): void;
  err(line: string): void;
  readSecret(prompt: string): Promise<string>;
}

export interface CliContext extends Runtime {
  io: CliIo;
  fetch?: FetchLike;
  now?: Clock;
  timeoutMs: number;
}

export const defaultContext = (): CliContext => ({
  ...currentRuntime(),
  io: {
    out: (line) => process.stdout.write(`${line}\n`),
    err: (line) => process.stderr.write(`${line}\n`),
    readSecret: readSecretFromTty,
  },
  timeoutMs: 30_000,
});

/** The generated client for one identity, wired to the CLI's injectable fetch, clock and timeout. */
export const cliClient = (ctx: CliContext, identity: MachineIdentity): EasyApi =>
  clientForIdentity(identity, {
    ...(ctx.fetch === undefined ? {} : { fetch: ctx.fetch }),
    ...(ctx.now === undefined ? {} : { now: ctx.now }),
    sdk: {
      timeoutMs: ctx.timeoutMs,
      ...(ctx.fetch === undefined ? {} : { httpClient: new HTTPClient({ fetcher: ctx.fetch }) }),
    },
  });
