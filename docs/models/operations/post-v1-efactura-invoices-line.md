# PostV1EfacturaInvoicesLine

## Example Usage

```typescript
import { PostV1EfacturaInvoicesLine } from "@digitap/easyapi/models/operations";

let value: PostV1EfacturaInvoicesLine = {
  id: "<id>",
  quantity: "<value>",
  unitCode: "<value>",
  unitPrice: "<value>",
  vatCategory: "K",
  item: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `note`                                                                                             | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `quantity`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `unitCode`                                                                                         | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `unitPrice`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `baseQuantity`                                                                                     | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `vatCategory`                                                                                      | [operations.LineVatCategory](../../models/operations/line-vat-category.md)                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `vatRate`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `item`                                                                                             | [operations.PostV1EfacturaInvoicesItem](../../models/operations/post-v1-efactura-invoices-item.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `allowances`                                                                                       | [operations.LineAllowance](../../models/operations/line-allowance.md)[]                            | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `charges`                                                                                          | [operations.LineCharge](../../models/operations/line-charge.md)[]                                  | :heavy_minus_sign:                                                                                 | N/A                                                                                                |