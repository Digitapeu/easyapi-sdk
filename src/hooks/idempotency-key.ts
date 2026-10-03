import type { RequestInput } from "../lib/http.js";
import type { BeforeCreateRequestContext, BeforeCreateRequestHook } from "./types.js";

/**
 * Gives every POST an Idempotency-Key unless the caller set one. This runs once per SDK call, before the
 * Request exists, while retries re-send clones of that Request, so every attempt of one call carries the
 * same key and a replayed write cannot take effect twice.
 */
export class IdempotencyKeyHook implements BeforeCreateRequestHook {
  beforeCreateRequest(_context: BeforeCreateRequestContext, input: RequestInput): RequestInput {
    const { options } = input;
    if (options?.method?.toUpperCase() !== "POST") return input;
    const headers = new Headers(options.headers);
    if (!headers.has("Idempotency-Key")) headers.set("Idempotency-Key", crypto.randomUUID());
    return { ...input, options: { ...options, headers } };
  }
}
