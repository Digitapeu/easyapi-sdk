# GetV1FinancialInstitutionsResponse

## Example Usage

```typescript
import { GetV1FinancialInstitutionsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                   | Record<string, *string*[]>                                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `result`                                                                                                                    | [operations.GetV1FinancialInstitutionsResponseBody](../../models/operations/get-v1-financial-institutions-response-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |