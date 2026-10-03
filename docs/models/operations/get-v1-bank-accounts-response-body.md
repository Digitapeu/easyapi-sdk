# GetV1BankAccountsResponseBody

Success

## Example Usage

```typescript
import { GetV1BankAccountsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankAccountsResponseBody = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetV1BankAccountsData](../../models/operations/get-v1-bank-accounts-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |