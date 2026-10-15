# EtransportGetV1EtransportJobsRequest

## Example Usage

```typescript
import { EtransportGetV1EtransportJobsRequest } from "@digitap.eu/easyapi/models/operations";

let value: EtransportGetV1EtransportJobsRequest = {
  evidenceVersion: 897942,
  state: "pending",
  refusalReason: null,
  actorKind: "customer",
  actorRole: "<value>",
  requestedAt: new Date("2024-07-30T12:28:50.304Z"),
  decidedAt: new Date("2026-02-03T15:40:19.656Z"),
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `evidenceVersion`                                                                                                              | *number*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `state`                                                                                                                        | [operations.GetV1EtransportJobsState](../../models/operations/get-v1-etransport-jobs-state.md)                                 | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `refusalReason`                                                                                                                | [operations.GetV1EtransportJobsRequestRefusalReason](../../models/operations/get-v1-etransport-jobs-request-refusal-reason.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `actorKind`                                                                                                                    | [operations.GetV1EtransportJobsActorKind](../../models/operations/get-v1-etransport-jobs-actor-kind.md)                        | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `actorRole`                                                                                                                    | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `requestedAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `decidedAt`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                  | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |