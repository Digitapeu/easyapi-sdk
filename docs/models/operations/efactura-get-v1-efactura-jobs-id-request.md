# EfacturaGetV1EfacturaJobsIdRequest

## Example Usage

```typescript
import { EfacturaGetV1EfacturaJobsIdRequest } from "@digitap.eu/easyapi/models/operations";

let value: EfacturaGetV1EfacturaJobsIdRequest = {
  evidenceVersion: 833657,
  state: "pending",
  refusalReason: null,
  actorKind: "operator",
  actorRole: null,
  requestedAt: new Date("2025-11-20T06:24:35.786Z"),
  decidedAt: new Date("2024-12-28T07:54:43.059Z"),
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