# GetV1RatesPolicyData

## Example Usage

```typescript
import { GetV1RatesPolicyData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesPolicyData = {
  country: "RO",
  rate: 8427.9,
  effectiveFrom: "<value>",
  asOf: "<value>",
  unit: "percent_per_year",
  changes: [],
  source: "<value>",
  sourceUrl: "https://unused-plain.net/",
  licence: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `country`                                                | *"RO"*                                                   | :heavy_check_mark:                                       | N/A                                                      |
| `rate`                                                   | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `effectiveFrom`                                          | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `asOf`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `unit`                                                   | *"percent_per_year"*                                     | :heavy_check_mark:                                       | N/A                                                      |
| `changes`                                                | [operations.Change](../../models/operations/change.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `source`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `sourceUrl`                                              | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `licence`                                                | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |