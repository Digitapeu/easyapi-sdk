# GetV1BankIbanIbanResult

## Example Usage

```typescript
import { GetV1BankIbanIbanResult } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankIbanIbanResult = {
  iban: "BE96390075085906",
  valid: true,
  country: "Jamaica",
  checkDigitsValid: true,
  bankCode: "<value>",
  bankName: null,
  accountNumber: null,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `iban`             | *string*           | :heavy_check_mark: | N/A                |
| `valid`            | *boolean*          | :heavy_check_mark: | N/A                |
| `country`          | *string*           | :heavy_check_mark: | N/A                |
| `checkDigitsValid` | *boolean*          | :heavy_check_mark: | N/A                |
| `bankCode`         | *string*           | :heavy_check_mark: | N/A                |
| `bankName`         | *string*           | :heavy_check_mark: | N/A                |
| `accountNumber`    | *string*           | :heavy_check_mark: | N/A                |