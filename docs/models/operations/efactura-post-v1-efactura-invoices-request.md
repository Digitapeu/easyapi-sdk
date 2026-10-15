# EfacturaPostV1EfacturaInvoicesRequest

## Example Usage

```typescript
import { EfacturaPostV1EfacturaInvoicesRequest } from "@digitap.eu/easyapi/models/operations";

let value: EfacturaPostV1EfacturaInvoicesRequest = {
  evidenceVersion: 338994,
  state: "authorized",
  refusalReason: "superseded",
  actorKind: "operator",
  actorRole: "<value>",
  requestedAt: new Date("2026-03-21T19:17:09.377Z"),
  decidedAt: new Date("2026-12-19T21:28:31.555Z"),
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `evidenceVersion`                                                                                                                    | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `state`                                                                                                                              | [operations.PostV1EfacturaInvoicesState](../../models/operations/post-v1-efactura-invoices-state.md)                                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `refusalReason`                                                                                                                      | [operations.PostV1EfacturaInvoicesRequestRefusalReason](../../models/operations/post-v1-efactura-invoices-request-refusal-reason.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `actorKind`                                                                                                                          | [operations.PostV1EfacturaInvoicesActorKind](../../models/operations/post-v1-efactura-invoices-actor-kind.md)                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `actorRole`                                                                                                                          | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `requestedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `decidedAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |