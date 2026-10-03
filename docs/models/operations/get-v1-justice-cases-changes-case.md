# GetV1JusticeCasesChangesCase

## Example Usage

```typescript
import { GetV1JusticeCasesChangesCase } from "@digitap/easyapi/models/operations";

let value: GetV1JusticeCasesChangesCase = {
  number: "<value>",
  oldNumber: "<value>",
  date: "2024-11-05",
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
  hearings: [],
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `number`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `oldNumber`                                                                                                     | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `date`                                                                                                          | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `modifiedAt`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `court`                                                                                                         | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `department`                                                                                                    | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `category`                                                                                                      | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `stage`                                                                                                         | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `subject`                                                                                                       | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `parties`                                                                                                       | [operations.GetV1JusticeCasesChangesParty](../../models/operations/get-v1-justice-cases-changes-party.md)[]     | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `hearings`                                                                                                      | [operations.GetV1JusticeCasesChangesHearing](../../models/operations/get-v1-justice-cases-changes-hearing.md)[] | :heavy_check_mark:                                                                                              | N/A                                                                                                             |