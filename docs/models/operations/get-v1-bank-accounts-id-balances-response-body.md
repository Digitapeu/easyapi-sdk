# GetV1BankAccountsIdBalancesResponseBody

Success

## Example Usage

```typescript
import { GetV1BankAccountsIdBalancesResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1BankAccountsIdBalancesResponseBody = {
  data: {
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
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                         | [operations.GetV1BankAccountsIdBalancesData](../../models/operations/get-v1-bank-accounts-id-balances-data.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |