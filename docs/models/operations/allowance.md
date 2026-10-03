# Allowance

## Example Usage

```typescript
import { Allowance } from "@digitap/easyapi/models/operations";

let value: Allowance = {
  amount: "392.83",
  vatCategory: "AE",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `amount`                                                                             | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `vatCategory`                                                                        | [operations.AllowanceVatCategory](../../models/operations/allowance-vat-category.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `vatRate`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reason`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `reasonCode`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |