# EfacturaJobsGetV1EfacturaJobsRequest

## Example Usage

```typescript
import { EfacturaJobsGetV1EfacturaJobsRequest } from "@digitap.eu/easyapi/models/operations";

let value: EfacturaJobsGetV1EfacturaJobsRequest = {
  evidenceVersion: 802334,
  state: "authorized",
  refusalReason: "payload_unavailable",
  actorKind: "operator",
  actorRole: "<value>",
  requestedAt: new Date("2024-08-07T12:41:20.791Z"),
  decidedAt: new Date("2024-01-25T02:48:50.916Z"),
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `evidenceVersion`                                                                                                          | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `state`                                                                                                                    | [operations.GetV1EfacturaJobsState](../../models/operations/get-v1-efactura-jobs-state.md)                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `refusalReason`                                                                                                            | [operations.GetV1EfacturaJobsRequestRefusalReason](../../models/operations/get-v1-efactura-jobs-request-refusal-reason.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `actorKind`                                                                                                                | [operations.GetV1EfacturaJobsActorKind](../../models/operations/get-v1-efactura-jobs-actor-kind.md)                        | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `actorRole`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `requestedAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `decidedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |