# GetV1EfacturaJobsIdResponse

## Example Usage

```typescript
import { GetV1EfacturaJobsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsIdResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      jobId: "091db704-a62b-4d0f-8487-96f365f575f5",
      kind: "etransport.declare",
      buffered: true,
      status: "processing",
      inFlight: true,
      delivered: true,
      dispatchUncertain: false,
      unresolvedDispatches: 240354,
      duplicateDetected: false,
      lineageJobIds: [],
      blockedReason: null,
      reviewReason: "no_payload",
      dispatchCount: 858663,
      maxDispatches: 176481,
      nextAttemptAt: new Date("2024-06-07T03:40:38.128Z"),
      unknownSince: new Date("2024-06-11T08:47:36.804Z"),
      resendEligibleAt: new Date("2024-06-11T18:31:21.794Z"),
      deliveredAt: new Date("2024-05-02T03:01:21.887Z"),
      resourceId: "2f53e0e1-9fdc-4ff2-b554-e73877f1f429",
      customerRef: "<value>",
      payloadSha256: "<value>",
      observation: {
        watchFrom: new Date("2025-04-29T03:14:31.595Z"),
        until: new Date("2025-02-08T06:12:00.397Z"),
        checks: 207029,
        inconclusive: 89103,
        lastCheckAt: new Date("2024-04-30T06:57:34.032Z"),
        lastReason: null,
        lastConclusiveAt: new Date("2025-04-09T09:22:18.091Z"),
      },
      evidenceVersion: 920359,
      attempts: [],
      copies: [
        {
          uploadIndex: "<value>",
          downloadId: "<id>",
          uit: "<value>",
          result: "nok",
          receivedSource: "operator",
          resultSource: "<value>",
          attemptSeq: 625908,
          dataCreare: "<value>",
          firstListedAt: null,
          recordedAt: new Date("2024-06-02T12:10:47.394Z"),
        },
      ],
      conflicts: [
        {
          kind: "identity_conflict",
          anafMessageId: "<id>",
          recordedAt: new Date("2026-01-04T07:10:59.035Z"),
        },
      ],
      resend: {
        eligible: true,
        refusalReason: "copy_exists",
        request: {
          evidenceVersion: 733456,
          state: "authorized",
          refusalReason: "duplicate_detected",
          actorKind: "customer",
          actorRole: "<value>",
          requestedAt: new Date("2026-03-03T16:20:31.173Z"),
          decidedAt: null,
        },
      },
      createdAt: new Date("2026-10-21T18:33:57.377Z"),
      updatedAt: new Date("2025-04-17T07:14:34.796Z"),
    },
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [operations.GetV1EfacturaJobsIdResponseBody](../../models/operations/get-v1-efactura-jobs-id-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |