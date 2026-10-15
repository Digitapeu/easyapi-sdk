# EtransportJobsGetV1EtransportJobsIdRequest

## Example Usage

```typescript
import { EtransportJobsGetV1EtransportJobsIdRequest } from "@digitap.eu/easyapi/models/operations";

let value: EtransportJobsGetV1EtransportJobsIdRequest = {
  evidenceVersion: 450827,
  state: "authorized",
  refusalReason: null,
  actorKind: "customer",
  actorRole: "<value>",
  requestedAt: new Date("2025-07-03T17:43:12.417Z"),
  decidedAt: new Date("2026-01-06T07:18:44.344Z"),
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