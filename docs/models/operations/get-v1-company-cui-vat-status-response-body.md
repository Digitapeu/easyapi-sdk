# GetV1CompanyCuiVatStatusResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiVatStatusResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiVatStatusResponseBody = {
  data: {
    cui: "<value>",
    vatActive: false,
    vatOnPayment: true,
    vatNumber: "<value>",
    active: false,
    checkedAt: new Date("2026-11-11T05:16:14.055Z"),
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                   | [operations.GetV1CompanyCuiVatStatusData](../../models/operations/get-v1-company-cui-vat-status-data.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |