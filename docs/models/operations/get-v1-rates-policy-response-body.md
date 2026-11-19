# GetV1RatesPolicyResponseBody

Success

## Example Usage

```typescript
import { GetV1RatesPolicyResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesPolicyResponseBody = {
  data: {
    country: "RO",
    rate: 3345.7,
    effectiveFrom: "<value>",
    asOf: "<value>",
    unit: "percent_per_year",
    changes: [
      {
        effectiveFrom: "<value>",
        rate: 5283.3,
      },
    ],
    source: "<value>",
    sourceUrl: "https://rural-waterspout.info",
    licence: "<value>",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.GetV1RatesPolicyData](../../models/operations/get-v1-rates-policy-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |