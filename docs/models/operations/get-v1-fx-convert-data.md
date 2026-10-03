# GetV1FxConvertData

## Example Usage

```typescript
import { GetV1FxConvertData } from "@digitap/easyapi/models/operations";

let value: GetV1FxConvertData = {
  from: "<value>",
  to: "<value>",
  amount: 2974.39,
  result: 7067.04,
  rate: 7898.69,
  date: "2024-07-03",
  source: "ECB",
  checkedAt: new Date("2025-08-27T06:30:32.455Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `to`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `rate`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [operations.GetV1FxConvertSource](../../models/operations/get-v1-fx-convert-source.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |