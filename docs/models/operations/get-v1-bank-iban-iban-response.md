# GetV1BankIbanIbanResponse

## Example Usage

```typescript
import { GetV1BankIbanIbanResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankIbanIbanResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                  | Record<string, *string*[]>                                                                                 | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `result`                                                                                                   | [operations.GetV1BankIbanIbanResponseBody](../../models/operations/get-v1-bank-iban-iban-response-body.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |