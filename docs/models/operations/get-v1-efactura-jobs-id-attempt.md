# GetV1EfacturaJobsIdAttempt

## Example Usage

```typescript
import { GetV1EfacturaJobsIdAttempt } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsIdAttempt = {
  seq: 14553,
  basis: "human_resend",
  startedAt: new Date("2024-07-02T08:13:07.213Z"),
  finishedAt: new Date("2024-05-13T06:46:20.400Z"),
  outcome: "ambiguous",
  lateOutcome: "accepted",
  unresolved: true,
  rejectionCode: null,
  httpStatus: 198425,
  uploadIndex: null,
  uit: "<value>",
  errorCode: "<value>",
  reasonCode: "own_evidence",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                            | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `basis`                                                                                                          | [operations.GetV1EfacturaJobsIdBasis](../../models/operations/get-v1-efactura-jobs-id-basis.md)                  | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `startedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `finishedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `outcome`                                                                                                        | [operations.GetV1EfacturaJobsIdOutcome](../../models/operations/get-v1-efactura-jobs-id-outcome.md)              | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `lateOutcome`                                                                                                    | [operations.GetV1EfacturaJobsIdLateOutcome](../../models/operations/get-v1-efactura-jobs-id-late-outcome.md)     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `unresolved`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `rejectionCode`                                                                                                  | [operations.GetV1EfacturaJobsIdRejectionCode](../../models/operations/get-v1-efactura-jobs-id-rejection-code.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `httpStatus`                                                                                                     | *number*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `uploadIndex`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `uit`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `errorCode`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `reasonCode`                                                                                                     | [operations.GetV1EfacturaJobsIdReasonCode](../../models/operations/get-v1-efactura-jobs-id-reason-code.md)       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |