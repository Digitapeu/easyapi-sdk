# PostV1EfacturaInvoicesResend

## Example Usage

```typescript
import { PostV1EfacturaInvoicesResend } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesResend = {
  eligible: false,
  refusalReason: "payload_unavailable",
  request: {
    evidenceVersion: 848331,
    state: "refused",
    refusalReason: null,
    actorKind: "customer",
    actorRole: "<value>",
    requestedAt: new Date("2026-04-18T13:13:57.800Z"),
    decidedAt: new Date("2026-12-29T23:21:07.759Z"),
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                | *boolean*                                                                                                                 | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `refusalReason`                                                                                                           | [operations.PostV1EfacturaInvoicesRefusalReason](../../models/operations/post-v1-efactura-invoices-refusal-reason.md)     | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `request`                                                                                                                 | [operations.EfacturaPostV1EfacturaInvoicesRequest](../../models/operations/efactura-post-v1-efactura-invoices-request.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |