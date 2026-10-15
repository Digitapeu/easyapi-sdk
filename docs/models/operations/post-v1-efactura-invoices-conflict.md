# PostV1EfacturaInvoicesConflict

## Example Usage

```typescript
import { PostV1EfacturaInvoicesConflict } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesConflict = {
  kind: "result_contradiction",
  anafMessageId: "<id>",
  recordedAt: new Date("2025-11-04T14:09:44.699Z"),
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                              | [operations.PostV1EfacturaInvoicesConflictKind](../../models/operations/post-v1-efactura-invoices-conflict-kind.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `anafMessageId`                                                                                                     | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `recordedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                       | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |