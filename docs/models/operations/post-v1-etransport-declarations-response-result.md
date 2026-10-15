# PostV1EtransportDeclarationsResponseResult


## Supported Types

### `operations.PostV1EtransportDeclarationsResponseBody1`

```typescript
const value: operations.PostV1EtransportDeclarationsResponseBody1 = {
  data: {
    id: "<id>",
    uit: "<value>",
    status: "<value>",
    createdAt: new Date("2024-06-22T08:02:19.419Z"),
  },
};
```

### `operations.PostV1EtransportDeclarationsResponseBody2`

```typescript
const value: operations.PostV1EtransportDeclarationsResponseBody2 = {
  data: {
    jobId: "168ca470-5a0d-4ee9-a580-6eddd64b6756",
    kind: "etransport.declare",
    buffered: true,
    status: "cancelled",
    inFlight: true,
    delivered: true,
    dispatchUncertain: false,
    unresolvedDispatches: 105096,
    duplicateDetected: true,
    lineageJobIds: [
      "7f7a9e42-5fc4-4113-918f-4d0056cdf216",
    ],
    blockedReason: "feature_disabled",
    reviewReason: "no_listing",
    dispatchCount: 284660,
    maxDispatches: 227962,
    nextAttemptAt: new Date("2025-09-05T04:22:38.945Z"),
    unknownSince: new Date("2025-11-21T21:03:41.343Z"),
    resendEligibleAt: new Date("2025-02-20T18:24:00.580Z"),
    deliveredAt: new Date("2025-01-15T07:49:02.268Z"),
    resourceId: "f2c1862a-99b4-4054-a9b8-85431618c118",
    customerRef: "<value>",
    payloadSha256: "<value>",
    observation: {
      watchFrom: new Date("2026-07-26T23:32:16.847Z"),
      until: new Date("2026-09-13T11:17:35.051Z"),
      checks: 447395,
      inconclusive: 933592,
      lastCheckAt: new Date("2025-04-19T23:56:32.078Z"),
      lastReason: "<value>",
      lastConclusiveAt: new Date("2024-02-16T06:50:06.441Z"),
    },
    evidenceVersion: 112231,
    attempts: [],
    copies: [
      {
        uploadIndex: "<value>",
        downloadId: "<id>",
        uit: "<value>",
        result: "ok",
        receivedSource: "listing",
        resultSource: "<value>",
        attemptSeq: 915813,
        dataCreare: "<value>",
        firstListedAt: null,
        recordedAt: new Date("2026-05-11T14:32:31.902Z"),
      },
    ],
    conflicts: [
      {
        kind: "coverage_exceeded",
        anafMessageId: "<id>",
        recordedAt: new Date("2025-12-07T00:07:40.940Z"),
      },
    ],
    resend: {
      eligible: true,
      refusalReason: null,
      request: {
        evidenceVersion: 559990,
        state: "refused",
        refusalReason: "flag_disabled",
        actorKind: "operator",
        actorRole: "<value>",
        requestedAt: new Date("2025-11-24T16:41:04.005Z"),
        decidedAt: new Date("2025-09-11T22:12:07.643Z"),
      },
    },
    createdAt: new Date("2026-03-27T17:16:13.344Z"),
    updatedAt: new Date("2024-01-26T07:21:26.754Z"),
  },
};
```

