# GetV1EfacturaJobsData

## Example Usage

```typescript
import { GetV1EfacturaJobsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsData = {
  jobs: [
    {
      jobId: "9a6311ad-eb37-4d3d-a859-b611c8da9f59",
      kind: "efactura.submit",
      buffered: true,
      status: "processing",
      inFlight: true,
      delivered: false,
      dispatchUncertain: true,
      unresolvedDispatches: 665925,
      duplicateDetected: true,
      lineageJobIds: [
        "689fcc0c-ce5c-480e-9ba4-23e6ea29186d",
        "0690b16f-9d23-409d-bb70-17846b7bf0c5",
        "bd3cd14e-6071-4433-9506-a9b09e18f958",
      ],
      blockedReason: "connection_error",
      reviewReason: "no_payload",
      dispatchCount: 422400,
      maxDispatches: 693361,
      nextAttemptAt: new Date("2026-07-10T23:39:44.437Z"),
      unknownSince: new Date("2024-11-29T05:16:41.214Z"),
      resendEligibleAt: new Date("2026-09-01T18:36:14.787Z"),
      deliveredAt: new Date("2026-02-27T03:04:08.184Z"),
      resourceId: null,
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
      evidenceVersion: 863325,
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
      conflicts: [],
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
      createdAt: new Date("2026-06-23T15:21:03.662Z"),
      updatedAt: new Date("2026-11-06T00:06:05.338Z"),
    },
  ],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `jobs`                                                                                   | [operations.GetV1EfacturaJobsJob](../../models/operations/get-v1-efactura-jobs-job.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `nextCursor`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |