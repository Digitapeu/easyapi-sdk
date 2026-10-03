# GetV1VatViesCountryCodeVatNumberResponseBody

Success

## Example Usage

```typescript
import { GetV1VatViesCountryCodeVatNumberResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1VatViesCountryCodeVatNumberResponseBody = {
  data: {
    countryCode: "NE",
    vatNumber: "<value>",
    valid: true,
    name: "<value>",
    address: "930 Carroll Creek",
    checkedAt: new Date("2025-03-28T03:19:58.971Z"),
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                     | [operations.GetV1VatViesCountryCodeVatNumberData](../../models/operations/get-v1-vat-vies-country-code-vat-number-data.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |