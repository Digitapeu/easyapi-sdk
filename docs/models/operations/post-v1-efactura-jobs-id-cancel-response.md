# PostV1EfacturaJobsIdCancelResponse

## Example Usage

```typescript
import { PostV1EfacturaJobsIdCancelResponse } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaJobsIdCancelResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      jobId: "7408ba2c-1852-44b6-8963-abd4df484515",
      kind: "etransport.declare",
      buffered: false,
      status: "unknown",
      inFlight: false,
      delivered: false,
      dispatchUncertain: true,
      unresolvedDispatches: 441192,
      duplicateDetected: false,
      lineageJobIds: [
        "044cc538-fca3-47e1-9370-2865d39c1993",
      ],
      blockedReason: "connection_pending",
      reviewReason: null,
      dispatchCount: 969086,
      maxDispatches: 387555,
      nextAttemptAt: new Date("2024-09-30T19:53:23.102Z"),
      unknownSince: null,
      resendEligibleAt: new Date("2025-05-17T22:00:44.855Z"),
      deliveredAt: null,
      resourceId: "9b40cfb4-47be-4717-a91a-e87852d9a2f3",
      customerRef: "<value>",
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
      evidenceVersion: 612976,
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
      conflicts: [],
      resend: {
        eligible: true,
        refusalReason: "connection_revoked",
        request: null,
      },
      createdAt: new Date("2024-08-28T02:08:53.804Z"),
      updatedAt: new Date("2024-04-02T20:39:01.493Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [operations.PostV1EfacturaJobsIdCancelResponseBody](../../models/operations/post-v1-efactura-jobs-id-cancel-response-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |