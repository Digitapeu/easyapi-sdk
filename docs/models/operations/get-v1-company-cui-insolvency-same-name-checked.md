# GetV1CompanyCuiInsolvencySameNameChecked

## Example Usage

```typescript
import { GetV1CompanyCuiInsolvencySameNameChecked } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiInsolvencySameNameChecked = {
  status: "checked",
  count: 614146,
  listed: true,
  companies: [
    {
      cui: "<value>",
      name: "<value>",
      county: "Gloucestershire",
      status: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                            | *"checked"*                                                                                                                         | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `count`                                                                                                                             | *number*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `listed`                                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `companies`                                                                                                                         | [operations.GetV1CompanyCuiInsolvencySameNameCompany](../../models/operations/get-v1-company-cui-insolvency-same-name-company.md)[] | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |