# GetV1FinancialInstitutionsInstitution

## Example Usage

```typescript
import { GetV1FinancialInstitutionsInstitution } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsInstitution = {
  riadCode: "<value>",
  lei: "<value>",
  name: "<value>",
  address: "828 Clark Street",
  postalCode: "67180-2557",
  city: "Port Alex",
  category: "<value>",
  head: {
    country: null,
    name: "<value>",
    riadCode: "<value>",
    lei: "<value>",
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `riadCode`                                         | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `lei`                                              | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `address`                                          | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `postalCode`                                       | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `city`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `category`                                         | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `head`                                             | [operations.Head](../../models/operations/head.md) | :heavy_check_mark:                                 | N/A                                                |