# PostV1EfacturaInvoicesResponse

## Example Usage

```typescript
import { PostV1EfacturaInvoicesResponse } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaInvoicesResponse = {
  headers: {},
  result: {
    data: {
      id: "<id>",
      idIncarcare: "<value>",
      status: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [operations.PostV1EfacturaInvoicesResponseBody](../../models/operations/post-v1-efactura-invoices-response-body.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |