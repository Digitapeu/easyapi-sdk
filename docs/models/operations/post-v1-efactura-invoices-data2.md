# PostV1EfacturaInvoicesData2

## Example Usage

```typescript
import { PostV1EfacturaInvoicesData2 } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesData2 = {
  jobId: "a9e86a00-cff5-4588-9e9f-f942678e0c24",
  kind: "etransport.declare",
  buffered: false,
  status: "unknown",
  inFlight: true,
  delivered: false,
  dispatchUncertain: false,
  unresolvedDispatches: 181299,
  duplicateDetected: true,
  lineageJobIds: [
    "7e0cc32f-e070-44bc-9685-2cd0f27286a5",
    "61c7036f-6da2-4b32-88e1-0368d1c0d263",
    "3e23844d-80b9-44a8-8182-9b1bc60a4097",
  ],
  blockedReason: "credential_stale",
  reviewReason: "no_payload",
  dispatchCount: 361597,
  maxDispatches: 791066,
  nextAttemptAt: new Date("2024-09-11T03:08:53.612Z"),
  unknownSince: new Date("2026-06-17T23:02:16.602Z"),
  resendEligibleAt: new Date("2024-12-12T19:03:45.317Z"),
  deliveredAt: new Date("2026-07-02T08:54:52.841Z"),
  resourceId: null,
  customerRef: "<value>",
  payloadSha256: "<value>",
  observation: {
    watchFrom: new Date("2025-04-16T09:27:33.759Z"),
    until: new Date("2026-02-12T06:57:52.984Z"),
    checks: 316326,
    inconclusive: 385174,
    lastCheckAt: null,
    lastReason: "<value>",
    lastConclusiveAt: new Date("2026-12-15T15:52:20.912Z"),
  },
  evidenceVersion: 539351,
  attempts: [],
  copies: [],
  conflicts: [
    {
      kind: "result_contradiction",
      anafMessageId: "<id>",
      recordedAt: new Date("2026-11-18T17:34:59.064Z"),
    },
  ],
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
  createdAt: new Date("2026-04-03T06:21:35.995Z"),
  updatedAt: new Date("2024-09-28T19:50:38.872Z"),
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `jobId`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `kind`                                                                                                                | [operations.PostV1EfacturaInvoicesKind](../../models/operations/post-v1-efactura-invoices-kind.md)                    | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `buffered`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `status`                                                                                                              | [operations.PostV1EfacturaInvoicesStatus](../../models/operations/post-v1-efactura-invoices-status.md)                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `inFlight`                                                                                                            | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `delivered`                                                                                                           | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `dispatchUncertain`                                                                                                   | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `unresolvedDispatches`                                                                                                | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `duplicateDetected`                                                                                                   | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `lineageJobIds`                                                                                                       | *string*[]                                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `blockedReason`                                                                                                       | [operations.PostV1EfacturaInvoicesBlockedReason](../../models/operations/post-v1-efactura-invoices-blocked-reason.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `reviewReason`                                                                                                        | [operations.PostV1EfacturaInvoicesReviewReason](../../models/operations/post-v1-efactura-invoices-review-reason.md)   | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `dispatchCount`                                                                                                       | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `maxDispatches`                                                                                                       | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `nextAttemptAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `unknownSince`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `resendEligibleAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `deliveredAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `resourceId`                                                                                                          | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `customerRef`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `payloadSha256`                                                                                                       | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `observation`                                                                                                         | [operations.PostV1EfacturaInvoicesObservation](../../models/operations/post-v1-efactura-invoices-observation.md)      | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `evidenceVersion`                                                                                                     | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `attempts`                                                                                                            | [operations.PostV1EfacturaInvoicesAttempt](../../models/operations/post-v1-efactura-invoices-attempt.md)[]            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `copies`                                                                                                              | [operations.PostV1EfacturaInvoicesCopy](../../models/operations/post-v1-efactura-invoices-copy.md)[]                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `conflicts`                                                                                                           | [operations.PostV1EfacturaInvoicesConflict](../../models/operations/post-v1-efactura-invoices-conflict.md)[]          | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `resend`                                                                                                              | [operations.PostV1EfacturaInvoicesResend](../../models/operations/post-v1-efactura-invoices-resend.md)                | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `createdAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `updatedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |