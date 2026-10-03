# GetV1VatViesCountryCodeVatNumberResponse

## Example Usage

```typescript
import { GetV1VatViesCountryCodeVatNumberResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1VatViesCountryCodeVatNumberResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      countryCode: "NE",
      vatNumber: "<value>",
      valid: true,
      name: "<value>",
      address: "930 Carroll Creek",
      checkedAt: new Date("2025-03-28T03:19:58.971Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                   | Record<string, *string*[]>                                                                                                                  | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `result`                                                                                                                                    | [operations.GetV1VatViesCountryCodeVatNumberResponseBody](../../models/operations/get-v1-vat-vies-country-code-vat-number-response-body.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |