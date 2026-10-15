# GetV1EtransportJobsIdAttempt

## Example Usage

```typescript
import { GetV1EtransportJobsIdAttempt } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsIdAttempt = {
  seq: 852884,
  basis: "not_sent_retry",
  startedAt: new Date("2024-12-10T02:04:51.645Z"),
  finishedAt: new Date("2024-12-27T11:35:01.159Z"),
  outcome: "definite_reject",
  lateOutcome: "accepted",
  unresolved: false,
  rejectionCode: "http_4xx",
  httpStatus: 729996,
  uploadIndex: "<value>",
  uit: "<value>",
  errorCode: "<value>",
  reasonCode: null,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                                | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `basis`                                                                                                              | [operations.GetV1EtransportJobsIdBasis](../../models/operations/get-v1-etransport-jobs-id-basis.md)                  | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `startedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `finishedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                        | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `outcome`                                                                                                            | [operations.GetV1EtransportJobsIdOutcome](../../models/operations/get-v1-etransport-jobs-id-outcome.md)              | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `lateOutcome`                                                                                                        | [operations.GetV1EtransportJobsIdLateOutcome](../../models/operations/get-v1-etransport-jobs-id-late-outcome.md)     | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `unresolved`                                                                                                         | *boolean*                                                                                                            | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `rejectionCode`                                                                                                      | [operations.GetV1EtransportJobsIdRejectionCode](../../models/operations/get-v1-etransport-jobs-id-rejection-code.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `httpStatus`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `uploadIndex`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `uit`                                                                                                                | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `errorCode`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `reasonCode`                                                                                                         | [operations.GetV1EtransportJobsIdReasonCode](../../models/operations/get-v1-etransport-jobs-id-reason-code.md)       | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |