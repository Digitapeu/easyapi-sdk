# PostV1EfacturaInvoicesAttempt

## Example Usage

```typescript
import { PostV1EfacturaInvoicesAttempt } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesAttempt = {
  seq: 841274,
  basis: "not_sent_retry",
  startedAt: new Date("2025-10-12T21:31:54.414Z"),
  finishedAt: new Date("2024-03-27T01:00:25.119Z"),
  outcome: "not_sent",
  lateOutcome: "definite_reject",
  unresolved: false,
  rejectionCode: "http_4xx",
  httpStatus: null,
  uploadIndex: "<value>",
  uit: "<value>",
  errorCode: "<value>",
  reasonCode: "pool_timeout",
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                                 | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `basis`                                                                                                               | [operations.PostV1EfacturaInvoicesBasis](../../models/operations/post-v1-efactura-invoices-basis.md)                  | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `startedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `finishedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `outcome`                                                                                                             | [operations.PostV1EfacturaInvoicesOutcome](../../models/operations/post-v1-efactura-invoices-outcome.md)              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `lateOutcome`                                                                                                         | [operations.PostV1EfacturaInvoicesLateOutcome](../../models/operations/post-v1-efactura-invoices-late-outcome.md)     | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `unresolved`                                                                                                          | *boolean*                                                                                                             | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `rejectionCode`                                                                                                       | [operations.PostV1EfacturaInvoicesRejectionCode](../../models/operations/post-v1-efactura-invoices-rejection-code.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `httpStatus`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `uploadIndex`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `uit`                                                                                                                 | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `errorCode`                                                                                                           | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `reasonCode`                                                                                                          | [operations.PostV1EfacturaInvoicesReasonCode](../../models/operations/post-v1-efactura-invoices-reason-code.md)       | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |