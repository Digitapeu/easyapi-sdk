# PostV1EfacturaJobsIdCancelData

## Example Usage

```typescript
import { PostV1EfacturaJobsIdCancelData } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaJobsIdCancelData = {
  jobId: "100f4507-35f7-456a-82c5-37e141618c12",
  kind: "etransport.declare",
  buffered: false,
  status: "needs_review",
  inFlight: true,
  delivered: false,
  dispatchUncertain: false,
  unresolvedDispatches: 587025,
  duplicateDetected: true,
  lineageJobIds: [
    "e37212b5-d1d3-47b8-93f9-aa14ca7852ab",
    "a889f196-9f2d-4d15-b3dc-8b626694a87e",
    "00ffa7c5-5502-4685-87dc-4fca631ef0ac",
  ],
  blockedReason: "feature_disabled",
  reviewReason: "attempt_cap",
  dispatchCount: 734649,
  maxDispatches: 692801,
  nextAttemptAt: new Date("2026-08-11T20:14:07.677Z"),
  unknownSince: new Date("2024-01-24T18:07:14.304Z"),
  resendEligibleAt: new Date("2025-12-27T08:15:52.475Z"),
  deliveredAt: new Date("2024-07-22T21:55:39.894Z"),
  resourceId: "d90ac7d4-f21c-485d-af18-41550645d22b",
  customerRef: null,
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2024-07-06T08:57:31.425Z"),
    until: new Date("2026-03-06T21:57:48.741Z"),
    checks: 762570,
    inconclusive: 965932,
    lastCheckAt: new Date("2026-04-29T09:29:14.646Z"),
    lastReason: "<value>",
    lastConclusiveAt: new Date("2025-07-08T22:19:28.877Z"),
  },
  evidenceVersion: 576274,
  attempts: [
    {
      seq: 391779,
      basis: "not_sent_retry",
      startedAt: new Date("2024-01-02T21:04:03.655Z"),
      finishedAt: null,
      outcome: "ambiguous",
      lateOutcome: "accepted",
      unresolved: false,
      rejectionCode: "http_4xx",
      httpStatus: 208235,
      uploadIndex: "<value>",
      uit: "<value>",
      errorCode: "<value>",
      reasonCode: "sibling_delivered",
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
      attemptSeq: 840808,
      dataCreare: "<value>",
      firstListedAt: new Date("2026-12-21T04:40:03.735Z"),
      recordedAt: new Date("2025-11-20T22:48:03.808Z"),
    },
  ],
  conflicts: [
    {
      kind: "identity_conflict",
      anafMessageId: "<id>",
      recordedAt: new Date("2026-07-27T19:55:52.814Z"),
    },
  ],
  resend: {
    eligible: true,
    refusalReason: "connection_revoked",
    request: null,
  },
  createdAt: new Date("2024-04-22T00:44:47.942Z"),
  updatedAt: new Date("2024-05-26T10:39:58.026Z"),
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `kind`                                                                                                                          | [operations.PostV1EfacturaJobsIdCancelKind](../../models/operations/post-v1-efactura-jobs-id-cancel-kind.md)                    | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `buffered`                                                                                                                      | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `status`                                                                                                                        | [operations.PostV1EfacturaJobsIdCancelStatus](../../models/operations/post-v1-efactura-jobs-id-cancel-status.md)                | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `inFlight`                                                                                                                      | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `delivered`                                                                                                                     | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `dispatchUncertain`                                                                                                             | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `unresolvedDispatches`                                                                                                          | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `duplicateDetected`                                                                                                             | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `lineageJobIds`                                                                                                                 | *string*[]                                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `blockedReason`                                                                                                                 | [operations.PostV1EfacturaJobsIdCancelBlockedReason](../../models/operations/post-v1-efactura-jobs-id-cancel-blocked-reason.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `reviewReason`                                                                                                                  | [operations.PostV1EfacturaJobsIdCancelReviewReason](../../models/operations/post-v1-efactura-jobs-id-cancel-review-reason.md)   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `dispatchCount`                                                                                                                 | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `maxDispatches`                                                                                                                 | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `nextAttemptAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `unknownSince`                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `resendEligibleAt`                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `deliveredAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `resourceId`                                                                                                                    | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `customerRef`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `payloadSha256`                                                                                                                 | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `observation`                                                                                                                   | [operations.PostV1EfacturaJobsIdCancelObservation](../../models/operations/post-v1-efactura-jobs-id-cancel-observation.md)      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `evidenceVersion`                                                                                                               | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `attempts`                                                                                                                      | [operations.PostV1EfacturaJobsIdCancelAttempt](../../models/operations/post-v1-efactura-jobs-id-cancel-attempt.md)[]            | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `copies`                                                                                                                        | [operations.PostV1EfacturaJobsIdCancelCopy](../../models/operations/post-v1-efactura-jobs-id-cancel-copy.md)[]                  | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `conflicts`                                                                                                                     | [operations.PostV1EfacturaJobsIdCancelConflict](../../models/operations/post-v1-efactura-jobs-id-cancel-conflict.md)[]          | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `resend`                                                                                                                        | [operations.PostV1EfacturaJobsIdCancelResend](../../models/operations/post-v1-efactura-jobs-id-cancel-resend.md)                | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `createdAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `updatedAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                   | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |