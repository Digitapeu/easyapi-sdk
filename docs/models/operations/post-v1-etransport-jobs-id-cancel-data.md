# PostV1EtransportJobsIdCancelData

## Example Usage

```typescript
import { PostV1EtransportJobsIdCancelData } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportJobsIdCancelData = {
  jobId: "4823311e-5f1a-41c4-ae51-64c59fc45bd1",
  kind: "etransport.declare",
  buffered: true,
  status: "error",
  inFlight: false,
  delivered: true,
  dispatchUncertain: false,
  unresolvedDispatches: 689859,
  duplicateDetected: false,
  lineageJobIds: [
    "073aee0f-3d37-4659-bd76-b47152b17311",
  ],
  blockedReason: null,
  reviewReason: null,
  dispatchCount: 308434,
  maxDispatches: 762503,
  nextAttemptAt: null,
  unknownSince: new Date("2024-01-21T21:45:39.162Z"),
  resendEligibleAt: new Date("2025-10-26T07:29:46.492Z"),
  deliveredAt: new Date("2025-02-21T18:37:24.857Z"),
  resourceId: "cd241bc9-51f9-41a1-8d5e-4486fc9ed1b5",
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2025-11-27T21:10:17.047Z"),
    until: new Date("2024-01-30T23:27:13.076Z"),
    checks: 483922,
    inconclusive: 972295,
    lastCheckAt: new Date("2025-05-17T06:40:10.691Z"),
    lastReason: null,
    lastConclusiveAt: null,
  },
  evidenceVersion: 786051,
  attempts: [],
  copies: [
    {
      uploadIndex: "<value>",
      downloadId: "<id>",
      uit: "<value>",
      result: "ok",
      receivedSource: "operator",
      resultSource: "<value>",
      attemptSeq: 773049,
      dataCreare: "<value>",
      firstListedAt: new Date("2025-09-28T07:33:40.342Z"),
      recordedAt: new Date("2026-09-27T11:38:54.037Z"),
    },
  ],
  conflicts: [],
  resend: {
    eligible: false,
    refusalReason: "attempt_cap",
    request: null,
  },
  createdAt: new Date("2024-06-06T03:38:00.635Z"),
  updatedAt: new Date("2026-04-06T01:01:13.837Z"),
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                             | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `kind`                                                                                                                              | [operations.PostV1EtransportJobsIdCancelKind](../../models/operations/post-v1-etransport-jobs-id-cancel-kind.md)                    | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `buffered`                                                                                                                          | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `status`                                                                                                                            | [operations.PostV1EtransportJobsIdCancelStatus](../../models/operations/post-v1-etransport-jobs-id-cancel-status.md)                | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `inFlight`                                                                                                                          | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `delivered`                                                                                                                         | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `dispatchUncertain`                                                                                                                 | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `unresolvedDispatches`                                                                                                              | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `duplicateDetected`                                                                                                                 | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `lineageJobIds`                                                                                                                     | *string*[]                                                                                                                          | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `blockedReason`                                                                                                                     | [operations.PostV1EtransportJobsIdCancelBlockedReason](../../models/operations/post-v1-etransport-jobs-id-cancel-blocked-reason.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `reviewReason`                                                                                                                      | [operations.PostV1EtransportJobsIdCancelReviewReason](../../models/operations/post-v1-etransport-jobs-id-cancel-review-reason.md)   | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `dispatchCount`                                                                                                                     | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `maxDispatches`                                                                                                                     | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `nextAttemptAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `unknownSince`                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `resendEligibleAt`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `deliveredAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `resourceId`                                                                                                                        | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `customerRef`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `payloadSha256`                                                                                                                     | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `observation`                                                                                                                       | [operations.PostV1EtransportJobsIdCancelObservation](../../models/operations/post-v1-etransport-jobs-id-cancel-observation.md)      | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `evidenceVersion`                                                                                                                   | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `attempts`                                                                                                                          | [operations.PostV1EtransportJobsIdCancelAttempt](../../models/operations/post-v1-etransport-jobs-id-cancel-attempt.md)[]            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `copies`                                                                                                                            | [operations.PostV1EtransportJobsIdCancelCopy](../../models/operations/post-v1-etransport-jobs-id-cancel-copy.md)[]                  | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `conflicts`                                                                                                                         | [operations.PostV1EtransportJobsIdCancelConflict](../../models/operations/post-v1-etransport-jobs-id-cancel-conflict.md)[]          | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `resend`                                                                                                                            | [operations.PostV1EtransportJobsIdCancelResend](../../models/operations/post-v1-etransport-jobs-id-cancel-resend.md)                | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `createdAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `updatedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                       | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |