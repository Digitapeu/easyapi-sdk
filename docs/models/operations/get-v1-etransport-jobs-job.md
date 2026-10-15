# GetV1EtransportJobsJob

## Example Usage

```typescript
import { GetV1EtransportJobsJob } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsJob = {
  jobId: "227783e5-d105-428b-a781-e5aebeaa0766",
  kind: "efactura.submit",
  buffered: false,
  status: "unknown",
  inFlight: false,
  delivered: true,
  dispatchUncertain: true,
  unresolvedDispatches: 587856,
  duplicateDetected: true,
  lineageJobIds: [
    "b9f4479c-7144-47b1-8b8d-e2da59fa4457",
    "da2bb2bf-9138-4b4c-a3a7-66d21c37446d",
  ],
  blockedReason: "clearance_stalled",
  reviewReason: null,
  dispatchCount: 682041,
  maxDispatches: 495826,
  nextAttemptAt: new Date("2024-10-06T06:45:05.646Z"),
  unknownSince: new Date("2026-11-22T15:27:21.963Z"),
  resendEligibleAt: null,
  deliveredAt: new Date("2025-08-21T00:00:54.175Z"),
  resourceId: "a46a28e6-3120-4d55-9d29-6ce18cacf4ef",
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2024-10-23T23:07:52.270Z"),
    until: new Date("2026-11-28T03:04:57.890Z"),
    checks: 535007,
    inconclusive: 445240,
    lastCheckAt: new Date("2026-01-28T18:26:55.126Z"),
    lastReason: "<value>",
    lastConclusiveAt: new Date("2024-09-18T16:27:25.149Z"),
  },
  evidenceVersion: 852979,
  attempts: [],
  copies: [
    {
      uploadIndex: null,
      downloadId: "<id>",
      uit: "<value>",
      result: "ok",
      receivedSource: "status",
      resultSource: "<value>",
      attemptSeq: null,
      dataCreare: "<value>",
      firstListedAt: new Date("2024-04-05T13:30:18.909Z"),
      recordedAt: new Date("2025-01-31T05:10:41.023Z"),
    },
  ],
  conflicts: [],
  resend: {
    eligible: true,
    refusalReason: "duplicate_detected",
    request: null,
  },
  createdAt: new Date("2025-05-05T01:37:33.596Z"),
  updatedAt: new Date("2024-04-11T18:07:24.081Z"),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                         | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `kind`                                                                                                          | [operations.GetV1EtransportJobsKind](../../models/operations/get-v1-etransport-jobs-kind.md)                    | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `buffered`                                                                                                      | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `status`                                                                                                        | [operations.GetV1EtransportJobsJobStatus](../../models/operations/get-v1-etransport-jobs-job-status.md)         | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `inFlight`                                                                                                      | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `delivered`                                                                                                     | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `dispatchUncertain`                                                                                             | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `unresolvedDispatches`                                                                                          | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `duplicateDetected`                                                                                             | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `lineageJobIds`                                                                                                 | *string*[]                                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `blockedReason`                                                                                                 | [operations.GetV1EtransportJobsBlockedReason](../../models/operations/get-v1-etransport-jobs-blocked-reason.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `reviewReason`                                                                                                  | [operations.GetV1EtransportJobsReviewReason](../../models/operations/get-v1-etransport-jobs-review-reason.md)   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `dispatchCount`                                                                                                 | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `maxDispatches`                                                                                                 | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `nextAttemptAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `unknownSince`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `resendEligibleAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `deliveredAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `resourceId`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `customerRef`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `payloadSha256`                                                                                                 | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `observation`                                                                                                   | [operations.GetV1EtransportJobsObservation](../../models/operations/get-v1-etransport-jobs-observation.md)      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `evidenceVersion`                                                                                               | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `attempts`                                                                                                      | [operations.GetV1EtransportJobsAttempt](../../models/operations/get-v1-etransport-jobs-attempt.md)[]            | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `copies`                                                                                                        | [operations.GetV1EtransportJobsCopy](../../models/operations/get-v1-etransport-jobs-copy.md)[]                  | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `conflicts`                                                                                                     | [operations.GetV1EtransportJobsConflict](../../models/operations/get-v1-etransport-jobs-conflict.md)[]          | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `resend`                                                                                                        | [operations.GetV1EtransportJobsResend](../../models/operations/get-v1-etransport-jobs-resend.md)                | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `createdAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `updatedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |