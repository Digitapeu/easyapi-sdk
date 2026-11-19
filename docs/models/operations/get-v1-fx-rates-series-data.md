# GetV1FxRatesSeriesData

## Example Usage

```typescript
import { GetV1FxRatesSeriesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FxRatesSeriesData = {
  base: "RON",
  currency: "Ethiopian Birr",
  from: "<value>",
  to: "<value>",
  points: [],
  source: "BNR",
  checkedAt: new Date("2024-04-29T12:53:47.866Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `base`                                                                                        | *"RON"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `from`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `points`                                                                                      | [operations.Point](../../models/operations/point.md)[]                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *"BNR"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |