# GetV1EtransportJobsResend

## Example Usage

```typescript
import { GetV1EtransportJobsResend } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsResend = {
  eligible: false,
  refusalReason: "conflict",
  request: {
    evidenceVersion: 316637,
    state: "authorized",
    refusalReason: "duplicate_detected",
    actorKind: "operator",
    actorRole: "<value>",
    requestedAt: new Date("2025-06-14T01:29:43.564Z"),
    decidedAt: new Date("2025-09-24T15:15:26.839Z"),
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                       | *boolean*                                                                                                                        | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `refusalReason`                                                                                                                  | [operations.GetV1EtransportJobsRefusalReason](../../models/operations/get-v1-etransport-jobs-refusal-reason.md)                  | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `request`                                                                                                                        | [operations.EtransportJobsGetV1EtransportJobsRequest](../../models/operations/etransport-jobs-get-v1-etransport-jobs-request.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |