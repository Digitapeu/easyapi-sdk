import type { FetchLike } from "../http.js";
import type { Clock } from "../proofs.js";
import { currentRuntime, type Runtime } from "../resolve.js";
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
