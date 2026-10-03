# Seller

## Example Usage

```typescript
import { Seller } from "@digitap/easyapi/models/operations";

let value: Seller = {
  name: "<value>",
  address: {
    street: "Orn Harbors",
    city: "Thealand",
    country: "Brazil",
  },
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `tradingName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `identifier`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `legalRegistrationId`                                                 | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `vatId`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `taxRegistrationId`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `address`                                                             | [operations.SellerAddress](../../models/operations/seller-address.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `contact`                                                             | [operations.SellerContact](../../models/operations/seller-contact.md) | :heavy_minus_sign:                                                    | N/A                                                                   |