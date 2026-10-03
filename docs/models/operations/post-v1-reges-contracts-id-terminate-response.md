# PostV1RegesContractsIdTerminateResponse

## Example Usage

```typescript
import { PostV1RegesContractsIdTerminateResponse } from "@digitap/easyapi/models/operations";

let value: PostV1RegesContractsIdTerminateResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [],
  },
  result: {
    data: {
      jobId: "c61000fe-63bc-4fd9-b4a2-fe06787af2a9",
      status: "error",
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [operations.PostV1RegesContractsIdTerminateResponseBody](../../models/operations/post-v1-reges-contracts-id-terminate-response-body.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |