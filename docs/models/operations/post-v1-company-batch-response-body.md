# PostV1CompanyBatchResponseBody

Success

## Example Usage

```typescript
import { PostV1CompanyBatchResponseBody } from "@digitap/easyapi/models/operations";

let value: PostV1CompanyBatchResponseBody = {
  data: {
    companies: [
      {
        cui: "<value>",
        name: "<value>",
        registrationNumber: "<value>",
        address: {},
        vat: {
          vatActive: true,
          vatOnPayment: true,
          vatNumber: "<value>",
        },
        active: false,
        checkedAt: new Date("2026-08-02T17:02:37.472Z"),
      },
    ],
    notFound: [],
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [operations.PostV1CompanyBatchData](../../models/operations/post-v1-company-batch-data.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |