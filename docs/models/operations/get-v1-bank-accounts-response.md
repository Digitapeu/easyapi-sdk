# GetV1BankAccountsResponse

## Example Usage

```typescript
import { GetV1BankAccountsResponse } from "@digitap/easyapi/models/operations";

let value: GetV1BankAccountsResponse = {
  headers: {},
  result: {
    data: {
      accounts: [
        {
          id: "<id>",
          connectionId: "<id>",
          iban: "FO6114240008509724",
          name: "<value>",
          currency: null,
          ownerName: "<value>",
          status: "active",
          consentExpiresAt: "<value>",
          source: "aggregator",
        },
      ],
      count: 22898,
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [operations.GetV1BankAccountsResponseBody](../../models/operations/get-v1-bank-accounts-response-body.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |