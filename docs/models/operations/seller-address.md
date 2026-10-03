# SellerAddress

## Example Usage

```typescript
import { SellerAddress } from "@digitap/easyapi/models/operations";

let value: SellerAddress = {
  street: "Liam Mission",
  city: "East Donny",
  country: "Cayman Islands",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `street`             | *string*             | :heavy_check_mark:   | N/A                  |
| `additionalStreet`   | *string*             | :heavy_minus_sign:   | N/A                  |
| `city`               | *string*             | :heavy_check_mark:   | N/A                  |
| `postalCode`         | *string*             | :heavy_minus_sign:   | N/A                  |
| `countrySubdivision` | *string*             | :heavy_minus_sign:   | N/A                  |
| `country`            | *string*             | :heavy_check_mark:   | N/A                  |