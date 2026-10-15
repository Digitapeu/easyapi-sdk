# EfacturaJobsGetV1EfacturaJobsIdRequest

## Example Usage

```typescript
import { EfacturaJobsGetV1EfacturaJobsIdRequest } from "@digitap.eu/easyapi/models/operations";

let value: EfacturaJobsGetV1EfacturaJobsIdRequest = {
  evidenceVersion: 914950,
  state: "pending",
  refusalReason: "conflict",
  actorKind: "customer",
  actorRole: "<value>",
  requestedAt: new Date("2024-07-26T16:20:37.166Z"),
  decidedAt: new Date("2025-02-18T17:12:27.229Z"),
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `evidenceVersion`                                                                                                               | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `state`                                                                                                                         | [operations.GetV1EfacturaJobsIdState](../../models/operations/get-v1-efactura-jobs-id-state.md)                                 | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `refusalReason`                                                                                                                 | [operations.GetV1EfacturaJobsIdRequestRefusalReason](../../models/operations/get-v1-efactura-jobs-id-request-refusal-reason.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `actorKind`                                                                                                                     | [operations.GetV1EfacturaJobsIdActorKind](../../models/operations/get-v1-efactura-jobs-id-actor-kind.md)                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `actorRole`                                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `requestedAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `decidedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |