# GetV1FxConvertResponse

## Example Usage

```typescript
import { GetV1FxConvertResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FxConvertResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      from: "<value>",
      to: "<value>",
      amount: 1551.04,
      result: 5029.62,
      rate: 9192.77,
      date: "2024-12-24",
      source: "BNR",
      checkedAt: new Date("2026-07-10T15:02:48.015Z"),
    },
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [operations.GetV1FxConvertResponseBody](../../models/operations/get-v1-fx-convert-response-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |