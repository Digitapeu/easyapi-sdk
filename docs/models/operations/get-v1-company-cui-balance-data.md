# GetV1CompanyCuiBalanceData

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceData = {
  cui: "<value>",
  years: [],
  checkedAt: new Date("2025-09-25T05:15:59.701Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cui`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `years`                                                                                       | [operations.Year](../../models/operations/year.md)[]                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |