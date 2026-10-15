# GetV1EfacturaJobsResend

## Example Usage

```typescript
import { GetV1EfacturaJobsResend } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsResend = {
  eligible: true,
  refusalReason: null,
  request: {
    evidenceVersion: 778257,
    state: "authorized",
    refusalReason: "listing_found",
    actorKind: "customer",
    actorRole: "<value>",
    requestedAt: new Date("2026-11-03T16:40:57.697Z"),
    decidedAt: new Date("2024-03-05T17:03:10.075Z"),
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                      | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `refusalReason`                                                                                                 | [operations.GetV1EfacturaJobsRefusalReason](../../models/operations/get-v1-efactura-jobs-refusal-reason.md)     | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `request`                                                                                                       | [operations.EfacturaGetV1EfacturaJobsRequest](../../models/operations/efactura-get-v1-efactura-jobs-request.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |