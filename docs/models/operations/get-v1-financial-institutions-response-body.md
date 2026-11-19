# GetV1FinancialInstitutionsResponseBody

Success

## Example Usage

```typescript
import { GetV1FinancialInstitutionsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsResponseBody = {
  data: {
    listDate: "<value>",
    count: 838143,
    institutions: [
      {
        riadCode: "<value>",
        lei: null,
        name: "<value>",
        address: "94655 Boehm Centers",
        postalCode: "64327-3221",
        city: null,
        category: "<value>",
        head: {
          country: null,
          name: "<value>",
          riadCode: "<value>",
          lei: "<value>",
        },
      },
    ],
    source: "<value>",
    sourceUrl: "https://firm-forage.net",
    licence: "<value>",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                     | [operations.GetV1FinancialInstitutionsData](../../models/operations/get-v1-financial-institutions-data.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |