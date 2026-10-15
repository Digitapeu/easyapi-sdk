# GetV1EtransportJobsIdData

## Example Usage

```typescript
import { GetV1EtransportJobsIdData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsIdData = {
  jobId: "d981054e-766c-4f78-8578-a92f219fa72f",
  kind: "etransport.declare",
  buffered: false,
  status: "unknown",
  inFlight: false,
  delivered: true,
  dispatchUncertain: false,
  unresolvedDispatches: 230143,
  duplicateDetected: false,
  lineageJobIds: [
    "bf165113-977b-4c3a-b56d-033edac003e0",
  ],
  blockedReason: "credential_stale",
  reviewReason: "identity_conflict",
  dispatchCount: 372955,
  maxDispatches: 122479,
  nextAttemptAt: new Date("2026-01-15T16:49:54.832Z"),
  unknownSince: new Date("2025-10-25T06:30:13.755Z"),
  resendEligibleAt: new Date("2025-07-18T13:40:07.114Z"),
  deliveredAt: new Date("2026-06-08T22:54:15.530Z"),
  resourceId: "b4324cc6-12c9-41ab-af8a-fef1f5afdb7e",
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2024-07-09T23:15:25.380Z"),
    until: new Date("2024-11-05T09:53:16.155Z"),
    checks: 513041,
    inconclusive: 124486,
    lastCheckAt: new Date("2026-06-29T04:31:32.203Z"),
    lastReason: null,
    lastConclusiveAt: new Date("2025-05-19T06:07:08.005Z"),
  },
  evidenceVersion: 979030,
  attempts: [
    {
      seq: 371588,
      basis: "not_sent_retry",
      startedAt: new Date("2026-04-21T08:26:28.122Z"),
      finishedAt: new Date("2026-03-20T21:39:14.125Z"),
      outcome: "accepted",
      lateOutcome: "not_sent",
      unresolved: false,
      rejectionCode: "header_error_message",
      httpStatus: 900644,
      uploadIndex: "<value>",
      uit: "<value>",
      errorCode: null,
      reasonCode: "timeout",
    },
  ],
  copies: [
    {
      uploadIndex: "<value>",
      downloadId: "<id>",
      uit: "<value>",
      result: "ok",
      receivedSource: "status",
      resultSource: "<value>",
      attemptSeq: 62406,
      dataCreare: null,
      firstListedAt: new Date("2024-03-01T03:44:42.839Z"),
      recordedAt: new Date("2025-06-14T04:39:54.875Z"),
    },
  ],
  conflicts: [
    {
      kind: "identity_conflict",
      anafMessageId: "<id>",
      recordedAt: new Date("2024-01-11T08:27:35.151Z"),
    },
  ],
  resend: {
    eligible: false,
    refusalReason: "conflict",
    request: null,
  },
  createdAt: new Date("2026-08-15T05:26:09.976Z"),
  updatedAt: new Date("2026-12-17T20:04:05.380Z"),
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `kind`                                                                                                               | [operations.GetV1EtransportJobsIdKind](../../models/operations/get-v1-etransport-jobs-id-kind.md)                    | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `buffered`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `status`                                                                                                             | [operations.GetV1EtransportJobsIdStatus](../../models/operations/get-v1-etransport-jobs-id-status.md)                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `inFlight`                                                                                                           | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `delivered`                                                                                                          | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `dispatchUncertain`                                                                                                  | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `unresolvedDispatches`                                                                                               | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `duplicateDetected`                                                                                                  | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `lineageJobIds`                                                                                                      | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `blockedReason`                                                                                                      | [operations.GetV1EtransportJobsIdBlockedReason](../../models/operations/get-v1-etransport-jobs-id-blocked-reason.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `reviewReason`                                                                                                       | [operations.GetV1EtransportJobsIdReviewReason](../../models/operations/get-v1-etransport-jobs-id-review-reason.md)   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `dispatchCount`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `maxDispatches`                                                                                                      | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `nextAttemptAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `unknownSince`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resendEligibleAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `deliveredAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resourceId`                                                                                                         | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `customerRef`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `payloadSha256`                                                                                                      | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `observation`                                                                                                        | [operations.GetV1EtransportJobsIdObservation](../../models/operations/get-v1-etransport-jobs-id-observation.md)      | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `evidenceVersion`                                                                                                    | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `attempts`                                                                                                           | [operations.GetV1EtransportJobsIdAttempt](../../models/operations/get-v1-etransport-jobs-id-attempt.md)[]            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `copies`                                                                                                             | [operations.GetV1EtransportJobsIdCopy](../../models/operations/get-v1-etransport-jobs-id-copy.md)[]                  | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `conflicts`                                                                                                          | [operations.GetV1EtransportJobsIdConflict](../../models/operations/get-v1-etransport-jobs-id-conflict.md)[]          | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `resend`                                                                                                             | [operations.GetV1EtransportJobsIdResend](../../models/operations/get-v1-etransport-jobs-id-resend.md)                | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `createdAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `updatedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |