# GetV1FxRatesResponse

## Example Usage

```typescript
import { GetV1FxRatesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1FxRatesResponse = {
  headers: {
    "key": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `headers`                                                                                       | Record<string, *string*[]>                                                                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `result`                                                                                        | [operations.GetV1FxRatesResponseBody](../../models/operations/get-v1-fx-rates-response-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |