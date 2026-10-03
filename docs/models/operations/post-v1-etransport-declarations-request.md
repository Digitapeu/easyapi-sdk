# PostV1EtransportDeclarationsRequest

## Example Usage

```typescript
import { PostV1EtransportDeclarationsRequest } from "@digitap/easyapi/models/operations";

let value: PostV1EtransportDeclarationsRequest = {
  body: {
    declaration: {
      "key": "<value>",
      "key1": "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                              | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409.              |
| `body`                                                                                                                        | [operations.PostV1EtransportDeclarationsRequestBody](../../models/operations/post-v1-etransport-declarations-request-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |