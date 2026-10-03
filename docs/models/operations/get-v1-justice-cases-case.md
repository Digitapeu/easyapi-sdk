# GetV1JusticeCasesCase

## Example Usage

```typescript
import { GetV1JusticeCasesCase } from "@digitap/easyapi/models/operations";

let value: GetV1JusticeCasesCase = {
  number: "<value>",
  oldNumber: "<value>",
  date: "2024-05-04",
  modifiedAt: "<value>",
  court: null,
  department: "<value>",
  category: "<value>",
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
      date: "2024-01-28",
      time: "<value>",
      solution: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `number`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `oldNumber`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `date`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `modifiedAt`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `court`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `department`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `category`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `stage`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `subject`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `parties`                                                                                        | [operations.GetV1JusticeCasesParty](../../models/operations/get-v1-justice-cases-party.md)[]     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `hearings`                                                                                       | [operations.GetV1JusticeCasesHearing](../../models/operations/get-v1-justice-cases-hearing.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |