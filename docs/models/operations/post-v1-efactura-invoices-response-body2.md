# PostV1EfacturaInvoicesResponseBody2

Success

## Example Usage

```typescript
import { PostV1EfacturaInvoicesResponseBody2 } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesResponseBody2 = {
  data: {
    jobId: "e4427be6-16bd-47a7-828c-ff27427bd7f7",
    kind: "etransport.declare",
    buffered: true,
    status: "error",
    inFlight: true,
    delivered: false,
    dispatchUncertain: true,
    unresolvedDispatches: 633808,
    duplicateDetected: false,
    lineageJobIds: [],
    blockedReason: "connection_error",
    reviewReason: "restore",
    dispatchCount: 187614,
    maxDispatches: 757327,
    nextAttemptAt: new Date("2024-11-04T10:13:01.493Z"),
    unknownSince: new Date("2024-09-19T15:46:32.776Z"),
    resendEligibleAt: new Date("2024-08-02T16:07:20.331Z"),
    deliveredAt: new Date("2024-02-13T05:33:39.510Z"),
    resourceId: "dd948725-3298-4ddc-95c4-f23a3b51fa63",
    customerRef: "<value>",
    payloadSha256: null,
    observation: {
      watchFrom: new Date("2025-04-16T09:27:33.759Z"),
      until: new Date("2026-02-12T06:57:52.984Z"),
      checks: 316326,
      inconclusive: 385174,
      lastCheckAt: null,
      lastReason: "<value>",
      lastConclusiveAt: new Date("2026-12-15T15:52:20.912Z"),
    },
    evidenceVersion: 159640,
    attempts: [
      {
        seq: 541385,
        basis: "not_sent_retry",
        startedAt: new Date("2026-08-13T06:14:05.625Z"),
        finishedAt: new Date("2026-04-19T10:53:44.744Z"),
        outcome: "ambiguous",
        lateOutcome: "accepted",
        unresolved: false,
        rejectionCode: "http_4xx",
        httpStatus: 103797,
        uploadIndex: "<value>",
        uit: "<value>",
        errorCode: "<value>",
        reasonCode: "lease_expired",
      },
    ],
    copies: [],
    conflicts: [],
    resend: {
      eligible: true,
      refusalReason: "listing_found",
      request: {
        evidenceVersion: 848331,
        state: "refused",
        refusalReason: null,
        actorKind: "customer",
        actorRole: "<value>",
        requestedAt: new Date("2026-04-18T13:13:57.800Z"),
        decidedAt: new Date("2026-12-29T23:21:07.759Z"),
      },
    },
    createdAt: new Date("2025-07-22T19:33:53.561Z"),
    updatedAt: new Date("2026-09-19T13:34:00.308Z"),
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `data`                                                                                               | [operations.PostV1EfacturaInvoicesData2](../../models/operations/post-v1-efactura-invoices-data2.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |