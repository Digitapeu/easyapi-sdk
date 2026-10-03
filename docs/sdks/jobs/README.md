# Reges.Jobs

## Overview

### Available Operations

* [get](#get) - Get a REGES async job's status

## get

Get a REGES async job's status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_v1_reges_jobs_id" method="get" path="/v1/reges/jobs/{id}" -->
```typescript
import { EasyApi } from "@digitap/easyapi";

const easyApi = new EasyApi({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await easyApi.reges.jobs.get("30ebba44-3543-4a08-aed8-9882ad669a7e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { EasyApiCore } from "@digitap/easyapi/core.js";
import { regesJobsGet } from "@digitap/easyapi/funcs/reges-jobs-get.js";

// Use `EasyApiCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const easyApi = new EasyApiCore({
  apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await regesJobsGet(easyApi, "30ebba44-3543-4a08-aed8-9882ad669a7e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("regesJobsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetV1RegesJobsIdResponse](../../models/operations/get-v1-reges-jobs-id-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ErrorEnvelope       | 400, 401, 403, 404         | application/json           |
| errors.ErrorEnvelope       | 429                        | application/json           |
| errors.ErrorEnvelope       | 500                        | application/json           |
| errors.ErrorEnvelope       | 503                        | application/json           |
| errors.EasyAPIDefaultError | 4XX, 5XX                   | \*/\*                      |