import {
  SdkTokenRequestSchema,
  SdkTokenResponseSchema,
  type SdkOAuthError,
} from "../contract/sdk-auth.js";
import {
  AbortedError,
  NetworkError,
  OAuthError,
  TimeoutError,
  UnexpectedResponseError,
} from "./errors.js";
import {
  Deadline,
  errorFromResponse,
  isJson,
  parseJson,
  retryAfterSeconds,
  send,
  type FetchLike,
  type RawResponse,
} from "./http.js";
import type { Signer } from "./keys.js";
import { SDK_VERSION } from "./generated/metadata.js";
import { TOKEN_PATH, clientAssertion, resourceDpopProof, tokenDpopProof, type Clock } from "./proofs.js";

export interface ApiResponse<T> {
  status: number;
  headers: Headers;
  /** Parsed JSON for JSON content types; raw bytes for everything else (PDF, ZIP, octet-stream). */
  body: T;
}

export interface SessionConfig {
  origin: string;
  credentialId: string;
  signer: Signer;
  fetch?: FetchLike;
  now?: Clock;
  scopes?: readonly string[];
  /** Overall budget of one `request()`, retries included. */
  timeoutMs?: number;
}

export interface SessionRequest {
  method: string;
  /** Already expanded and canonical (see `expandPath`). */
  rawPath: string;
  query?: URLSearchParams;
  body?: unknown;
  idempotencyKey?: string;
  signal?: AbortSignal | undefined;
  timeoutMs?: number;
}

const DEFAULT_TIMEOUT_MS = 30_000;
const TOKEN_TIMEOUT_MS = 15_000;
// Renew early so a token never expires between signing a request and the server's check.
const RENEW_MARGIN_SECONDS = 30;
const MAX_SAFE_RETRIES = 2;
const NONCE_PATTERN = /^[\x21-\x7E]{1,512}$/;
const RETRYABLE_STATUS = new Set([429, 502, 503, 504]);
const RETRYABLE_OAUTH: ReadonlySet<SdkOAuthError["error"]> = new Set(["rate_limited", "temporarily_unavailable"]);

function wait(ms: number, signal: AbortSignal | undefined): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = (): void => {
      clearTimeout(timer);
      reject(new AbortedError("request aborted"));
    };
    if (signal?.aborted) return onAbort();
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

/** Lets one caller stop waiting on a shared promise without cancelling it for the others. */
function raceCancel<T>(shared: Promise<T>, deadline: Deadline, signal: AbortSignal | undefined): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => cleanupThen(() => reject(new TimeoutError("the request timed out"))), deadline.remainingMs());
    const onAbort = (): void => cleanupThen(() => reject(new AbortedError("request aborted")));
    const cleanupThen = (settle: () => void): void => {
      clearTimeout(timer);
      signal?.removeEventListener("abort", onAbort);
      settle();
    };
    if (signal?.aborted) return onAbort();
    signal?.addEventListener("abort", onAbort, { once: true });
    shared.then((value) => cleanupThen(() => resolve(value)), (error: unknown) => cleanupThen(() => reject(error)));
  });
}

/** Full jitter on a doubling base; an explicit Retry-After wins. */
const backoffMs = (attempt: number, retryAfter: number | undefined): number =>
  retryAfter !== undefined ? retryAfter * 1000 : Math.random() * Math.min(250 * 2 ** attempt, 2000);

/**
 * A DPoP-authenticated session for one credential. The access token lives only in this object's memory;
 * concurrent callers share one token exchange.
 */
export class Session {
  private cached: { token: string; renewAtMs: number } | undefined;
  private inflight: Promise<string> | undefined;
  private tokenNonce: string | undefined;
  private resourceNonce: string | undefined;
  private readonly fetchImpl: FetchLike;
  private readonly now: Clock;
  private readonly userAgent = `easyapi-sdk/${SDK_VERSION}`;

  constructor(private readonly config: SessionConfig) {
    this.fetchImpl = config.fetch ?? ((input, init) => fetch(input, init));
    this.now = config.now ?? Date.now;
  }

  async request(input: SessionRequest): Promise<ApiResponse<unknown>> {
    const method = input.method.toUpperCase();
    const isSafeRead = method === "GET" || method === "HEAD";
    const deadline = new Deadline(input.timeoutMs ?? this.config.timeoutMs ?? DEFAULT_TIMEOUT_MS);
    const query = input.query?.toString();
    const url = this.config.origin + input.rawPath + (query ? `?${query}` : "");
    let retries = 0;
    let nonceRetried = false;

    for (;;) {
      let response: RawResponse;
      try {
        const token = await this.token(deadline, input.signal);
        response = await send(this.fetchImpl, url, {
          method,
          deadline,
          signal: input.signal,
          headers: this.resourceHeaders(token, method, input),
          ...(input.body === undefined ? {} : { body: JSON.stringify(input.body) }),
        });
      } catch (error) {
        if (isSafeRead && error instanceof NetworkError && retries < MAX_SAFE_RETRIES && await this.pause(retries, undefined, deadline, input.signal)) {
          retries += 1;
          continue;
        }
        throw error;
      }

      this.rememberNonce(response.headers, "resource");
      if (response.status < 300) return this.parseSuccess(response);

      const failure = errorFromResponse(response, "product");
      const challenge = response.headers.get("www-authenticate") ?? "";
      if (response.status === 401 && !nonceRetried && /use_dpop_nonce/i.test(challenge) && this.resourceNonce !== undefined) {
        // Rejected before any handler ran, so replaying with a fresh proof is safe for every method.
        nonceRetried = true;
        continue;
      }
      if (isSafeRead && retries < MAX_SAFE_RETRIES) {
        const expiredToken = response.status === 401 && /invalid_token/i.test(challenge);
        if (expiredToken) this.cached = undefined;
        if ((expiredToken || RETRYABLE_STATUS.has(response.status)) &&
            await this.pause(retries, retryAfterSeconds(response.headers), deadline, input.signal)) {
          retries += 1;
          continue;
        }
      }
      throw failure;
    }
  }

  private resourceHeaders(token: string, method: string, input: SessionRequest): Record<string, string> {
    const headers: Record<string, string> = {
      Authorization: `DPoP ${token}`,
      DPoP: resourceDpopProof(this.config.signer, {
        method, origin: this.config.origin, rawPath: input.rawPath, accessToken: token, now: this.now,
        ...(this.resourceNonce === undefined ? {} : { nonce: this.resourceNonce }),
      }),
      Accept: "application/json, */*;q=0.5",
      "User-Agent": this.userAgent,
    };
    if (input.body !== undefined) headers["Content-Type"] = "application/json";
    // The same key on every attempt, so a replay cannot create a second effect.
    if (input.idempotencyKey !== undefined) headers["Idempotency-Key"] = input.idempotencyKey;
    return headers;
  }

  private parseSuccess(response: RawResponse): ApiResponse<unknown> {
    if (!isJson(response.headers)) return { status: response.status, headers: response.headers, body: response.body };
    const body = response.body.length === 0 ? undefined : parseJson(response.body);
    if (body === undefined && response.body.length > 0) {
      throw new UnexpectedResponseError("the server returned malformed JSON in a success response", response.status);
    }
    return { status: response.status, headers: response.headers, body };
  }

  private rememberNonce(headers: Headers, kind: "token" | "resource"): void {
    const value = headers.get("dpop-nonce");
    if (value === null || !NONCE_PATTERN.test(value)) return;
    if (kind === "token") this.tokenNonce = value;
    else this.resourceNonce = value;
  }

  /** Sleeps for the retry delay; false means it would outlast the deadline, so the caller gives up. */
  private async pause(attempt: number, retryAfter: number | undefined, deadline: Deadline, signal: AbortSignal | undefined): Promise<boolean> {
    const delay = backoffMs(attempt, retryAfter);
    if (delay >= deadline.remainingMs()) return false;
    await wait(delay, signal);
    return true;
  }

  private token(deadline: Deadline, signal: AbortSignal | undefined): Promise<string> {
    if (this.cached !== undefined && this.now() < this.cached.renewAtMs) return Promise.resolve(this.cached.token);
    this.inflight ??= this.acquireWithRetry().finally(() => {
      this.inflight = undefined;
    });
    return raceCancel(this.inflight, deadline, signal);
  }

  private async acquireWithRetry(): Promise<string> {
    const deadline = new Deadline(TOKEN_TIMEOUT_MS);
    for (let attempt = 0; ; attempt += 1) {
      try {
        return await this.exchange(deadline);
      } catch (error) {
        const retryable = error instanceof OAuthError && RETRYABLE_OAUTH.has(error.error);
        const retryAfter = error instanceof OAuthError ? error.retryAfterSeconds : undefined;
        if (!retryable || attempt >= MAX_SAFE_RETRIES || !(await this.pause(attempt, retryAfter, deadline, undefined))) throw error;
      }
    }
  }

  private async exchange(deadline: Deadline): Promise<string> {
    const requestedAtMs = this.now();
    let response = await this.postTokenRequest(deadline);
    if (response.status === 400 && this.isNonceChallenge(response)) response = await this.postTokenRequest(deadline);
    if (response.status !== 200) throw errorFromResponse(response, "oauth");

    const parsed = SdkTokenResponseSchema.safeParse(parseJson(response.body));
    if (!parsed.success) throw new UnexpectedResponseError("the token endpoint returned a malformed response", response.status);
    const token = parsed.data.access_token;
    this.cached = { token, renewAtMs: requestedAtMs + (parsed.data.expires_in - RENEW_MARGIN_SECONDS) * 1000 };
    return token;
  }

  private isNonceChallenge(response: RawResponse): boolean {
    const error = (parseJson(response.body) as { error?: unknown } | undefined)?.error;
    this.rememberNonce(response.headers, "token");
    return error === "use_dpop_nonce" && this.tokenNonce !== undefined;
  }

  private postTokenRequest(deadline: Deadline): Promise<RawResponse> {
    const { origin, credentialId, signer, scopes } = this.config;
    const form = SdkTokenRequestSchema.parse({
      grant_type: "client_credentials",
      client_id: credentialId,
      client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
      client_assertion: clientAssertion(signer, { origin, credentialId, now: this.now }),
      ...(scopes !== undefined && scopes.length > 0 ? { scope: scopes.join(" ") } : {}),
    });
    return send(this.fetchImpl, origin + TOKEN_PATH, {
      method: "POST",
      deadline,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent": this.userAgent,
        DPoP: tokenDpopProof(signer, { origin, now: this.now, ...(this.tokenNonce === undefined ? {} : { nonce: this.tokenNonce }) }),
      },
      body: new URLSearchParams(form).toString(),
    });
  }
}
