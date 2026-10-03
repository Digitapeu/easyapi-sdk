# GetV1CompanyCuiBalanceYearResponse

## Example Usage

```typescript
import { GetV1CompanyCuiBalanceYearResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiBalanceYearResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [operations.GetV1CompanyCuiBalanceYearResponseBody](../../models/operations/get-v1-company-cui-balance-year-response-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |