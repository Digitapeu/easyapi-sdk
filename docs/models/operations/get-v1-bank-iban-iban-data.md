# GetV1BankIbanIbanData

## Example Usage

```typescript
import { GetV1BankIbanIbanData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankIbanIbanData = {
  result: {
    iban: "DE47500040080040309353",
    valid: true,
    country: "Lithuania",
    checkDigitsValid: false,
    bankCode: "<value>",
    bankName: null,
    accountNumber: "<value>",
  },
  checkedAt: new Date("2026-06-19T12:39:53.226Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `result`                                                                                      | [operations.GetV1BankIbanIbanResult](../../models/operations/get-v1-bank-iban-iban-result.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |