# DeliveryAddress

## Example Usage

```typescript
import { DeliveryAddress } from "@digitap/easyapi/models/operations";

let value: DeliveryAddress = {
  street: "Abigale Freeway",
  city: "Escondido",
  country: "Isle of Man",
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