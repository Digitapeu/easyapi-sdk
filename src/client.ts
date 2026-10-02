import { SdkScopeStringSchema, type MeAuthentication, type Scope } from "../contract/sdk-auth.js";
import { ConfigError, InvalidRequestError } from "./errors.js";
import type { paths } from "./generated/openapi.js";
import type { FetchLike } from "./http.js";
import { expandPath } from "./proofs.js";
import { currentRuntime, resolveIdentity, type ResolveOptions, type Runtime } from "./resolve.js";
import { Session, type ApiResponse } from "./session.js";

type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

// Search, JSON e-Factura upload, the invoice ZIP download and all four REGES workflows exist in the
// exported API description but are not supported yet, so they are not reachable through the typed surface.
type UnadvertisedPath =
  | "/v1/search"
  | "/v1/efactura/invoices"
  | "/v1/efactura/invoices/{id}/zip"
  | "/v1/reges/contracts"
  | "/v1/reges/contracts/{id}/terminate"
  | "/v1/reges/jobs/{id}"
  | "/v1/reges/employees";

export type SupportedPath = Exclude<keyof paths, UnadvertisedPath>;
export type MethodsOf<P extends SupportedPath> = {
  [M in HttpMethod]-?: [NonNullable<paths[P][M]>] extends [never] ? never : M;
}[HttpMethod];
export type Operation<P extends SupportedPath, M extends HttpMethod> = NonNullable<paths[P][M]>;

type PathParamsOf<O> = O extends { parameters: { path?: infer T } } ? Exclude<T, undefined> : never;
type QueryOf<O> = O extends { parameters: { query?: infer T } } ? Exclude<T, undefined> : never;
type BodyOf<O> = O extends { requestBody?: infer R }
  ? [NonNullable<R>] extends [never] ? never
    : NonNullable<R> extends { content: { "application/json": infer B } } ? B : never
  : never;

export interface CallOptions {
  /** Sent unchanged on every attempt. The SDK never retries a mutation by itself. */
  idempotencyKey?: string;
  signal?: AbortSignal;
  /** Overall budget for this call, token exchange and retries included. */
  timeoutMs?: number;
}

export type RequestInit<O> = CallOptions &
  ([PathParamsOf<O>] extends [never] ? unknown : { path: PathParamsOf<O> }) &
  ([QueryOf<O>] extends [never] ? unknown : unknown extends QueryOf<O> ? unknown
    : Record<never, never> extends QueryOf<O> ? { query?: QueryOf<O> } : { query: QueryOf<O> }) &
  ([BodyOf<O>] extends [never] ? unknown : { body: BodyOf<O> });

export type InitArgs<O> = Record<never, never> extends RequestInit<O> ? [init?: RequestInit<O>] : [init: RequestInit<O>];

type SuccessOf<O> = O extends { responses: infer R }
  ? R extends { 200: infer S } ? S : R extends { 201: infer S } ? S : never
  : never;
/** JSON endpoints give their parsed envelope; binary endpoints (SPV documents) give `Uint8Array`. */
export type ResponseBody<O> = [SuccessOf<O>] extends [never] ? unknown
  : SuccessOf<O> extends { content: infer C } ? (C extends { "application/json": infer J } ? J : Uint8Array) : unknown;

type DataOf<P extends SupportedPath> = ResponseBody<Operation<P, "get">> extends { data: infer D } ? D : never;

export interface ClientOptions extends ResolveOptions {
  /** Scopes to request; default is everything the key currently allows. */
  scopes?: readonly Scope[];
  /** Default overall budget per call; 30 seconds when unset. */
  timeoutMs?: number;
  /** Replaces the global `fetch`, e.g. for proxies or tests. */
  fetch?: FetchLike;
}

export interface EasyApiClient {
  readonly credentialId: string;
  readonly baseUrl: string;
  request<P extends SupportedPath, M extends HttpMethod & MethodsOf<P>>(
    method: M, path: P, ...init: InitArgs<Operation<P, M>>
  ): Promise<ApiResponse<ResponseBody<Operation<P, M>>>>;
  /** Resolved business, tier and scopes; `authentication` shows how this call was authenticated. */
  me(options?: CallOptions): Promise<DataOf<"/v1/me"> & { authentication?: MeAuthentication }>;
  company: {
    get(cui: string, options?: CallOptions): Promise<DataOf<"/v1/company/{cui}">>;
    vatStatus(cui: string, options?: CallOptions): Promise<DataOf<"/v1/company/{cui}/vat-status">>;
    balance(cui: string, options?: CallOptions): Promise<DataOf<"/v1/company/{cui}/balance">>;
    litigation(cui: string, options?: CallOptions): Promise<DataOf<"/v1/company/{cui}/litigation">>;
  };
}

interface CallInit extends CallOptions {
  path?: Record<string, string | number>;
  query?: Record<string, unknown>;
  body?: unknown;
}

// OpenAPI "form" style with explode: arrays repeat the key.
function toSearchParams(query: Record<string, unknown> | undefined): URLSearchParams | undefined {
  if (query === undefined) return undefined;
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    for (const item of Array.isArray(value) ? value : [value]) {
      if (item !== undefined && item !== null) params.append(key, String(item));
    }
  }
  return params;
}

/**
 * Builds a client from the same resolution the CLI uses: explicit options, then EASYAPI_* environment
 * variables, then the saved profile. Reads local files only; the first network call happens on first use.
 */
export function createClient(options: ClientOptions = {}, runtime: Runtime = currentRuntime()): EasyApiClient {
  const identity = resolveIdentity(options, runtime);
  const scopes = options.scopes === undefined ? undefined : [...new Set(options.scopes)];
  if (scopes !== undefined && !SdkScopeStringSchema.safeParse(scopes.join(" ")).success) {
    throw new ConfigError("scopes must be known product scopes, e.g. company:read");
  }
  const session = new Session({
    origin: identity.baseUrl,
    credentialId: identity.credentialId,
    signer: identity.signer,
    ...(options.fetch === undefined ? {} : { fetch: options.fetch }),
    ...(scopes === undefined ? {} : { scopes }),
    ...(options.timeoutMs === undefined ? {} : { timeoutMs: options.timeoutMs }),
  });

  async function request(method: string, path: string, init: CallInit = {}): Promise<ApiResponse<unknown>> {
    if (init.idempotencyKey !== undefined && !/^[\x21-\x7E]{1,255}$/.test(init.idempotencyKey)) {
      throw new InvalidRequestError("the idempotency key must be 1-255 printable ASCII characters");
    }
    const query = toSearchParams(init.query);
    return session.request({
      method,
      rawPath: expandPath(path, init.path),
      ...(query === undefined ? {} : { query }),
      ...(init.body === undefined ? {} : { body: init.body }),
      ...(init.idempotencyKey === undefined ? {} : { idempotencyKey: init.idempotencyKey }),
      signal: init.signal,
      ...(init.timeoutMs === undefined ? {} : { timeoutMs: init.timeoutMs }),
    });
  }

  const readData = async <T>(path: string, params: Record<string, string>, call?: CallOptions): Promise<T> =>
    ((await request("get", path, { ...call, path: params })).body as { data: T }).data;

  return {
    credentialId: identity.credentialId,
    baseUrl: identity.baseUrl,
    request: ((method: string, path: string, init?: CallInit) => request(method, path, init)) as EasyApiClient["request"],
    me: (call) => readData("/v1/me", {}, call),
    company: {
      get: (cui, call) => readData("/v1/company/{cui}", { cui }, call),
      vatStatus: (cui, call) => readData("/v1/company/{cui}/vat-status", { cui }, call),
      balance: (cui, call) => readData("/v1/company/{cui}/balance", { cui }, call),
      litigation: (cui, call) => readData("/v1/company/{cui}/litigation", { cui }, call),
    },
  };
}
