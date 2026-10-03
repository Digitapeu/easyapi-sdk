# Year

## Example Usage

```typescript
import { Year } from "@digitap.eu/easyapi/models/operations";

let value: Year = {
  cui: "<value>",
  year: 204970,
  available: true,
  lines: [],
  checkedAt: new Date("2026-12-15T06:25:16.646Z"),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cui`                                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `year`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `available`                                                                                           | *boolean*                                                                                             | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `lines`                                                                                               | [operations.GetV1CompanyCuiBalanceLine](../../models/operations/get-v1-company-cui-balance-line.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `checkedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |