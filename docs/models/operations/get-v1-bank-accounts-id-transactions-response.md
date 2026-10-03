# GetV1BankAccountsIdTransactionsResponse

## Example Usage

```typescript
import { GetV1BankAccountsIdTransactionsResponse } from "@digitap/easyapi/models/operations";

let value: GetV1BankAccountsIdTransactionsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      accountId: "<id>",
      transactions: [],
      count: 989802,
    },
  },
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                               | Record<string, *string*[]>                                                                                                              | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |
| `result`                                                                                                                                | [operations.GetV1BankAccountsIdTransactionsResponseBody](../../models/operations/get-v1-bank-accounts-id-transactions-response-body.md) | :heavy_check_mark:                                                                                                                      | N/A                                                                                                                                     |