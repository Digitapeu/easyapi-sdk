# EfacturaGetV1EfacturaJobsRequest

## Example Usage

```typescript
import { EfacturaGetV1EfacturaJobsRequest } from "@digitap.eu/easyapi/models/operations";

let value: EfacturaGetV1EfacturaJobsRequest = {
  evidenceVersion: 248970,
  state: "refused",
  refusalReason: "duplicate_detected",
  actorKind: "operator",
  actorRole: "<value>",
  requestedAt: new Date("2024-05-06T02:09:23.324Z"),
  decidedAt: new Date("2025-06-21T18:16:08.124Z"),
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