# GetV1EfacturaJobsCopy

## Example Usage

```typescript
import { GetV1EfacturaJobsCopy } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsCopy = {
  uploadIndex: "<value>",
  downloadId: "<id>",
  uit: "<value>",
  result: "ok",
  receivedSource: "listing",
  resultSource: "<value>",
  attemptSeq: 944620,
  dataCreare: "<value>",
  firstListedAt: new Date("2024-10-10T20:23:26.358Z"),
  recordedAt: new Date("2025-12-11T05:22:20.344Z"),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `uploadIndex`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `downloadId`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `uit`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [operations.GetV1EfacturaJobsResult](../../models/operations/get-v1-efactura-jobs-result.md)                  | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `receivedSource`                                                                                              | [operations.GetV1EfacturaJobsReceivedSource](../../models/operations/get-v1-efactura-jobs-received-source.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `resultSource`                                                                                                | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `attemptSeq`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `dataCreare`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `firstListedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `recordedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |