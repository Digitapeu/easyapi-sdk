# GetV1FinancialInstitutionsData

## Example Usage

```typescript
import { GetV1FinancialInstitutionsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1FinancialInstitutionsData = {
  listDate: "<value>",
  count: 149035,
  institutions: [],
  source: "<value>",
  sourceUrl: "https://rusty-sonata.info",
  licence: "<value>",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `listDate`                                                                                                                 | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `count`                                                                                                                    | *number*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `institutions`                                                                                                             | [operations.GetV1FinancialInstitutionsInstitution](../../models/operations/get-v1-financial-institutions-institution.md)[] | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `source`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `sourceUrl`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `licence`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |