# GetV1EfacturaJobsJob

## Example Usage

```typescript
import { GetV1EfacturaJobsJob } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsJob = {
  jobId: "26f6e94e-ba4f-4478-bda7-898a84a732fd",
  kind: "efactura.submit",
  buffered: false,
  status: "needs_review",
  inFlight: false,
  delivered: true,
  dispatchUncertain: true,
  unresolvedDispatches: 604919,
  duplicateDetected: false,
  lineageJobIds: [
    "7957bfb5-06a8-4943-aafe-083d820f4ced",
    "683f8486-f382-4a03-9777-b4a171177dc9",
  ],
  blockedReason: "connection_error",
  reviewReason: "rejected_attempt",
  dispatchCount: 367961,
  maxDispatches: 821992,
  nextAttemptAt: new Date("2026-03-06T19:06:16.734Z"),
  unknownSince: new Date("2024-07-03T17:26:39.043Z"),
  resendEligibleAt: null,
  deliveredAt: new Date("2026-06-17T22:57:31.935Z"),
  resourceId: "77e7d532-fb30-4005-9232-f9bdb472d4c7",
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2025-07-02T17:40:52.010Z"),
    until: new Date("2026-01-02T11:39:42.718Z"),
    checks: 361021,
    inconclusive: 432375,
    lastCheckAt: new Date("2025-05-15T21:04:22.531Z"),
    lastReason: "<value>",
    lastConclusiveAt: new Date("2026-02-28T06:53:18.138Z"),
  },
  evidenceVersion: 463475,
  attempts: [],
  copies: [
    {
      uploadIndex: "<value>",
      downloadId: "<id>",
      uit: "<value>",
      result: "ok",
      receivedSource: "response",
      resultSource: "<value>",
      attemptSeq: 981576,
      dataCreare: "<value>",
      firstListedAt: new Date("2025-10-15T04:08:10.621Z"),
      recordedAt: new Date("2026-06-03T12:28:41.148Z"),
    },
  ],
  conflicts: [
    {
      kind: "uncorrelated_rejection",
      anafMessageId: "<id>",
      recordedAt: new Date("2026-12-16T02:12:32.302Z"),
    },
  ],
  resend: {
    eligible: true,
    refusalReason: "listing_unavailable",
    request: {
      evidenceVersion: 778257,
      state: "authorized",
      refusalReason: "listing_found",
      actorKind: "customer",
      actorRole: "<value>",
      requestedAt: new Date("2026-11-03T16:40:57.697Z"),
      decidedAt: new Date("2024-03-05T17:03:10.075Z"),
    },
  },
  createdAt: new Date("2026-06-03T13:18:38.747Z"),
  updatedAt: new Date("2026-04-16T02:21:20.975Z"),
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                     | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `kind`                                                                                                      | [operations.GetV1EfacturaJobsKind](../../models/operations/get-v1-efactura-jobs-kind.md)                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `buffered`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `status`                                                                                                    | [operations.GetV1EfacturaJobsJobStatus](../../models/operations/get-v1-efactura-jobs-job-status.md)         | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `inFlight`                                                                                                  | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `delivered`                                                                                                 | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `dispatchUncertain`                                                                                         | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `unresolvedDispatches`                                                                                      | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `duplicateDetected`                                                                                         | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `lineageJobIds`                                                                                             | *string*[]                                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `blockedReason`                                                                                             | [operations.GetV1EfacturaJobsBlockedReason](../../models/operations/get-v1-efactura-jobs-blocked-reason.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reviewReason`                                                                                              | [operations.GetV1EfacturaJobsReviewReason](../../models/operations/get-v1-efactura-jobs-review-reason.md)   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `dispatchCount`                                                                                             | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `maxDispatches`                                                                                             | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `nextAttemptAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `unknownSince`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `resendEligibleAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `deliveredAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `resourceId`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `customerRef`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `payloadSha256`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `observation`                                                                                               | [operations.GetV1EfacturaJobsObservation](../../models/operations/get-v1-efactura-jobs-observation.md)      | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `evidenceVersion`                                                                                           | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `attempts`                                                                                                  | [operations.GetV1EfacturaJobsAttempt](../../models/operations/get-v1-efactura-jobs-attempt.md)[]            | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `copies`                                                                                                    | [operations.GetV1EfacturaJobsCopy](../../models/operations/get-v1-efactura-jobs-copy.md)[]                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `conflicts`                                                                                                 | [operations.GetV1EfacturaJobsConflict](../../models/operations/get-v1-efactura-jobs-conflict.md)[]          | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `resend`                                                                                                    | [operations.GetV1EfacturaJobsResend](../../models/operations/get-v1-efactura-jobs-resend.md)                | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `createdAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `updatedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |