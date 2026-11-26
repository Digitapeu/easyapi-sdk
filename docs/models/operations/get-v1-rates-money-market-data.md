# GetV1RatesMoneyMarketData

## Example Usage

```typescript
import { GetV1RatesMoneyMarketData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesMoneyMarketData = {
  country: "RO",
  unit: "percent_per_year",
  averaging: "monthly_average",
  latestMonth: "<value>",
  months: [],
  source: "<value>",
  sourceUrl: "https://tired-provision.name",
  licence: "<value>",
  doi: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `country`                                              | *"RO"*                                                 | :heavy_check_mark:                                     | N/A                                                    |
| `unit`                                                 | *"percent_per_year"*                                   | :heavy_check_mark:                                     | N/A                                                    |
| `averaging`                                            | *"monthly_average"*                                    | :heavy_check_mark:                                     | N/A                                                    |
| `latestMonth`                                          | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `months`                                               | [operations.Month](../../models/operations/month.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `source`                                               | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `sourceUrl`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `licence`                                              | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `doi`                                                  | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |