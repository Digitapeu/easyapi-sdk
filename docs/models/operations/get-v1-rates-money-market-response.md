# GetV1RatesMoneyMarketResponse

## Example Usage

```typescript
import { GetV1RatesMoneyMarketResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesMoneyMarketResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
    data: {
      country: "RO",
      unit: "percent_per_year",
      averaging: "monthly_average",
      latestMonth: "<value>",
      months: [
        {
          month: "<value>",
          overnight: 9757.99,
          m1: 8712.99,
          m3: 2953.3,
          m6: 8913.39,
          m12: 8414.74,
        },
      ],
      source: "<value>",
      sourceUrl: "https://feline-spear.biz",
      licence: "<value>",
      doi: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                          | Record<string, *string*[]>                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `result`                                                                                                           | [operations.GetV1RatesMoneyMarketResponseBody](../../models/operations/get-v1-rates-money-market-response-body.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |