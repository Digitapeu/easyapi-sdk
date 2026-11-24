# GetV1FinancialInstitutionsPaymentResponse

## Example Usage

```typescript
import { GetV1FinancialInstitutionsPaymentResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsPaymentResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      publishedAt: "<value>",
      checkedAt: "<value>",
      fileSha256: "<value>",
      count: 262206,
      institutions: [],
      source: "<value>",
      sourceUrl: "https://squiggly-farmer.name/",
      licence: "<value>",
      disclaimer: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                  | Record<string, *string*[]>                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `result`                                                                                                                                   | [operations.GetV1FinancialInstitutionsPaymentResponseBody](../../models/operations/get-v1-financial-institutions-payment-response-body.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |