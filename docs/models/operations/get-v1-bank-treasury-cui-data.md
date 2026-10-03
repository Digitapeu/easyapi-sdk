# GetV1BankTreasuryCuiData

## Example Usage

```typescript
import { GetV1BankTreasuryCuiData } from "@digitap/easyapi/models/operations";

let value: GetV1BankTreasuryCuiData = {
  result: {
    cui: "<value>",
    ibans: [],
    source: "anaf",
  },
  checkedAt: new Date("2025-08-27T00:27:56.322Z"),
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `result`                                                                                            | [operations.GetV1BankTreasuryCuiResult](../../models/operations/get-v1-bank-treasury-cui-result.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `checkedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)       | :heavy_check_mark:                                                                                  | N/A                                                                                                 |