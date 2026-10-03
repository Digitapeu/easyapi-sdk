import { EasyAPIError } from "../models/errors/easy-api-error.js";
import { UnexpectedClientError } from "../models/errors/http-client-errors.js";
import type { GetV1MeData } from "../models/operations/get-v1-me.js";
import { ApiError, MachineAuthError, SetupError } from "../machine-auth/errors.js";
import { retryAfterSeconds } from "../machine-auth/http.js";
import type { EasyApi } from "../sdk/sdk.js";

export type MeData = GetV1MeData;

/** Maps what the generated client throws back to the machine-auth errors the CLI flows match on. */
function toCliError(error: unknown): unknown {
  if (error instanceof UnexpectedClientError && error.cause instanceof MachineAuthError) return error.cause;
  if (error instanceof EasyAPIError) {
    const code = "error" in error && typeof error.error === "object" && error.error !== null && "code" in error.error ? String(error.error.code) : "unknown";
    return new ApiError(error.message, error.statusCode, code, undefined, retryAfterSeconds(error.headers));
  }
  return error;
}

export async function fetchMe(client: EasyApi): Promise<MeData> {
  try {
    return (await client.me.get()).result.data;
  } catch (error) {
    throw toCliError(error);
  }
}

export type Verdict = { kind: "match"; generation: number } | { kind: "mismatch"; reason: string };

/** Compares what the server says about this request's authentication with the local credential. */
export function judgeIdentity(me: MeData, expected: { credentialId: string; thumbprint: string; generation?: number }): Verdict {
  const auth = me.authentication;
  if (auth?.method !== "dpop") return { kind: "mismatch", reason: "the server did not report DPoP authentication for this request" };
  if (auth.credentialId !== expected.credentialId) return { kind: "mismatch", reason: "the credential ID differs from the saved one" };
  if (auth.publicKeyThumbprint !== expected.thumbprint) return { kind: "mismatch", reason: "the registered key fingerprint differs from the local key" };
  if (expected.generation !== undefined && auth.generation !== expected.generation) {
    return { kind: "mismatch", reason: `the server is at generation ${auth.generation}, expected ${expected.generation}` };
  }
  return { kind: "match", generation: auth.generation };
}

export function requireMatch(verdict: Verdict): number {
  if (verdict.kind === "mismatch") throw new SetupError(`verification failed: ${verdict.reason}`);
  return verdict.generation;
}
