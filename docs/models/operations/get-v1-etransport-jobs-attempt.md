# GetV1EtransportJobsAttempt

## Example Usage

```typescript
import { GetV1EtransportJobsAttempt } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsAttempt = {
  seq: 881425,
  basis: "human_resend",
  startedAt: new Date("2025-09-18T11:03:36.774Z"),
  finishedAt: new Date("2025-12-18T07:14:55.184Z"),
  outcome: "not_sent",
  lateOutcome: "not_sent",
  unresolved: true,
  rejectionCode: "http_4xx",
  httpStatus: 280943,
  uploadIndex: "<value>",
  uit: "<value>",
  errorCode: "<value>",
  reasonCode: null,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                           | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `basis`                                                                                                         | [operations.GetV1EtransportJobsBasis](../../models/operations/get-v1-etransport-jobs-basis.md)                  | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `startedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `finishedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `outcome`                                                                                                       | [operations.GetV1EtransportJobsOutcome](../../models/operations/get-v1-etransport-jobs-outcome.md)              | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `lateOutcome`                                                                                                   | [operations.GetV1EtransportJobsLateOutcome](../../models/operations/get-v1-etransport-jobs-late-outcome.md)     | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `unresolved`                                                                                                    | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `rejectionCode`                                                                                                 | [operations.GetV1EtransportJobsRejectionCode](../../models/operations/get-v1-etransport-jobs-rejection-code.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `httpStatus`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `uploadIndex`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `uit`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `errorCode`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `reasonCode`                                                                                                    | [operations.GetV1EtransportJobsReasonCode](../../models/operations/get-v1-etransport-jobs-reason-code.md)       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |