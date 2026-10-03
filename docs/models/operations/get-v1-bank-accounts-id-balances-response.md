# GetV1BankAccountsIdBalancesResponse

## Example Usage

```typescript
import { GetV1BankAccountsIdBalancesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1BankAccountsIdBalancesResponse = {
  headers: {
    "key": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `result`                                                                                                                        | [operations.GetV1BankAccountsIdBalancesResponseBody](../../models/operations/get-v1-bank-accounts-id-balances-response-body.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |