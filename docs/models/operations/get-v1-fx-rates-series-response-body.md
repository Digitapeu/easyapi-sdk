# GetV1FxRatesSeriesResponseBody

Success

## Example Usage

```typescript
import { GetV1FxRatesSeriesResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FxRatesSeriesResponseBody = {
  data: {
    base: "RON",
    currency: "Indian Rupee",
    from: "<value>",
    to: "<value>",
    points: [
      {
        date: "2024-09-05",
        rate: 7388.26,
      },
    ],
    source: "BNR",
    checkedAt: new Date("2026-01-22T07:39:02.070Z"),
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetV1FxRatesSeriesData](../../models/operations/get-v1-fx-rates-series-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |