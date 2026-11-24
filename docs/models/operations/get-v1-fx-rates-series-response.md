# GetV1FxRatesSeriesResponse

## Example Usage

```typescript
import { GetV1FxRatesSeriesResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FxRatesSeriesResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.GetV1FxRatesSeriesResponseBody](../../models/operations/get-v1-fx-rates-series-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |