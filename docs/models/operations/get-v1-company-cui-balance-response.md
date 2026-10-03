# GetV1CompanyCuiBalanceResponse

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceResponse } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [operations.GetV1CompanyCuiBalanceResponseBody](../../models/operations/get-v1-company-cui-balance-response-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |