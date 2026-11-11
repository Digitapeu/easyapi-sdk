# GetV1CompanyCuiLitigationSameNameChecked

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationSameNameChecked } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationSameNameChecked = {
  status: "checked",
  count: 706625,
  listed: false,
  companies: [
    {
      cui: "<value>",
      name: "<value>",
      county: "Cheshire",
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
| `companies`                                                                                                                         | [operations.GetV1CompanyCuiLitigationSameNameCompany](../../models/operations/get-v1-company-cui-litigation-same-name-company.md)[] | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |