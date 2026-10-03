import { z } from "zod/v3";
import { SdkOAuthErrorSchema } from "./contract/sdk-auth.js";
import {
  AbortedError,
  ApiError,
  NetworkError,
  OAuthError,
  RedirectRefusedError,
  TimeoutError,
  UnexpectedResponseError,
  describeCause,
} from "./errors.js";

export type FetchLike = (input: string | URL | Request, init?: RequestInit) => Promise<Response>;

export class Deadline {
  readonly at: number;
  constructor(timeoutMs: number, private readonly now: () => number = Date.now) {
    this.at = now() + timeoutMs;
  }
  remainingMs(): number {
    return Math.max(0, this.at - this.now());
  }
}

export interface RawResponse {
  status: number;
  headers: Headers;
  body: Uint8Array;
}

export interface SendInit {
  method: string;
  headers: Record<string, string>;
  body?: string;
  deadline: Deadline;
  signal?: AbortSignal | undefined;
}

/**
 * One HTTP exchange with the body fully read. `redirect: "manual"` plus the 3xx check means a token or
 * proof is never forwarded to a redirect target, same-origin 307/308 included.
 */
export async function send(fetchImpl: FetchLike, url: string, init: SendInit): Promise<RawResponse> {
  const controller = new AbortController();
  let reason: "timeout" | "abort" | undefined;
  const onCallerAbort = (): void => {
    reason = "abort";
    controller.abort();
  };
  if (init.signal?.aborted) throw new AbortedError("request aborted");
  init.signal?.addEventListener("abort", onCallerAbort, { once: true });
  const timer = setTimeout(() => {
    reason = "timeout";
    controller.abort();
  }, init.deadline.remainingMs());
  try {
    const response = await fetchImpl(url, {
      method: init.method,
      headers: init.headers,
      ...(init.body === undefined ? {} : { body: init.body }),
      redirect: "manual",
      signal: controller.signal,
    });
    if (response.status >= 300 && response.status < 400 && response.status !== 304) {
      void response.body?.cancel();
      throw new RedirectRefusedError(response.status);
    }
    return { status: response.status, headers: response.headers, body: new Uint8Array(await response.arrayBuffer()) };
  } catch (error) {
    if (error instanceof RedirectRefusedError) throw error;
    if (reason === "timeout") throw new TimeoutError("the request timed out");
    if (reason === "abort") throw new AbortedError("request aborted");
    throw new NetworkError(`network failure: ${describeCause((error as { cause?: unknown })?.cause ?? error)}`);
  } finally {
    clearTimeout(timer);
    init.signal?.removeEventListener("abort", onCallerAbort);
  }
}

export function retryAfterSeconds(headers: Headers): number | undefined {
  const value = headers.get("retry-after");
  return value !== null && /^\d{1,6}$/.test(value) ? Number(value) : undefined;
}

export const isJson = (headers: Headers): boolean => /^application\/(?:[\w.+-]+\+)?json\b/i.test(headers.get("content-type") ?? "");

export function parseJson(body: Uint8Array): unknown {
  try {
    return JSON.parse(new TextDecoder().decode(body));
  } catch {
    return undefined;
  }
}

const ProductErrorSchema = z.object({
  error: z.object({
    code: z.string().max(128),
    message: z.string().max(2048),
    details: z.record(z.unknown()).optional(),
  }).passthrough(),
});

/** Maps a non-2xx answer to a typed error; anything unrecognised becomes UnexpectedResponseError. */
export function errorFromResponse(response: RawResponse, route: "product" | "oauth"): Error {
  const retryAfter = retryAfterSeconds(response.headers);
  const json = isJson(response.headers) ? parseJson(response.body) : undefined;
  if (route === "oauth") {
    const oauth = SdkOAuthErrorSchema.safeParse(json);
    if (oauth.success) {
      return new OAuthError(oauth.data.error_description ?? oauth.data.error, response.status, oauth.data.error, retryAfter);
    }
  }
  const product = ProductErrorSchema.safeParse(json);
  if (product.success) {
    const { code, message, details } = product.data.error;
    return new ApiError(message, response.status, code, details, retryAfter, response.headers.get("www-authenticate") ?? undefined);
  }
  return new UnexpectedResponseError(`unexpected HTTP ${response.status} response`, response.status, retryAfter);
}
