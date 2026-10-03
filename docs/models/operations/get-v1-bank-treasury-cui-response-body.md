# GetV1BankTreasuryCuiResponseBody

Success

## Example Usage

```typescript
import { GetV1BankTreasuryCuiResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankTreasuryCuiResponseBody = {
  data: {
    result: {
      cui: "<value>",
      ibans: [],
      source: "anaf",
    },
    checkedAt: new Date("2024-08-21T23:41:38.195Z"),
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `data`                                                                                          | [operations.GetV1BankTreasuryCuiData](../../models/operations/get-v1-bank-treasury-cui-data.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |