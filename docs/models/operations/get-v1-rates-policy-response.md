# GetV1RatesPolicyResponse

## Example Usage

```typescript
import { GetV1RatesPolicyResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesPolicyResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `result`                                                                                                | [operations.GetV1RatesPolicyResponseBody](../../models/operations/get-v1-rates-policy-response-body.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |