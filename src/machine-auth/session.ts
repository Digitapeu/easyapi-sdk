import {
  SdkTokenRequestSchema,
  SdkTokenResponseSchema,
  type SdkOAuthError,
} from "./contract/sdk-auth.js";
import {
  AbortedError,
  OAuthError,
  TimeoutError,
  UnexpectedResponseError,
} from "./errors.js";
import {
  Deadline,
  errorFromResponse,
  parseJson,
  send,
  type FetchLike,
  type RawResponse,
} from "./http.js";
import type { Signer } from "./keys.js";
import { SDK_VERSION } from "./defaults.js";
import { TOKEN_PATH, assertCanonicalPath, clientAssertion, resourceDpopProof, tokenDpopProof, type Clock } from "./proofs.js";

export interface SessionConfig {
  origin: string;
  credentialId: string;
  signer: Signer;
  fetch?: FetchLike;
  now?: Clock;
  scopes?: readonly string[];
  /** Budget of one token exchange or one `postSigned()` call. */
  timeoutMs?: number;
}

/** Headers that authenticate one resource request; the proof is bound to its method, URL and token. */
export interface ResourceAuthHeaders {
  Authorization: string;
  DPoP: string;
}

const DEFAULT_TIMEOUT_MS = 30_000;
const TOKEN_TIMEOUT_MS = 15_000;
// Renew early so a token never expires between signing a request and the server's check.
const RENEW_MARGIN_SECONDS = 30;
const MAX_SAFE_RETRIES = 2;
const NONCE_PATTERN = /^[\x21-\x7E]{1,512}$/;
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

/** Full jitter on a doubling base; an explicit Retry-After wins. Used for token-exchange retries only. */
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

  /**
   * Authorization and DPoP headers for one resource request. A fresh proof (new jti) is signed on every
   * call, so a retried attempt never reuses a proof the server has already seen.
   */
  async authorize(method: string, url: URL, deadline: Deadline, signal: AbortSignal | undefined): Promise<ResourceAuthHeaders> {
    // Throws before signing anything that the gateway would refuse to verify.
    assertCanonicalPath(url.pathname);
    const token = await this.token(deadline, signal);
    return {
      Authorization: `DPoP ${token}`,
      DPoP: resourceDpopProof(this.config.signer, {
        method, origin: url.origin, rawPath: url.pathname, accessToken: token, now: this.now,
        ...(this.resourceNonce === undefined ? {} : { nonce: this.resourceNonce }),
      }),
    };
  }

  /** Records the resource server's `DPoP-Nonce` so the next proof carries it. */
  rememberResourceNonce(headers: Headers): void {
    this.rememberNonce(headers, "resource");
  }

  hasResourceNonce(): boolean {
    return this.resourceNonce !== undefined;
  }

  /** Forgets the cached access token, e.g. after the server called it expired or revoked. */
  invalidateToken(): void {
    this.cached = undefined;
  }

  /**
   * One DPoP-authenticated JSON POST to an operation the generated client does not expose (credential
   * rotation). Replays exactly once when the server answers with a nonce challenge.
   */
  async postSigned(rawPath: string, body: unknown): Promise<unknown> {
    const deadline = new Deadline(this.config.timeoutMs ?? DEFAULT_TIMEOUT_MS);
    const url = new URL(this.config.origin + rawPath);
    for (let nonceRetried = false; ; nonceRetried = true) {
      const auth = await this.authorize("POST", url, deadline, undefined);
      const response = await send(this.fetchImpl, url.href, {
        method: "POST",
        deadline,
        headers: { ...auth, "Content-Type": "application/json", Accept: "application/json", "User-Agent": this.userAgent },
        body: JSON.stringify(body),
      });
      this.rememberNonce(response.headers, "resource");
      if (response.status < 300) return parseJson(response.body);
      const challenge = response.headers.get("www-authenticate") ?? "";
      if (!nonceRetried && response.status === 401 && /use_dpop_nonce/i.test(challenge) && this.resourceNonce !== undefined) continue;
      throw errorFromResponse(response, "product");
    }
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
      body: new URLSearchParams(Object.entries(form).flatMap(([key, value]) => (value === undefined ? [] : [[key, value]]))).toString(),
    });
  }
}
