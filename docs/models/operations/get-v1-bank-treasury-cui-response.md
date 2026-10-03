# GetV1BankTreasuryCuiResponse

## Example Usage

```typescript
import { GetV1BankTreasuryCuiResponse } from "@digitap/easyapi/models/operations";

let value: GetV1BankTreasuryCuiResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      result: {
        cui: "<value>",
        ibans: [],
        source: "anaf",
      },
      checkedAt: new Date("2024-08-21T23:41:38.195Z"),
    },
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [operations.GetV1BankTreasuryCuiResponseBody](../../models/operations/get-v1-bank-treasury-cui-response-body.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |