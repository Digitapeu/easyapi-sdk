# PostV1RegesContractsRequest

## Example Usage

```typescript
import { PostV1RegesContractsRequest } from "@digitap.eu/easyapi/models/operations";

let value: PostV1RegesContractsRequest = {
  body: {
    contract: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409. |
| `body`                                                                                                           | [operations.PostV1RegesContractsRequestBody](../../models/operations/post-v1-reges-contracts-request-body.md)    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |