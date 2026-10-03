# GetV1BankAccountsIdTransactionsData

## Example Usage

```typescript
import { GetV1BankAccountsIdTransactionsData } from "@digitap/easyapi/models/operations";

let value: GetV1BankAccountsIdTransactionsData = {
  accountId: "<id>",
  transactions: [
    {
      accountId: "<id>",
      transactionId: "<id>",
      bookingDate: "<value>",
      valueDate: "<value>",
      amount: {
        value: "<value>",
        currency: "Cedi",
      },
      creditorName: null,
      creditorIban: "<value>",
      debtorName: "<value>",
      debtorIban: "<value>",
      remittanceInfo: "<value>",
      status: "pending",
      consentExpiresAt: "<value>",
      source: "aggregator",
    },
  ],
  count: 548612,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `accountId`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `transactions`                                                     | [operations.Transaction](../../models/operations/transaction.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `count`                                                            | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |