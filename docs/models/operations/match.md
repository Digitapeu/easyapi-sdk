# Match

## Example Usage

```typescript
import { Match } from "@digitap.eu/easyapi/models/operations";

let value: Match = {
  case: {
    number: "<value>",
    oldNumber: "<value>",
    date: "2024-09-30",
    modifiedAt: "<value>",
    court: "<value>",
    department: "<value>",
    category: "<value>",
    stage: "<value>",
    subject: "<value>",
    parties: [],
    hearings: [
      {
        date: "2024-10-16",
        time: "<value>",
        solution: "<value>",
        panel: "<value>",
        solutionSummary: "<value>",
        pronouncedAt: "<value>",
        documentType: "<value>",
        documentNumber: "<value>",
        documentDate: null,
      },
    ],
    appeals: [
      {
        filedAt: "<value>",
        filedBy: "<value>",
        type: "<value>",
      },
    ],
  },
  match: {
    confidence: "exact",
    party: {
      name: "<value>",
      role: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `case`                                                                                                    | [operations.GetV1CompanyCuiLitigationCase](../../models/operations/get-v1-company-cui-litigation-case.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `match`                                                                                                   | [operations.MatchMatch](../../models/operations/match-match.md)                                           | :heavy_check_mark:                                                                                        | N/A                                                                                                       |