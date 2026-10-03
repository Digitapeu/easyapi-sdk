# Account

## Example Usage

```typescript
import { Account } from "@digitap/easyapi/models/operations";

let value: Account = {
  id: "<id>",
  connectionId: "<id>",
  iban: "GE69ET0426306907420027",
  name: "<value>",
  currency: "Iceland Krona",
  ownerName: "<value>",
  status: "active",
  consentExpiresAt: "<value>",
  source: "aggregator",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `connectionId`                                                                               | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `iban`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `currency`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `ownerName`                                                                                  | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `status`                                                                                     | [operations.GetV1BankAccountsStatus](../../models/operations/get-v1-bank-accounts-status.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `consentExpiresAt`                                                                           | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `source`                                                                                     | *"aggregator"*                                                                               | :heavy_check_mark:                                                                           | N/A                                                                                          |