# GetV1CompanyCuiResponse

## Example Usage

```typescript
import { GetV1CompanyCuiResponse } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: {
      cui: "<value>",
      name: "<value>",
      registrationNumber: "<value>",
      address: null,
      vat: {
        vatActive: true,
        vatOnPayment: false,
        vatNumber: "<value>",
      },
      active: false,
      checkedAt: new Date("2025-10-02T12:27:36.354Z"),
    },
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `headers`                                                                                             | Record<string, *string*[]>                                                                            | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `result`                                                                                              | [operations.GetV1CompanyCuiResponseBody](../../models/operations/get-v1-company-cui-response-body.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |