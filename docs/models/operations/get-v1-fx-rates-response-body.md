# GetV1FxRatesResponseBody

Success

## Example Usage

```typescript
import { GetV1FxRatesResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1FxRatesResponseBody = {
  data: {
    base: "RON",
    date: "2024-07-01",
    rates: [
      {
        currency: "Lempira",
        rate: 4042.51,
      },
    ],
    source: "ECB",
    checkedAt: new Date("2025-08-30T20:20:06.984Z"),
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `data`                                                                         | [operations.GetV1FxRatesData](../../models/operations/get-v1-fx-rates-data.md) | :heavy_check_mark:                                                             | N/A                                                                            |