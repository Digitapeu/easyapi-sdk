# Balance

## Example Usage

```typescript
import { Balance } from "@digitap.eu/easyapi/models/operations";

let value: Balance = {
  accountId: "<id>",
  balanceType: "<value>",
  amount: {
    value: "<value>",
    currency: "Guyana Dollar",
  },
  referenceDate: "<value>",
  consentExpiresAt: null,
  source: "aggregator",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `balanceType`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `amount`                                                                                                           | [operations.GetV1BankAccountsIdBalancesAmount](../../models/operations/get-v1-bank-accounts-id-balances-amount.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `referenceDate`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `consentExpiresAt`                                                                                                 | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `source`                                                                                                           | *"aggregator"*                                                                                                     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |