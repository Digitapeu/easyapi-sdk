# GetV1EfacturaJobsIdData

## Example Usage

```typescript
import { GetV1EfacturaJobsIdData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsIdData = {
  jobId: "5843fef2-1151-4444-9f64-14b2a7388c4f",
  kind: "efactura.submit",
  buffered: true,
  status: "queued",
  inFlight: false,
  delivered: true,
  dispatchUncertain: true,
  unresolvedDispatches: 587037,
  duplicateDetected: false,
  lineageJobIds: [],
  blockedReason: "connection_error",
  reviewReason: "attempt_cap",
  dispatchCount: 176761,
  maxDispatches: 147979,
  nextAttemptAt: new Date("2026-04-15T22:53:49.060Z"),
  unknownSince: new Date("2026-08-01T16:02:31.724Z"),
  resendEligibleAt: new Date("2025-03-08T22:01:40.691Z"),
  deliveredAt: new Date("2024-06-29T10:16:52.833Z"),
  resourceId: "f540528e-5f41-4942-a164-f04b6ca7811f",
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2025-04-29T03:14:31.595Z"),
    until: new Date("2025-02-08T06:12:00.397Z"),
    checks: 207029,
    inconclusive: 89103,
    lastCheckAt: new Date("2024-04-30T06:57:34.032Z"),
    lastReason: null,
    lastConclusiveAt: new Date("2025-04-09T09:22:18.091Z"),
  },
  evidenceVersion: 38524,
  attempts: [],
  copies: [],
  conflicts: [
    {
      kind: "identity_conflict",
      anafMessageId: "<id>",
      recordedAt: new Date("2026-01-04T07:10:59.035Z"),
    },
  ],
  resend: {
    eligible: true,
    refusalReason: "copy_exists",
    request: {
      evidenceVersion: 733456,
      state: "authorized",
      refusalReason: "duplicate_detected",
      actorKind: "customer",
      actorRole: "<value>",
      requestedAt: new Date("2026-03-03T16:20:31.173Z"),
      decidedAt: null,
    },
  },
  createdAt: new Date("2024-11-02T11:07:08.153Z"),
  updatedAt: new Date("2024-04-15T03:37:51.202Z"),
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                          | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `kind`                                                                                                           | [operations.GetV1EfacturaJobsIdKind](../../models/operations/get-v1-efactura-jobs-id-kind.md)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `buffered`                                                                                                       | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `status`                                                                                                         | [operations.GetV1EfacturaJobsIdStatus](../../models/operations/get-v1-efactura-jobs-id-status.md)                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `inFlight`                                                                                                       | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `delivered`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `dispatchUncertain`                                                                                              | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `unresolvedDispatches`                                                                                           | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `duplicateDetected`                                                                                              | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `lineageJobIds`                                                                                                  | *string*[]                                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `blockedReason`                                                                                                  | [operations.GetV1EfacturaJobsIdBlockedReason](../../models/operations/get-v1-efactura-jobs-id-blocked-reason.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `reviewReason`                                                                                                   | [operations.GetV1EfacturaJobsIdReviewReason](../../models/operations/get-v1-efactura-jobs-id-review-reason.md)   | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `dispatchCount`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `maxDispatches`                                                                                                  | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `nextAttemptAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `unknownSince`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resendEligibleAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `deliveredAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resourceId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerRef`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `payloadSha256`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `observation`                                                                                                    | [operations.GetV1EfacturaJobsIdObservation](../../models/operations/get-v1-efactura-jobs-id-observation.md)      | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `evidenceVersion`                                                                                                | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `attempts`                                                                                                       | [operations.GetV1EfacturaJobsIdAttempt](../../models/operations/get-v1-efactura-jobs-id-attempt.md)[]            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `copies`                                                                                                         | [operations.GetV1EfacturaJobsIdCopy](../../models/operations/get-v1-efactura-jobs-id-copy.md)[]                  | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `conflicts`                                                                                                      | [operations.GetV1EfacturaJobsIdConflict](../../models/operations/get-v1-efactura-jobs-id-conflict.md)[]          | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `resend`                                                                                                         | [operations.GetV1EfacturaJobsIdResend](../../models/operations/get-v1-efactura-jobs-id-resend.md)                | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `updatedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |