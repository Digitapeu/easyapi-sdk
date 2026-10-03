# GetV1CompanyCuiVatStatusResponse

## Example Usage

```typescript
import { GetV1CompanyCuiVatStatusResponse } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiVatStatusResponse = {
  headers: {},
  result: {
    data: {
      cui: "<value>",
      vatActive: false,
      vatOnPayment: true,
      vatNumber: "<value>",
      active: false,
      checkedAt: new Date("2026-11-11T05:16:14.055Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                 | Record<string, *string*[]>                                                                                                | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `result`                                                                                                                  | [operations.GetV1CompanyCuiVatStatusResponseBody](../../models/operations/get-v1-company-cui-vat-status-response-body.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |