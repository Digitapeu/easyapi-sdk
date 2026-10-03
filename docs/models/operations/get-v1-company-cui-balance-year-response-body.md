# GetV1CompanyCuiBalanceYearResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceYearResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceYearResponseBody = {
  data: {
    cui: "<value>",
    year: 333386,
    available: false,
    lines: [
      {
        indicator: "<value>",
        value: 3466.06,
      },
    ],
    checkedAt: new Date("2024-09-28T17:32:10.890Z"),
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [operations.GetV1CompanyCuiBalanceYearData](../../models/operations/get-v1-company-cui-balance-year-data.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |