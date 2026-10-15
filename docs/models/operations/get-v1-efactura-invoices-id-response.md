# GetV1EfacturaInvoicesIdResponse

## Example Usage

```typescript
import { GetV1EfacturaInvoicesIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaInvoicesIdResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      id: "<id>",
      idIncarcare: "<value>",
      state: "Montana",
      downloadId: "<id>",
      checkedAt: new Date("2026-09-30T00:36:56.249Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [operations.GetV1EfacturaInvoicesIdResponseBody](../../models/operations/get-v1-efactura-invoices-id-response-body.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |