# Transaction

## Example Usage

```typescript
import { Transaction } from "@digitap/easyapi/models/operations";

let value: Transaction = {
  accountId: "<id>",
  transactionId: "<id>",
  bookingDate: "<value>",
  valueDate: "<value>",
  amount: {
    value: "<value>",
    currency: "Cedi",
  },
  creditorName: "<value>",
  creditorIban: "<value>",
  debtorName: "<value>",
  debtorIban: null,
  remittanceInfo: "<value>",
  status: "booked",
  consentExpiresAt: "<value>",
  source: "aggregator",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `transactionId`                                                                                                            | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `bookingDate`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `valueDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `amount`                                                                                                                   | [operations.GetV1BankAccountsIdTransactionsAmount](../../models/operations/get-v1-bank-accounts-id-transactions-amount.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `creditorName`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `creditorIban`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `debtorName`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `debtorIban`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `remittanceInfo`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `status`                                                                                                                   | [operations.GetV1BankAccountsIdTransactionsStatus](../../models/operations/get-v1-bank-accounts-id-transactions-status.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `consentExpiresAt`                                                                                                         | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | *"aggregator"*                                                                                                             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |