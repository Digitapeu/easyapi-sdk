# FinancialInstitutions

## Overview

### Available Operations

* [getV1FinancialInstitutions](#getv1financialinstitutions) - List Romanian monetary financial institutions from the ECB list, optionally by category or name
* [getV1FinancialInstitutionsPayment](#getv1financialinstitutionspayment) - List payment institutions, e-money institutions and their branches present in Romania, from the EBA PSD2 register

## getV1FinancialInstitutions

List Romanian monetary financial institutions from the ECB list, optionally by category or name

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_financial_institutions" method="get" path="/v1/financial-institutions" -->
```typescript
import { EasyApi } from "@digitap.eu/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.financialInstitutions.getV1FinancialInstitutions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap.eu/easyapi/core.js";
import { financialInstitutionsGetV1FinancialInstitutions } from "@digitap.eu/easyapi/funcs/financial-institutions-get-v1-financial-institutions.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await financialInstitutionsGetV1FinancialInstitutions(easyApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialInstitutionsGetV1FinancialInstitutions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `category`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Published category, matched exactly ignoring case, e.g. `Credit Institution`.                                                                                                  |
| `q`                                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Substring of the name, ignoring case and Romanian diacritics.                                                                                                                  |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1FinancialInstitutionsResponse](../../models/operations/get-v1-financial-institutions-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |

## getV1FinancialInstitutionsPayment

List payment institutions, e-money institutions and their branches present in Romania, from the EBA PSD2 register

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_financial_institutions_payment" method="get" path="/v1/financial-institutions/payment" -->
```typescript
import { EasyApi } from "@digitap.eu/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.financialInstitutions.getV1FinancialInstitutionsPayment();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap.eu/easyapi/core.js";
import { financialInstitutionsGetV1FinancialInstitutionsPayment } from "@digitap.eu/easyapi/funcs/financial-institutions-get-v1-financial-institutions-payment.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await financialInstitutionsGetV1FinancialInstitutionsPayment(easyApi);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("financialInstitutionsGetV1FinancialInstitutionsPayment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetV1FinancialInstitutionsPaymentRequest](../../models/operations/get-v1-financial-institutions-payment-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1FinancialInstitutionsPaymentResponse](../../models/operations/get-v1-financial-institutions-payment-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403              | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500, 502                   | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |