# GetV1EfacturaJobsResponse

## Example Usage

```typescript
import { GetV1EfacturaJobsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsResponse = {
  headers: {},
  result: {
    data: {
      jobs: [],
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [operations.GetV1EfacturaJobsResponseBody](../../models/operations/get-v1-efactura-jobs-response-body.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |