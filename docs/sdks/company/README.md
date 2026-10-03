# Company

## Overview

Company identity, VAT status, balance sheets and litigation by CUI.

### Available Operations

* [get](#get) - Look up a company's identity and VAT status by CUI
* [balanceByYear](#balancebyyear) - Get a company's ANAF bilanț for a single filing year
* [balance](#balance) - Get a company's last filed bilanț years in one call
* [vatStatus](#vatstatus) - Get a company's focused VAT/registry status by CUI
* [litigation](#litigation) - Find ECRIS court cases matching this company's legal name
* [batchGet](#batchget) - Look up up to 100 companies by CUI in one call

## get

Look up a company's identity and VAT status by CUI

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_company_cui" method="get" path="/v1/company/{cui}" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.get("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyGet } from "@digitap/easyapi/funcs/company-get.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyGet(easyApi, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyGet failed:", res.error);
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

**Promise\<[operations.GetV1CompanyCuiResponse](../../models/operations/get-v1-company-cui-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403, 404         | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## balanceByYear

Get a company's ANAF bilanț for a single filing year

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_company_cui_balance_year" method="get" path="/v1/company/{cui}/balance/{year}" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.balanceByYear("<value>", "<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyBalanceByYear } from "@digitap/easyapi/funcs/company-balance-by-year.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyBalanceByYear(easyApi, "<value>", "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBalanceByYear failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `cui`                                                                                                                                                                          | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `year`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyCuiBalanceYearResponse](../../models/operations/get-v1-company-cui-balance-year-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## balance

Get a company's last filed bilanț years in one call

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_company_cui_balance" method="get" path="/v1/company/{cui}/balance" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.balance("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyBalance } from "@digitap/easyapi/funcs/company-balance.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyBalance(easyApi, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBalance failed:", res.error);
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

**Promise\<[operations.GetV1CompanyCuiBalanceResponse](../../models/operations/get-v1-company-cui-balance-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## vatStatus

Get a company's focused VAT/registry status by CUI

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_company_cui_vat_status" method="get" path="/v1/company/{cui}/vat-status" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.vatStatus("<value>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyVatStatus } from "@digitap/easyapi/funcs/company-vat-status.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyVatStatus(easyApi, "<value>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyVatStatus failed:", res.error);
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

**Promise\<[operations.GetV1CompanyCuiVatStatusResponse](../../models/operations/get-v1-company-cui-vat-status-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403, 404         | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## litigation

Find ECRIS court cases matching this company's legal name

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_company_cui_litigation" method="get" path="/v1/company/{cui}/litigation" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.litigation({
    cui: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyLitigation } from "@digitap/easyapi/funcs/company-litigation.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyLitigation(easyApi, {
    cui: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyLitigation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1CompanyCuiLitigationRequest](../../models/operations/get-v1-company-cui-litigation-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1CompanyCuiLitigationResponse](../../models/operations/get-v1-company-cui-litigation-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403, 404         | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## batchGet

Look up up to 100 companies by CUI in one call

### Example Usage

<!-- UsageSnippet language="typescript" operationID="post_v1_company_batch" method="post" path="/v1/company/batch" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.company.batchGet({
    cuis: [
      "<value 1>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { companyBatchGet } from "@digitap/easyapi/funcs/company-batch-get.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await companyBatchGet(easyApi, {
    cuis: [
      "<value 1>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyBatchGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `body`                                                                                                                                                                         | [operations.PostV1CompanyBatchRequestBody](../../models/operations/post-v1-company-batch-request-body.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `idempotencyKey`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409.                                                               |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV1CompanyBatchResponse](../../models/operations/post-v1-company-batch-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403, 409         | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |