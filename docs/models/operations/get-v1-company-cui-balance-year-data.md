# GetV1CompanyCuiBalanceYearData

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceYearData } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceYearData = {
  cui: "<value>",
  year: 546250,
  available: true,
  lines: [],
  checkedAt: new Date("2025-01-22T01:33:02.131Z"),
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `cui`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `year`                                                                                                         | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `available`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `lines`                                                                                                        | [operations.GetV1CompanyCuiBalanceYearLine](../../models/operations/get-v1-company-cui-balance-year-line.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `checkedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |