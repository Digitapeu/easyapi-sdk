# PostV1EtransportJobsIdCancelResponseBody

Success

## Example Usage

```typescript
import { PostV1EtransportJobsIdCancelResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportJobsIdCancelResponseBody = {
  data: {
    jobId: "08a981ad-90e2-4e9e-b68f-c9723b15be3b",
    kind: "etransport.declare",
    buffered: false,
    status: "processing",
    inFlight: true,
    delivered: false,
    dispatchUncertain: true,
    unresolvedDispatches: 654319,
    duplicateDetected: true,
    lineageJobIds: [],
    blockedReason: "credential_stale",
    reviewReason: "payload_mismatch",
    dispatchCount: 810169,
    maxDispatches: 209678,
    nextAttemptAt: new Date("2026-06-25T23:24:31.064Z"),
    unknownSince: null,
    resendEligibleAt: new Date("2026-10-20T13:18:56.434Z"),
    deliveredAt: new Date("2026-12-09T02:13:11.530Z"),
    resourceId: "f7dfd3c1-c713-49ef-a6d4-775face88e04",
    customerRef: "<value>",
    payloadSha256: null,
    observation: {
      watchFrom: new Date("2025-11-27T21:10:17.047Z"),
      until: new Date("2024-01-30T23:27:13.076Z"),
      checks: 483922,
      inconclusive: 972295,
      lastCheckAt: new Date("2025-05-17T06:40:10.691Z"),
      lastReason: null,
      lastConclusiveAt: null,
    },
    evidenceVersion: 134304,
    attempts: [
      {
        seq: 151205,
        basis: "not_sent_retry",
        startedAt: new Date("2026-09-17T05:13:48.399Z"),
        finishedAt: new Date("2025-08-02T11:23:32.768Z"),
        outcome: "not_sent",
        lateOutcome: "accepted",
        unresolved: false,
        rejectionCode: null,
        httpStatus: 790088,
        uploadIndex: "<value>",
        uit: "<value>",
        errorCode: null,
        reasonCode: null,
      },
    ],
    copies: [],
    conflicts: [
      {
        kind: "coverage_exceeded",
        anafMessageId: "<id>",
        recordedAt: new Date("2026-08-26T06:52:31.163Z"),
      },
    ],
    resend: {
      eligible: false,
      refusalReason: "attempt_cap",
      request: null,
    },
    createdAt: new Date("2026-07-26T14:11:11.793Z"),
    updatedAt: new Date("2025-03-22T01:35:03.694Z"),
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                           | [operations.PostV1EtransportJobsIdCancelData](../../models/operations/post-v1-etransport-jobs-id-cancel-data.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |