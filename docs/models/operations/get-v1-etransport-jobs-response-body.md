# GetV1EtransportJobsResponseBody

Success

## Example Usage

```typescript
import { GetV1EtransportJobsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsResponseBody = {
  data: {
    jobs: [
      {
        jobId: "fafd8ef9-9a91-49fe-997e-6c574e7a5125",
        kind: "efactura.submit",
        buffered: false,
        status: "error",
        inFlight: false,
        delivered: false,
        dispatchUncertain: false,
        unresolvedDispatches: 729328,
        duplicateDetected: false,
        lineageJobIds: [
          "48ae2872-3a91-4a0c-a885-c565960fe653",
          "70e21985-157c-446b-89dc-6ac2a92175ce",
          "e759d78f-b78e-42fc-b53a-fa482eddcbc0",
        ],
        blockedReason: null,
        reviewReason: "no_listing",
        dispatchCount: 55884,
        maxDispatches: 338338,
        nextAttemptAt: new Date("2024-05-31T09:25:28.397Z"),
        unknownSince: new Date("2024-01-31T01:55:00.028Z"),
        resendEligibleAt: new Date("2024-05-23T23:32:48.120Z"),
        deliveredAt: new Date("2025-06-04T16:30:49.285Z"),
        resourceId: "7e9592ba-6e92-4814-a8d4-a1748cade7fc",
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
        evidenceVersion: 568330,
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
        conflicts: [
          {
            kind: "result_contradiction",
            anafMessageId: "<id>",
            recordedAt: new Date("2024-08-21T01:59:07.676Z"),
          },
        ],
        resend: {
          eligible: true,
          refusalReason: "duplicate_detected",
          request: null,
        },
        createdAt: new Date("2026-10-03T00:31:33.907Z"),
        updatedAt: new Date("2026-12-19T23:03:16.641Z"),
      },
    ],
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data`                                                                                       | [operations.GetV1EtransportJobsData](../../models/operations/get-v1-etransport-jobs-data.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |