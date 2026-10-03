# GetV1EfacturaInvoicesIdResponseBody

Success

## Example Usage

```typescript
import { GetV1EfacturaInvoicesIdResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaInvoicesIdResponseBody = {
  data: {
    id: "<id>",
    idIncarcare: "<value>",
    state: "Ohio",
    downloadId: "<id>",
    checkedAt: new Date("2026-02-02T11:34:21.545Z"),
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [operations.GetV1EfacturaInvoicesIdData](../../models/operations/get-v1-efactura-invoices-id-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |