# GetV1EfacturaJobsIdResend

## Example Usage

```typescript
import { GetV1EfacturaJobsIdResend } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsIdResend = {
  eligible: false,
  refusalReason: null,
  request: {
    evidenceVersion: 733456,
    state: "authorized",
    refusalReason: "duplicate_detected",
    actorKind: "customer",
    actorRole: "<value>",
    requestedAt: new Date("2026-03-03T16:20:31.173Z"),
    decidedAt: null,
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `eligible`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `refusalReason`                                                                                                      | [operations.GetV1EfacturaJobsIdRefusalReason](../../models/operations/get-v1-efactura-jobs-id-refusal-reason.md)     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `request`                                                                                                            | [operations.EfacturaGetV1EfacturaJobsIdRequest](../../models/operations/efactura-get-v1-efactura-jobs-id-request.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |