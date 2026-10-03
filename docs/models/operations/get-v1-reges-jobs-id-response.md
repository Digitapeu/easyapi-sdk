# GetV1RegesJobsIdResponse

## Example Usage

```typescript
import { GetV1RegesJobsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RegesJobsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      jobId: "1dae2027-0c61-4654-ae5d-57baafc63272",
      kind: "<value>",
      status: "error",
      resourceId: "c41c6423-6e00-4e41-979c-b05421a8a086",
      error: "<value>",
      createdAt: new Date("2024-12-29T19:32:57.966Z"),
      updatedAt: new Date("2024-11-10T16:32:48.404Z"),
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GetV1RegesJobsIdResponseBody](../../models/operations/get-v1-reges-jobs-id-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |