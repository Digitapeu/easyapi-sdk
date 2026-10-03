import { IdempotencyKeyHook } from "./idempotency-key.js";
import { Hooks } from "./types.js";
import { UserAgentHook } from "./user-agent.js";

export function initHooks(hooks: Hooks) {
  hooks.registerSDKInitHook(new UserAgentHook());
  hooks.registerBeforeCreateRequestHook(new IdempotencyKeyHook());
}
