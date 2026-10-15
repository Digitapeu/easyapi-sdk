# PostV1EtransportJobsIdCancelResend

## Example Usage

```typescript
import { PostV1EtransportJobsIdCancelResend } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportJobsIdCancelResend = {
  eligible: true,
  refusalReason: "sibling_delivered",
  request: {
    evidenceVersion: 668897,
    state: "refused",
    refusalReason: "conflict",
    actorKind: "customer",
    actorRole: "<value>",
    requestedAt: new Date("2025-06-19T09:15:02.795Z"),
    decidedAt: new Date("2026-01-11T18:04:04.872Z"),
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                                  | *boolean*                                                                                                                                   | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `refusalReason`                                                                                                                             | [operations.PostV1EtransportJobsIdCancelRefusalReason](../../models/operations/post-v1-etransport-jobs-id-cancel-refusal-reason.md)         | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `request`                                                                                                                                   | [operations.EtransportPostV1EtransportJobsIdCancelRequest](../../models/operations/etransport-post-v1-etransport-jobs-id-cancel-request.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |