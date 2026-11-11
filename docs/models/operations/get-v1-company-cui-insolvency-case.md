# GetV1CompanyCuiInsolvencyCase

## Example Usage

```typescript
import { GetV1CompanyCuiInsolvencyCase } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiInsolvencyCase = {
  number: "<value>",
  court: "<value>",
  category: "<value>",
  stage: "<value>",
  subject: "<value>",
  modifiedAt: "<value>",
  firmRole: "debtor",
  partyRole: "<value>",
  matchConfidence: "weak",
  latestHearing: {
    date: "2024-09-04",
    solution: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `number`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `court`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `category`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `stage`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `subject`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `modifiedAt`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `firmRole`                                                                | [operations.FirmRole](../../models/operations/firm-role.md)               | :heavy_check_mark:                                                        | N/A                                                                       |
| `partyRole`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `matchConfidence`                                                         | [operations.MatchConfidence](../../models/operations/match-confidence.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `latestHearing`                                                           | [operations.LatestHearing](../../models/operations/latest-hearing.md)     | :heavy_check_mark:                                                        | N/A                                                                       |