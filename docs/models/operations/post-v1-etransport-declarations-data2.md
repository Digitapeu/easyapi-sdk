# PostV1EtransportDeclarationsData2

## Example Usage

```typescript
import { PostV1EtransportDeclarationsData2 } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportDeclarationsData2 = {
  jobId: "02b035ec-0378-4600-9820-dbe33896d021",
  kind: "etransport.declare",
  buffered: true,
  status: "done",
  inFlight: false,
  delivered: false,
  dispatchUncertain: true,
  unresolvedDispatches: 476114,
  duplicateDetected: false,
  lineageJobIds: [
    "4a128a1f-5bdb-42b9-ab76-8eeb04d5c041",
  ],
  blockedReason: "credential_stale",
  reviewReason: "no_listing",
  dispatchCount: 379010,
  maxDispatches: 231554,
  nextAttemptAt: new Date("2026-12-28T08:10:17.296Z"),
  unknownSince: new Date("2025-07-10T18:53:29.396Z"),
  resendEligibleAt: new Date("2025-10-31T09:56:33.620Z"),
  deliveredAt: new Date("2026-11-04T12:55:02.579Z"),
  resourceId: "66f4a0a0-d544-4862-8f6e-4857e31c33d2",
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
  evidenceVersion: 145121,
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
  createdAt: new Date("2026-07-07T08:40:03.284Z"),
  updatedAt: new Date("2026-10-16T15:23:12.151Z"),
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                                           | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `kind`                                                                                                                            | [operations.PostV1EtransportDeclarationsKind](../../models/operations/post-v1-etransport-declarations-kind.md)                    | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `buffered`                                                                                                                        | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `status`                                                                                                                          | [operations.PostV1EtransportDeclarationsStatus](../../models/operations/post-v1-etransport-declarations-status.md)                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `inFlight`                                                                                                                        | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `delivered`                                                                                                                       | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `dispatchUncertain`                                                                                                               | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `unresolvedDispatches`                                                                                                            | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `duplicateDetected`                                                                                                               | *boolean*                                                                                                                         | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `lineageJobIds`                                                                                                                   | *string*[]                                                                                                                        | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `blockedReason`                                                                                                                   | [operations.PostV1EtransportDeclarationsBlockedReason](../../models/operations/post-v1-etransport-declarations-blocked-reason.md) | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `reviewReason`                                                                                                                    | [operations.PostV1EtransportDeclarationsReviewReason](../../models/operations/post-v1-etransport-declarations-review-reason.md)   | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `dispatchCount`                                                                                                                   | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `maxDispatches`                                                                                                                   | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `nextAttemptAt`                                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `unknownSince`                                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `resendEligibleAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `deliveredAt`                                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `resourceId`                                                                                                                      | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `customerRef`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `payloadSha256`                                                                                                                   | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `observation`                                                                                                                     | [operations.PostV1EtransportDeclarationsObservation](../../models/operations/post-v1-etransport-declarations-observation.md)      | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `evidenceVersion`                                                                                                                 | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `attempts`                                                                                                                        | [operations.PostV1EtransportDeclarationsAttempt](../../models/operations/post-v1-etransport-declarations-attempt.md)[]            | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `copies`                                                                                                                          | [operations.PostV1EtransportDeclarationsCopy](../../models/operations/post-v1-etransport-declarations-copy.md)[]                  | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `conflicts`                                                                                                                       | [operations.PostV1EtransportDeclarationsConflict](../../models/operations/post-v1-etransport-declarations-conflict.md)[]          | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `resend`                                                                                                                          | [operations.PostV1EtransportDeclarationsResend](../../models/operations/post-v1-etransport-declarations-resend.md)                | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `createdAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |
| `updatedAt`                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                     | :heavy_check_mark:                                                                                                                | N/A                                                                                                                               |