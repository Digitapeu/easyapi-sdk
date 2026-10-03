# GetV1CompanyCuiLitigationCase

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationCase } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationCase = {
  number: "<value>",
  oldNumber: "<value>",
  date: "2024-05-24",
  modifiedAt: "<value>",
  court: "<value>",
  department: "<value>",
  category: null,
  stage: "<value>",
  subject: "<value>",
  parties: [
    {
      name: "<value>",
      role: "<value>",
    },
  ],
  hearings: [
    {
      date: "2024-10-16",
      time: "<value>",
      solution: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `oldNumber`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `date`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `modifiedAt`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `court`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `department`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `category`                                                                                                             | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `stage`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `subject`                                                                                                              | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `parties`                                                                                                              | [operations.GetV1CompanyCuiLitigationCaseParty](../../models/operations/get-v1-company-cui-litigation-case-party.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `hearings`                                                                                                             | [operations.GetV1CompanyCuiLitigationHearing](../../models/operations/get-v1-company-cui-litigation-hearing.md)[]      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |