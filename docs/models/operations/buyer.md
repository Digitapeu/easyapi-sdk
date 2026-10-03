# Buyer

## Example Usage

```typescript
import { Buyer } from "@digitap/easyapi/models/operations";

let value: Buyer = {
  name: "<value>",
  address: {
    street: "Oberbrunner Dale",
    city: "Apple Valley",
    country: "Bouvet Island",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `name`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `tradingName`                                                       | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `identifier`                                                        | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `legalRegistrationId`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `vatId`                                                             | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `address`                                                           | [operations.BuyerAddress](../../models/operations/buyer-address.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `contact`                                                           | [operations.BuyerContact](../../models/operations/buyer-contact.md) | :heavy_minus_sign:                                                  | N/A                                                                 |