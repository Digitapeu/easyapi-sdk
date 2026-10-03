# Payment

## Example Usage

```typescript
import { Payment } from "@digitap.eu/easyapi/models/operations";

let value: Payment = {
  meansCode: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `meansCode`        | *string*           | :heavy_check_mark: | N/A                |
| `iban`             | *string*           | :heavy_minus_sign: | N/A                |
| `accountName`      | *string*           | :heavy_minus_sign: | N/A                |
| `bic`              | *string*           | :heavy_minus_sign: | N/A                |
| `terms`            | *string*           | :heavy_minus_sign: | N/A                |
| `remittanceInfo`   | *string*           | :heavy_minus_sign: | N/A                |