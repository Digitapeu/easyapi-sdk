# GetV1CompanyCuiData

## Example Usage

```typescript
import { GetV1CompanyCuiData } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiData = {
  cui: "<value>",
  name: "<value>",
  registrationNumber: "<value>",
  address: {},
  vat: {
    vatActive: true,
    vatOnPayment: false,
    vatNumber: "<value>",
  },
  active: true,
  checkedAt: new Date("2026-12-27T21:02:45.073Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cui`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `registrationNumber`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `address`                                                                                     | [operations.GetV1CompanyCuiAddress](../../models/operations/get-v1-company-cui-address.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vat`                                                                                         | [operations.GetV1CompanyCuiVat](../../models/operations/get-v1-company-cui-vat.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `active`                                                                                      | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [operations.GetV1CompanyCuiSource](../../models/operations/get-v1-company-cui-source.md)      | :heavy_minus_sign:                                                                            | N/A                                                                                           |