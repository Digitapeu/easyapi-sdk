# GetV1EtransportJobsIdResponse

## Example Usage

```typescript
import { GetV1EtransportJobsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsIdResponse = {
  headers: {},
  result: {
    data: {
      jobId: "eeb6e468-39a8-4d76-813a-6a9690f9d7f1",
      kind: "efactura.submit",
      buffered: false,
      status: "error",
      inFlight: true,
      delivered: true,
      dispatchUncertain: false,
      unresolvedDispatches: 60375,
      duplicateDetected: true,
      lineageJobIds: [
        "60404a8a-c6c1-4e1e-b8b1-11cc844ed829",
        "e10f8be0-5817-403a-a847-ac97f0dd411a",
        "61dc58ce-c929-44d7-a4ba-d6411964a9da",
      ],
      blockedReason: "connection_error",
      reviewReason: "payload_mismatch",
      dispatchCount: 167590,
      maxDispatches: 549864,
      nextAttemptAt: new Date("2025-09-29T00:46:11.692Z"),
      unknownSince: new Date("2026-07-07T13:27:40.255Z"),
      resendEligibleAt: new Date("2025-08-02T02:11:43.993Z"),
      deliveredAt: null,
      resourceId: "37bf44e7-3349-4b78-a26f-3549faecea60",
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
      evidenceVersion: 187140,
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
      conflicts: [],
      resend: {
        eligible: false,
        refusalReason: "conflict",
        request: null,
      },
      createdAt: new Date("2026-09-18T04:36:10.817Z"),
      updatedAt: new Date("2025-09-05T13:17:15.379Z"),
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                          | Record<string, *string*[]>                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `result`                                                                                                           | [operations.GetV1EtransportJobsIdResponseBody](../../models/operations/get-v1-etransport-jobs-id-response-body.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |