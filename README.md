# @easyapi/sdk

Server-side TypeScript SDK and `easyapi` CLI for the easyapi Romanian government services API.
Requests are authenticated with a P-256 key that never leaves your machine (OAuth `private_key_jwt`
client authentication plus DPoP proof-of-possession). There is no long-lived bearer secret in your
application after setup.

Server-only: do not ship this to a browser. Runs on Node 20+ and Bun.

## Install

```sh
npm install @easyapi/sdk
```

## Set up a credential

Create a **dedicated API key** for this deployment in the dashboard, then run, from a host that is
inside the key's IP allowlist:

```sh
npx easyapi setup
```

`setup` reads the key from a hidden prompt, or from `EASYAPI_API_KEY` if set. The key is never accepted
as a command-line argument and is never written to disk. It then:

1. generates a P-256 key locally and saves it (`0600`, directory `0700`) together with a pending profile
   holding a client-generated credential ID, before any network call;
2. registers the public key (enrollment);
3. obtains a token and verifies `GET /v1/me`;
4. marks the profile `verified`.

Enrollment switches that API key to DPoP permanently: the raw key no longer works as a Bearer secret
anywhere. Use a separate key per deployment.

If a response is lost or the process dies, run `easyapi setup` again: it resumes with the saved identity
(and does not need the API key if the enrollment already went through). It exits non-zero on any
failure, with a message naming the next step. Saved keys are never deleted after an ambiguous response.

## First request

```ts
import { createClient } from "@easyapi/sdk";

const client = createClient(); // same resolution as the CLI: options > EASYAPI_* env > saved profile

const me = await client.me();
const company = await client.company.get("43020532");
```

See [`examples/first-request.ts`](examples/first-request.ts). `createClient` reads local files only; the
first network call happens on first use. Tokens live in memory, are renewed before they expire, and
concurrent callers share one token exchange. Every request carries a fresh DPoP proof.

### Typed requests

`client.request(method, path, init)` is typed from the exported API description for every supported
`/v1` route (path parameters, query, JSON body, response):

```ts
const { body } = await client.request("get", "/v1/company/{cui}/vat-status", { path: { cui: "43020532" } });
await client.request("post", "/v1/company/batch", { body: { cuis: ["43020532"] }, idempotencyKey: "job-42" });
```

`me()` and `company.{get,vatStatus,balance,litigation}()` are thin helpers that return the `data` member.
Everything else goes through `request()`, which returns `{ status, headers, body }`: `body` is the parsed
JSON envelope for JSON responses and a `Uint8Array` for anything else (SPV documents, ZIP, PDF), byte for
byte. Types come from `openapi-typescript` run against the contract file in `contract/openapi.json`
(`bun run gen:types`); it processed the file without errors.

Not yet reachable through the typed surface because the platform does not support them yet: search,
JSON e-Factura upload, the invoice ZIP download, and the four REGES workflows.

## Profiles and environment

| Option / variable | Meaning |
| --- | --- |
| `--profile`, `EASYAPI_PROFILE` | Profile name (`[A-Za-z0-9][A-Za-z0-9_-]{0,63}`), default `default` |
| `--config-dir`, `EASYAPI_CONFIG_DIR` | Configuration root |
| `--credential-id`, `EASYAPI_CREDENTIAL_ID` | Credential UUID; must be paired with a key |
| `--private-key-path`, `EASYAPI_PRIVATE_KEY_PATH` | PKCS8 PEM file; must be paired with a credential ID |
| `--base-url`, `EASYAPI_BASE_URL` | API origin, e.g. `https://host` (no path or trailing slash; plain `http` only for localhost) |
| `EASYAPI_API_KEY` | Bootstrap key for `setup` only |

Precedence per field: explicit option, then environment, then the saved profile. A credential ID and its
key are only ever overridden together. Options other than the CLI flags: `createClient({ privateKey })`
takes PEM text or a `KeyObject`, which suits deployments that inject the key from a secret store (a
root-owned `0444` mounted file is rejected by the file permission checks; pass its content instead).
Relative paths resolve from the current directory and are stored absolute.

Default configuration root: Linux and other POSIX systems `${XDG_CONFIG_HOME:-$HOME/.config}/easyapi`;
macOS `~/Library/Application Support/easyapi`. Inside it: `profiles/<profile>.json`,
`keys/<credential-id>.pem`. The default API origin is the `easyapi.defaultBaseUrl` entry of this
package's `package.json`.

Local file checks: directories `0700`, files `0600`, owned by the current user, no symlinks, no parent
directories writable by others, atomic writes with fsync, and a per-profile lock file so two setups
cannot interleave.

## Rotation, revocation, recovery

- **Rotate the signer:** `easyapi rotate`. The new key and a `pendingRotation` entry are saved first; the
  old key signs an authorization and the new key signs a possession proof; the profile is replaced
  atomically only after the new key authenticates at the next generation. After a lost response, run it
  again: it checks which key the server accepts before doing anything. There is no overlap window, so a
  running application using the old key must be restarted (or its `createClient` re-created) afterwards.
  Rotate every replica of a deployment together.
- **Revoke:** done in the customer dashboard (or by an operator). Revocation is final for that credential.
- **Lost key or file:** the credential cannot be recovered from the server. In the dashboard revoke the
  API key, create a fresh dedicated one, and run `easyapi setup` (use `--profile` to keep the old profile).
  Recovery never turns Bearer access back on.

## Errors

All errors extend `EasyApiError`; none contains secrets.

| Class | When |
| --- | --- |
| `ApiError` | Product envelope `{ error: { code, message } }`; has `status`, `code`, `details`, `retryAfterSeconds`, `challenge` |
| `OAuthError` | Token endpoint error (`invalid_client`, `invalid_dpop_proof`, `invalid_scope`, `rate_limited`, ...) |
| `UnexpectedResponseError` | Any other non-2xx answer, or a malformed 2xx |
| `NetworkError`, `TimeoutError`, `AbortedError` | Transport failure, deadline, caller's `AbortSignal` |
| `RedirectRefusedError` | A 3xx on a credentialed request (never followed) |
| `ConfigError`, `InvalidRequestError`, `SetupError` | Bad local configuration, request rejected before sending, CLI flow failure |

Retries: only GET/HEAD, at most two, within the call's deadline, each with a fresh proof. Triggers:
connection failure, 429/502/503/504 (honouring `Retry-After`), and an expired token (the token is
re-acquired). Mutations are never retried by the SDK; an `Idempotency-Key` you pass is sent unchanged.
Default overall budget per call is 30 seconds (`timeoutMs`).

## IP binding

An API key can be bound to an IP allowlist. Product calls from outside it fail with
`edge_binding_rejected`. `setup` must run from an allowed IP; the SDK never loosens a binding. Run each
deployment from its own allowed egress address.

## Runtime support

Verified on macOS arm64 with Node 20.0.0, 20.18.3, 22.20.0 and 24.18.0 (built CLI against the offline
harness, ESM and CJS import) and Bun 1.2.17 (test suite). Windows is not supported: the contract requires
POSIX permission checks and absolute `/` paths, and `setup` refuses to run there.

## Limitations

- Keep the system clock within about 30 seconds of real time: proofs are rejected outside the window.
- The SDK does not control the runtime's connection handling. If a runtime silently re-sends a request
  after a dropped connection, the server rejects the replayed proof, so a `401` right after a connection
  reset on a mutation does not prove the mutation did not run. Use idempotency keys and check state.
- Response bodies are read fully into memory.
- No pagination helpers, polling or caching; the typed surface follows the exported API description.
- One signer per API key, so a credential cannot be shared by uncoordinated processes during rotation.

## Development

```sh
bun install
bun run typecheck && bun test && bun run build
bun run e2e:node      # built CLI under Node against the offline harness (needs bun on PATH)
```

`test/harness/` is an offline implementation of the five authentication routes (enrollment, token,
`/v1/me`, rotation, admin revoke) used by the tests.

MIT licensed.
