# PostV1EfacturaInvoicesCopy

## Example Usage

```typescript
import { PostV1EfacturaInvoicesCopy } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesCopy = {
  uploadIndex: "<value>",
  downloadId: "<id>",
  uit: "<value>",
  result: "nok",
  receivedSource: "late_response",
  resultSource: "<value>",
  attemptSeq: null,
  dataCreare: "<value>",
  firstListedAt: new Date("2025-09-14T23:17:38.956Z"),
  recordedAt: new Date("2024-04-14T19:25:25.894Z"),
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `uploadIndex`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `downloadId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `uit`                                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `result`                                                                                                                | [operations.PostV1EfacturaInvoicesResult](../../models/operations/post-v1-efactura-invoices-result.md)                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `receivedSource`                                                                                                        | [operations.PostV1EfacturaInvoicesReceivedSource](../../models/operations/post-v1-efactura-invoices-received-source.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `resultSource`                                                                                                          | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `attemptSeq`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `dataCreare`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `firstListedAt`                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `recordedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |