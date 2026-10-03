# Charge

## Example Usage

```typescript
import { Charge } from "@digitap/easyapi/models/operations";

let value: Charge = {
  amount: "626.58",
  vatCategory: "Z",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `amount`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `vatCategory`                                                                  | [operations.ChargeVatCategory](../../models/operations/charge-vat-category.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `vatRate`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `reason`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `reasonCode`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |