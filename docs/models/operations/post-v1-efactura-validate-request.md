# PostV1EfacturaValidateRequest

## Example Usage

```typescript
import { PostV1EfacturaValidateRequest } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaValidateRequest = {
  body: {
    xml: "<value>",
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `online`                                                                                                          | [operations.OnlineEnum](../../models/operations/online-enum.md)                                                   | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `idempotencyKey`                                                                                                  | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409.  |
| `body`                                                                                                            | [operations.PostV1EfacturaValidateRequestBody](../../models/operations/post-v1-efactura-validate-request-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |