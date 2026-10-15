# EtransportJobsGetV1EtransportJobsRequest

## Example Usage

```typescript
import { EtransportJobsGetV1EtransportJobsRequest } from "@digitap.eu/easyapi/models/operations";

let value: EtransportJobsGetV1EtransportJobsRequest = {
  evidenceVersion: 581833,
  state: "authorized",
  refusalReason: "superseded",
  actorKind: "operator",
  actorRole: "<value>",
  requestedAt: new Date("2026-12-25T01:52:05.245Z"),
  decidedAt: new Date("2024-12-14T15:21:26.442Z"),
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