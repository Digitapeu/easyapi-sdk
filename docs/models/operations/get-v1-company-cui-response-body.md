# GetV1CompanyCuiResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiResponseBody = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `data`                                                                               | [operations.GetV1CompanyCuiData](../../models/operations/get-v1-company-cui-data.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |