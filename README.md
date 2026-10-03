# @digitap/easyapi

TypeScript SDK and `easyapi` CLI for the easyapi Romanian government services API (ANAF, e-Factura,
e-Transport, REGES, company data). Two ways to authenticate:

- a plain API key (Bearer), for scripts and quick starts;
- a **machine credential**: a P-256 key that never leaves your machine (OAuth `private_key_jwt` client
  authentication plus DPoP proof-of-possession), so no long-lived bearer secret stays in your application.
  Server-side only (Node 20+).

## Install

```sh
npm i @digitap/easyapi
```

## Quickstart: API key

```ts
import { EasyApi } from "@digitap/easyapi";

const easyapi = new EasyApi({ apiKey: process.env.EASYAPI_KEY });

const status = await easyapi.company.vatStatus("43020532");
```

## Quickstart: machine credential

Create a **dedicated API key** for this deployment in the dashboard, then run, from a host inside the
key's IP allowlist:

```sh
npx easyapi setup
```

Then:

```ts
import { fromMachineCredential } from "@digitap/easyapi";

const easyapi = await fromMachineCredential({ profile: "default" }); // options > EASYAPI_* env > saved profile

const status = await easyapi.company.vatStatus("43020532");
```

`fromMachineCredential` reads local files only; the first network call happens on first use. Tokens live in
memory, are renewed before they expire, and concurrent calls share one token exchange. Every request,
retries included, carries a fresh DPoP proof. Pass `sdk: { retryConfig, timeoutMs, httpClient }` to tune
the underlying client.

`setup` reads the key from a hidden prompt, or from `EASYAPI_API_KEY` if set. The key is never accepted as
a command-line argument and is never written to disk. It then:

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
`easyapi status` calls `/v1/me` with the saved credential and prints what the server reports.

## Pagination

List operations that page return an async iterator of pages:

```ts
for await (const page of await easyapi.legislation.acts.list({})) {
  console.log(page.result.data.items);
}
```

## Errors

Non-2xx answers throw a typed error (`ErrorEnvelope`, a subclass of `EasyAPIError`) with `statusCode`,
`message` (the API's `error.message`), `error.code` (stable machine-readable code), `error.details`,
`headers` (so `error.headers.get("retry-after")` gives the delay in seconds on a 429), `body` and
`rawResponse`. Transport failures throw `ConnectionError`, `RequestTimeoutError` or `RequestAbortedError`
(from `@digitap/easyapi/models/errors`).

Machine-credential clients can additionally throw these (all extend `MachineAuthError`, none contains
secrets): `OAuthError` (token endpoint, e.g. `invalid_client`), `RedirectRefusedError` (a 3xx on a
credentialed request, never followed), `ConfigError` (bad local profile or key file). A failure of the
token exchange reaches you as `UnexpectedClientError` whose `cause` is the `OAuthError`.

## Retries and idempotency

Reads (GET) retry on 429, 502, 503, 504 and connection errors with exponential backoff, honouring
`Retry-After`. The seven idempotent writes (company batch, connections create, e-Factura upload and
validate, e-Transport create, REGES contract create and terminate) retry on the same conditions. DELETE and
PATCH are never retried.

Every POST carries an `Idempotency-Key`: the one you pass, or a UUID the SDK generates once per call, so
all attempts of one call share it and the server applies the write once. Override retries per call with
`{ retries }` or for the whole client with `retryConfig`.

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
key are only ever overridden together. `fromMachineCredential({ privateKey })` takes PEM text or a
`KeyObject`, which suits deployments that inject the key from a secret store (a root-owned `0444` mounted
file is rejected by the file permission checks; pass its content instead). Relative paths resolve from the
current directory and are stored absolute.

Default configuration root: Linux and other POSIX systems `${XDG_CONFIG_HOME:-$HOME/.config}/easyapi`;
macOS `~/Library/Application Support/easyapi`. Inside it: `profiles/<profile>.json`,
`keys/<credential-id>.pem`.

Local file checks: directories `0700`, files `0600`, owned by the current user, no symlinks, no parent
directories writable by others, atomic writes with fsync, and a per-profile lock file so two setups
cannot interleave.

## Rotation, revocation, recovery

- **Rotate the signer:** `easyapi rotate`. The new key and a `pendingRotation` entry are saved first; the
  old key signs an authorization and the new key signs a possession proof; the profile is replaced
  atomically only after the new key authenticates at the next generation. After a lost response, run it
  again: it checks which key the server accepts before doing anything. There is no overlap window, so a
  running application using the old key must be restarted (or its client re-created) afterwards.
  Rotate every replica of a deployment together.
- **Revoke:** done in the customer dashboard (or by an operator). Revocation is final for that credential.
- **Lost key or file:** the credential cannot be recovered from the server. In the dashboard revoke the
  API key, create a fresh dedicated one, and run `easyapi setup` (use `--profile` to keep the old profile).
  Recovery never turns Bearer access back on.

## IP binding

An API key can be bound to an IP allowlist. Product calls from outside it fail with
`edge_binding_rejected`. `setup` must run from an allowed IP; the SDK never loosens a binding. Run each
deployment from its own allowed egress address.

## Limitations

- Machine credentials are not supported on Windows: the contract requires POSIX permission checks and
  absolute `/` paths, and `setup` refuses to run there.
- Keep the system clock within about 30 seconds of real time: proofs are rejected outside the window.
- A 401 that asks for a DPoP nonce or reports an expired token is replayed once with a fresh proof; any
  other 401 is returned as an error.
- One signer per API key, so a credential cannot be shared by uncoordinated processes during rotation.

## Development

```sh
npm install
npm run build && npm run typecheck
npm test            # bun test; the suite runs under Bun
```

MIT licensed.

<!-- Start Summary [summary] -->
## Summary

Unified Romanian Government Services API: One API and one key for Romanian government services. Every response is `{ data }` on success or `{ error: { code, message } }` on failure. Authenticate with `Authorization: Bearer <api key>`.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@digitap/easyapi](#digitapeasyapi)
  * [Install](#install)
  * [Quickstart: API key](#quickstart-api-key)
  * [Quickstart: machine credential](#quickstart-machine-credential)
  * [Pagination](#pagination)
  * [Errors](#errors)
  * [Retries and idempotency](#retries-and-idempotency)
  * [Profiles and environment](#profiles-and-environment)
  * [Rotation, revocation, recovery](#rotation-revocation-recovery)
  * [IP binding](#ip-binding)
  * [Limitations](#limitations)
  * [Development](#development)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination-1)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi();

async function run() {
  const result = await easyApi.health.check();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      |
| -------- | ---- | ----------- |
| `apiKey` | http | HTTP Bearer |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.health.check();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Bank](docs/sdks/bank/README.md)

* [validateIban](docs/sdks/bank/README.md#validateiban) - Validate an IBAN's structure and resolve its RO bank code
* [getTreasury](docs/sdks/bank/README.md#gettreasury) - Look up ANAF treasury IBANs for a CUI
* [listInstitutions](docs/sdks/bank/README.md#listinstitutions) - List the bank institutions available for a connection

#### [Bank.Accounts](docs/sdks/accounts/README.md)

* [list](docs/sdks/accounts/README.md#list) - List all AIS-connected bank accounts for the tenant
* [getBalances](docs/sdks/accounts/README.md#getbalances) - Get current balances for one AIS-connected bank account
* [listTransactions](docs/sdks/accounts/README.md#listtransactions) - Get date-windowed transactions for one AIS-connected bank account

### [Company](docs/sdks/company/README.md)

* [get](docs/sdks/company/README.md#get) - Look up a company's identity and VAT status by CUI
* [balanceByYear](docs/sdks/company/README.md#balancebyyear) - Get a company's ANAF bilanț for a single filing year
* [balance](docs/sdks/company/README.md#balance) - Get a company's last filed bilanț years in one call
* [vatStatus](docs/sdks/company/README.md#vatstatus) - Get a company's focused VAT/registry status by CUI
* [litigation](docs/sdks/company/README.md#litigation) - Find ECRIS court cases matching this company's legal name
* [batchGet](docs/sdks/company/README.md#batchget) - Look up up to 100 companies by CUI in one call

### [Connections](docs/sdks/connections/README.md)

* [create](docs/sdks/connections/README.md#create) - Request a gov connection (returns the dashboard consent URL)
* [list](docs/sdks/connections/README.md#list) - List the tenant's gov connections
* [get](docs/sdks/connections/README.md#get) - Get one gov connection's metadata
* [revoke](docs/sdks/connections/README.md#revoke) - Revoke a gov connection and wipe its vault credential

### [Efactura](docs/sdks/efactura/README.md)

* [upload](docs/sdks/efactura/README.md#upload) - Upload a UBL/JSON invoice to e-Factura
* [status](docs/sdks/efactura/README.md#status) - Get an invoice's e-Factura clearance state
* [download](docs/sdks/efactura/README.md#download) - Get a signed download URL for an invoice's e-Factura result
* [downloadZip](docs/sdks/efactura/README.md#downloadzip) - Download an invoice's e-Factura result zip through a signed link
* [listMessages](docs/sdks/efactura/README.md#listmessages) - List e-Factura messages for a connected company
* [validate](docs/sdks/efactura/README.md#validate) - Validate a UBL invoice offline, and with ?online=true also at ANAF (no ANAF connection required)

### [Etransport](docs/sdks/etransport/README.md)

* [create](docs/sdks/etransport/README.md#create) - Create an e-Transport declaration
* [modify](docs/sdks/etransport/README.md#modify) - Modify an e-Transport declaration by UIT
* [get](docs/sdks/etransport/README.md#get) - Query an e-Transport declaration by UIT

### [Fx](docs/sdks/fx/README.md)

* [listRates](docs/sdks/fx/README.md#listrates) - List the latest BNR reference rates
* [convert](docs/sdks/fx/README.md#convert) - Convert an amount between currencies at the latest rates

### [Geo](docs/sdks/geo/README.md)

* [getParcel](docs/sdks/geo/README.md#getparcel) - Look up a cadastral parcel by coordinates or INSPIRE id

### [Health](docs/sdks/health/README.md)

* [check](docs/sdks/health/README.md#check) - Report db/redis/ANAF reachability

### [Justice](docs/sdks/justice/README.md)

* [listCourts](docs/sdks/justice/README.md#listcourts) - List or search the canonical ECRIS court identifiers
* [searchCases](docs/sdks/justice/README.md#searchcases) - Search court cases by party, number, object, or court
* [listCaseChanges](docs/sdks/justice/README.md#listcasechanges) - Search the litigation change-feed since a given timestamp
* [listHearings](docs/sdks/justice/README.md#listhearings) - Get the hearing docket for a court on a date

### [Legislation.Acts](docs/sdks/acts/README.md)

* [list](docs/sdks/acts/README.md#list) - List consolidated normative acts
* [listChanges](docs/sdks/acts/README.md#listchanges) - Poll the acts change-feed since a given timestamp
* [get](docs/sdks/acts/README.md#get) - Get an act's current consolidated form
* [listVersions](docs/sdks/acts/README.md#listversions) - List an act's point-in-time versions
* [getVersion](docs/sdks/acts/README.md#getversion) - Get an act's body as it read on a given version date

### [Legislation.Bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List parliamentary bills
* [listChanges](docs/sdks/bills/README.md#listchanges) - Poll the bills change-feed since a given timestamp
* [get](docs/sdks/bills/README.md#get) - Get a single parliamentary bill
* [listStages](docs/sdks/bills/README.md#liststages) - Get a bill's legislative stage history
* [listDocuments](docs/sdks/bills/README.md#listdocuments) - Get a bill's associated documents

### [Legislation.MonitorulOficial](docs/sdks/monitoruloficial/README.md)

* [listIssues](docs/sdks/monitoruloficial/README.md#listissues) - List Monitorul Oficial issues
* [listChanges](docs/sdks/monitoruloficial/README.md#listchanges) - Poll the Monitorul Oficial change-feed since a given timestamp
* [getAct](docs/sdks/monitoruloficial/README.md#getact) - Get an act as it appeared in Monitorul Oficial

### [Me](docs/sdks/me/README.md)

* [get](docs/sdks/me/README.md#get) - Get the resolved business, tier, effective scopes, and limits

### [Procurement](docs/sdks/procurement/README.md)

* [listCompanyContracts](docs/sdks/procurement/README.md#listcompanycontracts) - List a company's public procurement contracts by CUI
* [listCompanyTenders](docs/sdks/procurement/README.md#listcompanytenders) - List a company's public procurement tenders by CUI
* [listCompanyDirectPurchases](docs/sdks/procurement/README.md#listcompanydirectpurchases) - List a company's public procurement direct purchases by CUI
* [listCpvContracts](docs/sdks/procurement/README.md#listcpvcontracts) - List public procurement contracts for a CPV code
* [getCpvAnalysis](docs/sdks/procurement/README.md#getcpvanalysis) - Get market analysis for a CPV code
* [getContract](docs/sdks/procurement/README.md#getcontract) - Get a single public procurement contract's detail by number

### [Reges.Contracts](docs/sdks/contracts/README.md)

* [create](docs/sdks/contracts/README.md#create) - Register a REGES employment contract, async
* [terminate](docs/sdks/contracts/README.md#terminate) - Terminate a REGES employment contract, async

### [Reges.Employees](docs/sdks/employees/README.md)

* [list](docs/sdks/employees/README.md#list) - List REGES employees for a connected company (CNP masked)

### [Reges.Jobs](docs/sdks/jobs/README.md)

* [get](docs/sdks/jobs/README.md#get) - Get a REGES async job's status

### [Search](docs/sdks/search/README.md)

* [companies](docs/sdks/search/README.md#companies) - Search company names (deferred — always 501 in v1)

### [Spv](docs/sdks/spv/README.md)

* [listMessages](docs/sdks/spv/README.md#listmessages) - List SPV inbox messages
* [downloadDocument](docs/sdks/spv/README.md#downloaddocument) - Download one SPV document as a binary stream
* [getEtvaDecont](docs/sdks/spv/README.md#getetvadecont) - Fetch the e-TVA pre-completed VAT return for a period

### [Stats](docs/sdks/stats/README.md)

* [getMatrix](docs/sdks/stats/README.md#getmatrix) - Fetch a TEMPO matrix dataset with optional dimension filters

### [Vat](docs/sdks/vat/README.md)

* [validateVies](docs/sdks/vat/README.md#validatevies) - Validate an EU VAT number against VIES

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`bankAccountsGetBalances`](docs/sdks/accounts/README.md#getbalances) - Get current balances for one AIS-connected bank account
- [`bankAccountsList`](docs/sdks/accounts/README.md#list) - List all AIS-connected bank accounts for the tenant
- [`bankAccountsListTransactions`](docs/sdks/accounts/README.md#listtransactions) - Get date-windowed transactions for one AIS-connected bank account
- [`bankGetTreasury`](docs/sdks/bank/README.md#gettreasury) - Look up ANAF treasury IBANs for a CUI
- [`bankListInstitutions`](docs/sdks/bank/README.md#listinstitutions) - List the bank institutions available for a connection
- [`bankValidateIban`](docs/sdks/bank/README.md#validateiban) - Validate an IBAN's structure and resolve its RO bank code
- [`companyBalance`](docs/sdks/company/README.md#balance) - Get a company's last filed bilanț years in one call
- [`companyBalanceByYear`](docs/sdks/company/README.md#balancebyyear) - Get a company's ANAF bilanț for a single filing year
- [`companyBatchGet`](docs/sdks/company/README.md#batchget) - Look up up to 100 companies by CUI in one call
- [`companyGet`](docs/sdks/company/README.md#get) - Look up a company's identity and VAT status by CUI
- [`companyLitigation`](docs/sdks/company/README.md#litigation) - Find ECRIS court cases matching this company's legal name
- [`companyVatStatus`](docs/sdks/company/README.md#vatstatus) - Get a company's focused VAT/registry status by CUI
- [`connectionsCreate`](docs/sdks/connections/README.md#create) - Request a gov connection (returns the dashboard consent URL)
- [`connectionsGet`](docs/sdks/connections/README.md#get) - Get one gov connection's metadata
- [`connectionsList`](docs/sdks/connections/README.md#list) - List the tenant's gov connections
- [`connectionsRevoke`](docs/sdks/connections/README.md#revoke) - Revoke a gov connection and wipe its vault credential
- [`efacturaDownload`](docs/sdks/efactura/README.md#download) - Get a signed download URL for an invoice's e-Factura result
- [`efacturaDownloadZip`](docs/sdks/efactura/README.md#downloadzip) - Download an invoice's e-Factura result zip through a signed link
- [`efacturaListMessages`](docs/sdks/efactura/README.md#listmessages) - List e-Factura messages for a connected company
- [`efacturaStatus`](docs/sdks/efactura/README.md#status) - Get an invoice's e-Factura clearance state
- [`efacturaUpload`](docs/sdks/efactura/README.md#upload) - Upload a UBL/JSON invoice to e-Factura
- [`efacturaValidate`](docs/sdks/efactura/README.md#validate) - Validate a UBL invoice offline, and with ?online=true also at ANAF (no ANAF connection required)
- [`etransportCreate`](docs/sdks/etransport/README.md#create) - Create an e-Transport declaration
- [`etransportGet`](docs/sdks/etransport/README.md#get) - Query an e-Transport declaration by UIT
- [`etransportModify`](docs/sdks/etransport/README.md#modify) - Modify an e-Transport declaration by UIT
- [`fxConvert`](docs/sdks/fx/README.md#convert) - Convert an amount between currencies at the latest rates
- [`fxListRates`](docs/sdks/fx/README.md#listrates) - List the latest BNR reference rates
- [`geoGetParcel`](docs/sdks/geo/README.md#getparcel) - Look up a cadastral parcel by coordinates or INSPIRE id
- [`healthCheck`](docs/sdks/health/README.md#check) - Report db/redis/ANAF reachability
- [`justiceListCaseChanges`](docs/sdks/justice/README.md#listcasechanges) - Search the litigation change-feed since a given timestamp
- [`justiceListCourts`](docs/sdks/justice/README.md#listcourts) - List or search the canonical ECRIS court identifiers
- [`justiceListHearings`](docs/sdks/justice/README.md#listhearings) - Get the hearing docket for a court on a date
- [`justiceSearchCases`](docs/sdks/justice/README.md#searchcases) - Search court cases by party, number, object, or court
- [`legislationActsGet`](docs/sdks/acts/README.md#get) - Get an act's current consolidated form
- [`legislationActsGetVersion`](docs/sdks/acts/README.md#getversion) - Get an act's body as it read on a given version date
- [`legislationActsList`](docs/sdks/acts/README.md#list) - List consolidated normative acts
- [`legislationActsListChanges`](docs/sdks/acts/README.md#listchanges) - Poll the acts change-feed since a given timestamp
- [`legislationActsListVersions`](docs/sdks/acts/README.md#listversions) - List an act's point-in-time versions
- [`legislationBillsGet`](docs/sdks/bills/README.md#get) - Get a single parliamentary bill
- [`legislationBillsList`](docs/sdks/bills/README.md#list) - List parliamentary bills
- [`legislationBillsListChanges`](docs/sdks/bills/README.md#listchanges) - Poll the bills change-feed since a given timestamp
- [`legislationBillsListDocuments`](docs/sdks/bills/README.md#listdocuments) - Get a bill's associated documents
- [`legislationBillsListStages`](docs/sdks/bills/README.md#liststages) - Get a bill's legislative stage history
- [`legislationMonitorulOficialGetAct`](docs/sdks/monitoruloficial/README.md#getact) - Get an act as it appeared in Monitorul Oficial
- [`legislationMonitorulOficialListChanges`](docs/sdks/monitoruloficial/README.md#listchanges) - Poll the Monitorul Oficial change-feed since a given timestamp
- [`legislationMonitorulOficialListIssues`](docs/sdks/monitoruloficial/README.md#listissues) - List Monitorul Oficial issues
- [`meGet`](docs/sdks/me/README.md#get) - Get the resolved business, tier, effective scopes, and limits
- [`procurementGetContract`](docs/sdks/procurement/README.md#getcontract) - Get a single public procurement contract's detail by number
- [`procurementGetCpvAnalysis`](docs/sdks/procurement/README.md#getcpvanalysis) - Get market analysis for a CPV code
- [`procurementListCompanyContracts`](docs/sdks/procurement/README.md#listcompanycontracts) - List a company's public procurement contracts by CUI
- [`procurementListCompanyDirectPurchases`](docs/sdks/procurement/README.md#listcompanydirectpurchases) - List a company's public procurement direct purchases by CUI
- [`procurementListCompanyTenders`](docs/sdks/procurement/README.md#listcompanytenders) - List a company's public procurement tenders by CUI
- [`procurementListCpvContracts`](docs/sdks/procurement/README.md#listcpvcontracts) - List public procurement contracts for a CPV code
- [`regesContractsCreate`](docs/sdks/contracts/README.md#create) - Register a REGES employment contract, async
- [`regesContractsTerminate`](docs/sdks/contracts/README.md#terminate) - Terminate a REGES employment contract, async
- [`regesEmployeesList`](docs/sdks/employees/README.md#list) - List REGES employees for a connected company (CNP masked)
- [`regesJobsGet`](docs/sdks/jobs/README.md#get) - Get a REGES async job's status
- [`searchCompanies`](docs/sdks/search/README.md#companies) - Search company names (deferred — always 501 in v1)
- [`spvDownloadDocument`](docs/sdks/spv/README.md#downloaddocument) - Download one SPV document as a binary stream
- [`spvGetEtvaDecont`](docs/sdks/spv/README.md#getetvadecont) - Fetch the e-TVA pre-completed VAT return for a period
- [`spvListMessages`](docs/sdks/spv/README.md#listmessages) - List SPV inbox messages
- [`statsGetMatrix`](docs/sdks/stats/README.md#getmatrix) - Fetch a TEMPO matrix dataset with optional dimension filters
- [`vatValidateVies`](docs/sdks/vat/README.md#validatevies) - Validate an EU VAT number against VIES

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.legislation.bills.list({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi();

async function run() {
  const result = await easyApi.health.check({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await easyApi.health.check();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`EasyAPIError`](./src/models/errors/easy-api-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { EasyApi } from "@digitap/easyapi";
import * as errors from "@digitap/easyapi/models/errors";

const easyApi = new EasyApi();

async function run() {
  try {
    const result = await easyApi.health.check();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.EasyAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorEnvelope) {
        console.log(error.data$.error); // models.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`EasyAPIError`](./src/models/errors/easy-api-error.ts): The base class for HTTP error responses.
  * [`ErrorEnvelope`](./src/models/errors/error-envelope.ts): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`EasyAPIError`](./src/models/errors/easy-api-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  serverURL: "https://easyapi.ro",
});

async function run() {
  const result = await easyApi.health.check();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { EasyApi } from "@digitap/easyapi";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@digitap/easyapi/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new EasyApi({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { EasyApi } from "@digitap/easyapi";

const sdk = new EasyApi({ debugLogger: console });
```
<!-- End Debugging [debug] -->



