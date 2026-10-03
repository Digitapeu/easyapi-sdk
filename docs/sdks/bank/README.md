# Bank

## Overview

IBAN lookup and open-banking accounts, balances and transactions.

### Available Operations

* [validateIban](#validateiban) - Validate an IBAN's structure and resolve its RO bank code
* [getTreasury](#gettreasury) - Look up ANAF treasury IBANs for a CUI
* [listInstitutions](#listinstitutions) - List the bank institutions available for a connection

## validateIban

Validate an IBAN's structure and resolve its RO bank code

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_bank_iban_iban" method="get" path="/v1/bank/iban/{iban}" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.bank.validateIban("DO11VODT53813070404770952018");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { bankValidateIban } from "@digitap/easyapi/funcs/bank-validate-iban.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await bankValidateIban(easyApi, "DO11VODT53813070404770952018");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankValidateIban failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `iban`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BankIbanIbanResponse](../../models/operations/get-v1-bank-iban-iban-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500                        | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## getTreasury

Look up ANAF treasury IBANs for a CUI

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_bank_treasury_cui" method="get" path="/v1/bank/treasury/{cui}" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.bank.getTreasury("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { bankGetTreasury } from "@digitap/easyapi/funcs/bank-get-treasury.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await bankGetTreasury(easyApi, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankGetTreasury failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cui`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BankTreasuryCuiResponse](../../models/operations/get-v1-bank-treasury-cui-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## listInstitutions

List the bank institutions available for a connection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_bank_institutions" method="get" path="/v1/bank/institutions" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.bank.listInstitutions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { bankListInstitutions } from "@digitap/easyapi/funcs/bank-list-institutions.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await bankListInstitutions(easyApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankListInstitutions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1BankInstitutionsResponse](../../models/operations/get-v1-bank-institutions-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 401, 403                   | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |