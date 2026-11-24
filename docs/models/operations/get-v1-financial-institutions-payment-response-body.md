# GetV1FinancialInstitutionsPaymentResponseBody

Success

## Example Usage

```typescript
import { GetV1FinancialInstitutionsPaymentResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsPaymentResponseBody = {
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
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                    | [operations.GetV1FinancialInstitutionsPaymentData](../../models/operations/get-v1-financial-institutions-payment-data.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |