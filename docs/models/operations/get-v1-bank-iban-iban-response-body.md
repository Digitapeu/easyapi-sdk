# GetV1BankIbanIbanResponseBody

Success

## Example Usage

```typescript
import { GetV1BankIbanIbanResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1BankIbanIbanResponseBody = {
  data: {
    result: {
      iban: "DE47500040080040309353",
      valid: true,
      country: "Lithuania",
      checkDigitsValid: false,
      bankCode: "<value>",
      bankName: null,
      accountNumber: "<value>",
    },
    checkedAt: new Date("2026-09-04T09:49:38.832Z"),
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [operations.GetV1BankIbanIbanData](../../models/operations/get-v1-bank-iban-iban-data.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |