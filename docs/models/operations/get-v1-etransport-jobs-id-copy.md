# GetV1EtransportJobsIdCopy

## Example Usage

```typescript
import { GetV1EtransportJobsIdCopy } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsIdCopy = {
  uploadIndex: "<value>",
  downloadId: "<id>",
  uit: "<value>",
  result: "ok",
  receivedSource: "status",
  resultSource: "<value>",
  attemptSeq: 705523,
  dataCreare: "<value>",
  firstListedAt: new Date("2026-05-11T18:55:20.093Z"),
  recordedAt: new Date("2025-10-23T16:14:57.538Z"),
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `uploadIndex`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `downloadId`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `uit`                                                                                                                  | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [operations.GetV1EtransportJobsIdResult](../../models/operations/get-v1-etransport-jobs-id-result.md)                  | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `receivedSource`                                                                                                       | [operations.GetV1EtransportJobsIdReceivedSource](../../models/operations/get-v1-etransport-jobs-id-received-source.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `resultSource`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `attemptSeq`                                                                                                           | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `dataCreare`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `firstListedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `recordedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |