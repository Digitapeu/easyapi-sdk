# PostV1CompanyBatchData

## Example Usage

```typescript
import { PostV1CompanyBatchData } from "@digitap/easyapi/models/operations";

let value: PostV1CompanyBatchData = {
  companies: [],
  notFound: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `companies`                                                                                        | [operations.PostV1CompanyBatchCompany](../../models/operations/post-v1-company-batch-company.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `notFound`                                                                                         | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | N/A                                                                                                |