# PostV1EfacturaJobsIdCancelResend

## Example Usage

```typescript
import { PostV1EfacturaJobsIdCancelResend } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaJobsIdCancelResend = {
  eligible: false,
  refusalReason: "listing_unavailable",
  request: {
    evidenceVersion: 393420,
    state: "refused",
    refusalReason: "payload_unavailable",
    actorKind: "operator",
    actorRole: "<value>",
    requestedAt: new Date("2026-04-16T23:56:46.506Z"),
    decidedAt: new Date("2026-09-05T00:09:21.446Z"),
  },
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                          | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `refusalReason`                                                                                                                     | [operations.PostV1EfacturaJobsIdCancelRefusalReason](../../models/operations/post-v1-efactura-jobs-id-cancel-refusal-reason.md)     | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `request`                                                                                                                           | [operations.EfacturaPostV1EfacturaJobsIdCancelRequest](../../models/operations/efactura-post-v1-efactura-jobs-id-cancel-request.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |