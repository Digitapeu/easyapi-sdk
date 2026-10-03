# GetV1FxRatesData

## Example Usage

```typescript
import { GetV1FxRatesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FxRatesData = {
  base: "RON",
  date: "2024-02-03",
  rates: [],
  source: "ECB",
  checkedAt: new Date("2024-09-06T18:15:55.464Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `base`                                                                                        | *"RON"*                                                                                       | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rates`                                                                                       | [operations.Rate](../../models/operations/rate.md)[]                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [operations.GetV1FxRatesSource](../../models/operations/get-v1-fx-rates-source.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |