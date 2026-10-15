# GetV1EfacturaJobsAttempt

## Example Usage

```typescript
import { GetV1EfacturaJobsAttempt } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsAttempt = {
  seq: 349221,
  basis: "first",
  startedAt: new Date("2025-08-09T09:45:08.667Z"),
  finishedAt: null,
  outcome: "definite_reject",
  lateOutcome: "accepted",
  unresolved: false,
  rejectionCode: "header_error_message",
  httpStatus: 152756,
  uploadIndex: "<value>",
  uit: "<value>",
  errorCode: "<value>",
  reasonCode: "http_5xx",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                       | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `basis`                                                                                                     | [operations.GetV1EfacturaJobsBasis](../../models/operations/get-v1-efactura-jobs-basis.md)                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `startedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `finishedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)               | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `outcome`                                                                                                   | [operations.GetV1EfacturaJobsOutcome](../../models/operations/get-v1-efactura-jobs-outcome.md)              | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `lateOutcome`                                                                                               | [operations.GetV1EfacturaJobsLateOutcome](../../models/operations/get-v1-efactura-jobs-late-outcome.md)     | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `unresolved`                                                                                                | *boolean*                                                                                                   | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `rejectionCode`                                                                                             | [operations.GetV1EfacturaJobsRejectionCode](../../models/operations/get-v1-efactura-jobs-rejection-code.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `httpStatus`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `uploadIndex`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `uit`                                                                                                       | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `errorCode`                                                                                                 | *string*                                                                                                    | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `reasonCode`                                                                                                | [operations.GetV1EfacturaJobsReasonCode](../../models/operations/get-v1-efactura-jobs-reason-code.md)       | :heavy_check_mark:                                                                                          | N/A                                                                                                         |