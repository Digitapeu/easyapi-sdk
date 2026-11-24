# GetV1RatesMoneyMarketRequest

## Example Usage

```typescript
import { GetV1RatesMoneyMarketRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1RatesMoneyMarketRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `from`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | First month, YYYY-MM. Omit for 11 months before the end month.                  |
| `to`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | Last month, YYYY-MM. Omit or pass a later month for the latest month with data. |