# PostV1CompanyBatchResponse

## Example Usage

```typescript
import { PostV1CompanyBatchResponse } from "@digitap.eu/easyapi/models/operations";

let value: PostV1CompanyBatchResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [operations.PostV1CompanyBatchResponseBody](../../models/operations/post-v1-company-batch-response-body.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |