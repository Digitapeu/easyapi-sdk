# GetV1EtransportJobsCopy

## Example Usage

```typescript
import { GetV1EtransportJobsCopy } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsCopy = {
  uploadIndex: "<value>",
  downloadId: "<id>",
  uit: "<value>",
  result: "ok",
  receivedSource: "status",
  resultSource: "<value>",
  attemptSeq: 110933,
  dataCreare: "<value>",
  firstListedAt: new Date("2024-01-28T03:54:19.865Z"),
  recordedAt: new Date("2024-02-09T18:45:11.523Z"),
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `uploadIndex`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `downloadId`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `uit`                                                                                                             | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.GetV1EtransportJobsResult](../../models/operations/get-v1-etransport-jobs-result.md)                  | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `receivedSource`                                                                                                  | [operations.GetV1EtransportJobsReceivedSource](../../models/operations/get-v1-etransport-jobs-received-source.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `resultSource`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `attemptSeq`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `dataCreare`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `firstListedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `recordedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |