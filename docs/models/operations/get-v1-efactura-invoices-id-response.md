# GetV1EfacturaInvoicesIdResponse

## Example Usage

```typescript
import { GetV1EfacturaInvoicesIdResponse } from "@digitap/easyapi/models/operations";

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
      state: "Ohio",
      downloadId: "<id>",
      checkedAt: new Date("2026-02-02T11:34:21.545Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                              | Record<string, *string*[]>                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `result`                                                                                                               | [operations.GetV1EfacturaInvoicesIdResponseBody](../../models/operations/get-v1-efactura-invoices-id-response-body.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |