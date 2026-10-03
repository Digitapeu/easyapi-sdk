# GetV1BankTreasuryCuiResult

## Example Usage

```typescript
import { GetV1BankTreasuryCuiResult } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankTreasuryCuiResult = {
  cui: "<value>",
  ibans: [],
  source: "anaf",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `cui`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `ibans`                                              | [operations.Iban](../../models/operations/iban.md)[] | :heavy_check_mark:                                   | N/A                                                  |
| `source`                                             | *"anaf"*                                             | :heavy_check_mark:                                   | N/A                                                  |