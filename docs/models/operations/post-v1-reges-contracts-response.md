# PostV1RegesContractsResponse

## Example Usage

```typescript
import { PostV1RegesContractsResponse } from "@digitap.eu/easyapi/models/operations";

let value: PostV1RegesContractsResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    data: {
      jobId: "8f4c5bab-be79-4527-a791-9a43ba1bb840",
      status: "error",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [operations.PostV1RegesContractsResponseBody](../../models/operations/post-v1-reges-contracts-response-body.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |