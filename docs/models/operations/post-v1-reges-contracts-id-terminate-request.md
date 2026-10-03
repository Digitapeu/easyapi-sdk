# PostV1RegesContractsIdTerminateRequest

## Example Usage

```typescript
import { PostV1RegesContractsIdTerminateRequest } from "@digitap/easyapi/models/operations";

let value: PostV1RegesContractsIdTerminateRequest = {
  id: "b609364d-8929-429f-8389-3bd58cd2e9cc",
  body: {
    termination: {},
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                  | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `idempotencyKey`                                                                                                                      | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409.                      |
| `body`                                                                                                                                | [operations.PostV1RegesContractsIdTerminateRequestBody](../../models/operations/post-v1-reges-contracts-id-terminate-request-body.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |