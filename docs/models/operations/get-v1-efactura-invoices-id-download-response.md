# GetV1EfacturaInvoicesIdDownloadResponse

## Example Usage

```typescript
import { GetV1EfacturaInvoicesIdDownloadResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaInvoicesIdDownloadResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
  },
  result: {
    data: {
      id: "<id>",
      url: "https://flowery-complication.info/",
      expiresAt: new Date("2024-11-02T05:19:46.910Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [operations.GetV1EfacturaInvoicesIdDownloadResponseBody](../../models/operations/get-v1-efactura-invoices-id-download-response-body.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |