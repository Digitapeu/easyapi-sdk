# GetV1BankAccountsIdBalancesData

## Example Usage

```typescript
import { GetV1BankAccountsIdBalancesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankAccountsIdBalancesData = {
  accountId: "<id>",
  balances: [
    {
      accountId: "<id>",
      balanceType: "<value>",
      amount: {
        value: "<value>",
        currency: "Guyana Dollar",
      },
      referenceDate: "<value>",
      consentExpiresAt: "<value>",
      source: "aggregator",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `accountId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `balances`                                                 | [operations.Balance](../../models/operations/balance.md)[] | :heavy_check_mark:                                         | N/A                                                        |