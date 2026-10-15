# GetV1EtransportJobsIdResend

## Example Usage

```typescript
import { GetV1EtransportJobsIdResend } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsIdResend = {
  eligible: true,
  refusalReason: "superseded",
  request: {
    evidenceVersion: 981130,
    state: "authorized",
    refusalReason: "sibling_delivered",
    actorKind: "operator",
    actorRole: "<value>",
    requestedAt: new Date("2026-02-26T15:59:40.762Z"),
    decidedAt: new Date("2026-11-16T17:17:56.384Z"),
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                                            | *boolean*                                                                                                                             | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `refusalReason`                                                                                                                       | [operations.GetV1EtransportJobsIdRefusalReason](../../models/operations/get-v1-etransport-jobs-id-refusal-reason.md)                  | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `request`                                                                                                                             | [operations.EtransportJobsGetV1EtransportJobsIdRequest](../../models/operations/etransport-jobs-get-v1-etransport-jobs-id-request.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |