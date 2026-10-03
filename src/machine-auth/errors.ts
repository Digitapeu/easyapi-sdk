import type { SdkOAuthError } from "./contract/sdk-auth.js";

/** Base class. Messages never contain API keys, tokens, JWTs or private key material. */
export class MachineAuthError extends Error {
  override name = "MachineAuthError";
}

/** Bad local configuration, profile, key file or file-system state. Nothing was sent. */
export class ConfigError extends MachineAuthError {
  override name = "ConfigError";
}

/** A CLI flow (setup, rotate) failed; the message names the corrective step. Saved files are kept. */
export class SetupError extends MachineAuthError {
  override name = "SetupError";
}

/** The call was rejected client-side before any network request was made. */
export class InvalidRequestError extends MachineAuthError {
  override name = "InvalidRequestError";
}

/** Product error envelope `{ error: { code, message } }` returned by the API. */
export class ApiError extends MachineAuthError {
  override name = "ApiError";
  constructor(
    message: string,
    readonly status: number,
    readonly code: string,
    readonly details?: Record<string, unknown>,
    readonly retryAfterSeconds?: number,
    /** Raw `WWW-Authenticate` challenge on 401 responses. */
    readonly challenge?: string,
  ) {
    super(message);
  }
}

/** OAuth error from the token endpoint. */
export class OAuthError extends MachineAuthError {
  override name = "OAuthError";
  constructor(
    message: string,
    readonly status: number,
    readonly error: SdkOAuthError["error"],
    readonly retryAfterSeconds?: number,
  ) {
    super(message);
  }
}

/** A non-2xx answer that matches neither error shape (proxy page, unknown service). */
export class UnexpectedResponseError extends MachineAuthError {
  override name = "UnexpectedResponseError";
  constructor(message: string, readonly status: number, readonly retryAfterSeconds?: number) {
    super(message);
  }
}

/** Connection failure; for mutations the outcome is unknown. */
export class NetworkError extends MachineAuthError {
  override name = "NetworkError";
}

export class TimeoutError extends MachineAuthError {
  override name = "TimeoutError";
}

/** The caller's AbortSignal fired. */
export class AbortedError extends MachineAuthError {
  override name = "AbortedError";
}

/** A 3xx on a credentialed request. Following it would forward the token and proof. */
export class RedirectRefusedError extends MachineAuthError {
  override name = "RedirectRefusedError";
  constructor(readonly status: number) {
    super(`refused to follow HTTP ${status} redirect on a credentialed request; check the base URL`);
  }
}

export function describeCause(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
