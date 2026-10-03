import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { EasyApi } from "../sdk/sdk.js";
import { SdkScopeStringSchema, type Scope } from "./contract/sdk-auth.js";
import { DpopHook } from "./dpop-hook.js";
import { ConfigError } from "./errors.js";
import type { FetchLike } from "./http.js";
import type { Signer } from "./keys.js";
import type { Clock } from "./proofs.js";
import { Session } from "./session.js";
import { currentRuntime, resolveIdentity, type ResolveOptions, type Runtime } from "./resolve.js";

const DEFAULT_TIMEOUT_MS = 30_000;

/** What identifies one machine credential to the gateway. */
export interface MachineIdentity {
  baseUrl: string;
  credentialId: string;
  signer: Signer;
}

export interface MachineClientSettings {
  /** Scopes to request; default is everything the key currently allows. */
  scopes?: readonly Scope[];
  /** Replaces the global `fetch` for the token exchange only, e.g. for proxies or tests. */
  fetch?: FetchLike;
  now?: Clock;
  /** Options of the generated client (retries, timeoutMs, httpClient, ...). `apiKey` is not accepted. */
  sdk?: Omit<SDKOptions, "apiKey">;
}

export interface MachineClientOptions extends ResolveOptions, Omit<MachineClientSettings, "now"> {}

/** A generated `EasyApi` client that authenticates every request as this machine credential. */
export function clientForIdentity(identity: MachineIdentity, settings: MachineClientSettings = {}): EasyApi {
  const scopes = settings.scopes === undefined ? undefined : [...new Set(settings.scopes)];
  if (scopes !== undefined && !SdkScopeStringSchema.safeParse(scopes.join(" ")).success) {
    throw new ConfigError("scopes must be known product scopes, e.g. company:read");
  }
  const timeoutMs = settings.sdk?.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const session = new Session({
    origin: identity.baseUrl,
    credentialId: identity.credentialId,
    signer: identity.signer,
    timeoutMs,
    ...(settings.fetch === undefined ? {} : { fetch: settings.fetch }),
    ...(settings.now === undefined ? {} : { now: settings.now }),
    ...(scopes === undefined ? {} : { scopes }),
  });

  const dpop = new DpopHook(session, timeoutMs);
  const httpClient = settings.sdk?.httpClient ?? new HTTPClient();
  httpClient.addHook("response", dpop.trackResponse);
  // `new SDKHooks()` already carries the hooks of src/hooks/registration.ts (Idempotency-Key).
  const hooks = new SDKHooks();
  hooks.registerBeforeRequestHook(dpop);
  hooks.registerAfterSuccessHook(dpop);
  hooks.registerAfterErrorHook(dpop);

  // ClientSDK adopts an SDKHooks instance passed under `hooks`; no generated file is edited.
  const sdkOptions: SDKOptions & { hooks: SDKHooks } = {
    serverURL: identity.baseUrl,
    ...settings.sdk,
    httpClient,
    hooks,
  };
  return new EasyApi(sdkOptions);
}

/**
 * Builds a generated `EasyApi` client from the machine credential saved by `easyapi setup`. Resolution is
 * the CLI's: explicit options, then EASYAPI_* environment variables, then the saved profile. Reads local
 * files only; the first network call happens on first use.
 */
export function createMachineClient(options: MachineClientOptions = {}, runtime: Runtime = currentRuntime()): EasyApi {
  return clientForIdentity(resolveIdentity(options, runtime), options);
}
