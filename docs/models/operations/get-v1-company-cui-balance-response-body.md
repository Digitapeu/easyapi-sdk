# GetV1CompanyCuiBalanceResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceResponseBody = {
  data: {
    cui: "<value>",
    years: [
      {
        cui: "<value>",
        year: 218882,
        available: false,
        lines: [],
        checkedAt: new Date("2024-01-17T22:31:20.596Z"),
      },
    ],
    checkedAt: new Date("2025-12-08T05:13:26.842Z"),
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [operations.GetV1CompanyCuiBalanceData](../../models/operations/get-v1-company-cui-balance-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |