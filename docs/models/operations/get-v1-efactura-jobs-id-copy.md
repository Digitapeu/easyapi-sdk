# GetV1EfacturaJobsIdCopy

## Example Usage

```typescript
import { GetV1EfacturaJobsIdCopy } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsIdCopy = {
  uploadIndex: "<value>",
  downloadId: "<id>",
  uit: "<value>",
  result: "ok",
  receivedSource: "listing",
  resultSource: "<value>",
  attemptSeq: 586708,
  dataCreare: "<value>",
  firstListedAt: null,
  recordedAt: new Date("2024-02-17T00:04:08.409Z"),
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `uploadIndex`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `downloadId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `uit`                                                                                                              | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `result`                                                                                                           | [operations.GetV1EfacturaJobsIdResult](../../models/operations/get-v1-efactura-jobs-id-result.md)                  | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `receivedSource`                                                                                                   | [operations.GetV1EfacturaJobsIdReceivedSource](../../models/operations/get-v1-efactura-jobs-id-received-source.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `resultSource`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `attemptSeq`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `dataCreare`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `firstListedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `recordedAt`                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |