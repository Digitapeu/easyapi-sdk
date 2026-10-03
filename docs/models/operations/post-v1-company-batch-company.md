# PostV1CompanyBatchCompany

## Example Usage

```typescript
import { PostV1CompanyBatchCompany } from "@digitap.eu/easyapi/models/operations";

let value: PostV1CompanyBatchCompany = {
  cui: "<value>",
  name: "<value>",
  registrationNumber: "<value>",
  address: {},
  vat: {
    vatActive: true,
    vatOnPayment: true,
    vatNumber: "<value>",
  },
  active: true,
  checkedAt: new Date("2026-02-24T02:14:19.613Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cui`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `registrationNumber`                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `address`                                                                                        | [operations.PostV1CompanyBatchAddress](../../models/operations/post-v1-company-batch-address.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `vat`                                                                                            | [operations.PostV1CompanyBatchVat](../../models/operations/post-v1-company-batch-vat.md)         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `active`                                                                                         | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checkedAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `source`                                                                                         | [operations.PostV1CompanyBatchSource](../../models/operations/post-v1-company-batch-source.md)   | :heavy_minus_sign:                                                                               | N/A                                                                                              |