# PostV1CompanyBatchRequest

## Example Usage

```typescript
import { PostV1CompanyBatchRequest } from "@digitap.eu/easyapi/models/operations";

let value: PostV1CompanyBatchRequest = {
  body: {
    cuis: [],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409. |
| `body`                                                                                                           | [operations.PostV1CompanyBatchRequestBody](../../models/operations/post-v1-company-batch-request-body.md)        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |