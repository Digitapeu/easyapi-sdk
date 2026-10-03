# PostV1EfacturaInvoicesRequest

## Example Usage

```typescript
import { PostV1EfacturaInvoicesRequest } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesRequest = {
  body: {
    format: "ubl",
    xml: "<value>",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409. |
| `body`                                                                                                           | *operations.PostV1EfacturaInvoicesRequestBody*                                                                   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |