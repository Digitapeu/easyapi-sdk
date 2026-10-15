# EtransportGetV1EtransportJobsIdRequest

## Example Usage

```typescript
import { EtransportGetV1EtransportJobsIdRequest } from "@digitap.eu/easyapi/models/operations";

let value: EtransportGetV1EtransportJobsIdRequest = {
  evidenceVersion: 361074,
  state: "pending",
  refusalReason: "listing_unavailable",
  actorKind: "operator",
  actorRole: "<value>",
  requestedAt: new Date("2024-05-17T11:39:06.477Z"),
  decidedAt: new Date("2026-03-08T07:16:04.968Z"),
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `evidenceVersion`                                                                                                                   | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `state`                                                                                                                             | [operations.GetV1EtransportJobsIdState](../../models/operations/get-v1-etransport-jobs-id-state.md)                                 | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `refusalReason`                                                                                                                     | [operations.GetV1EtransportJobsIdRequestRefusalReason](../../models/operations/get-v1-etransport-jobs-id-request-refusal-reason.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `actorKind`                                                                                                                         | [operations.GetV1EtransportJobsIdActorKind](../../models/operations/get-v1-etransport-jobs-id-actor-kind.md)                        | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `actorRole`                                                                                                                         | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `requestedAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `decidedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |