import { IdempotencyKeyHook } from "./idempotency-key.js";
import { Hooks } from "./types.js";

export function initHooks(hooks: Hooks) {
  hooks.registerBeforeCreateRequestHook(new IdempotencyKeyHook());
}
