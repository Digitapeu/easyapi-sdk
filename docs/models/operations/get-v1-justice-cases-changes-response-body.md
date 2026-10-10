# GetV1JusticeCasesChangesResponseBody

Success

## Example Usage

```typescript
import { GetV1JusticeCasesChangesResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCasesChangesResponseBody = {
  data: {
    cases: [
      {
        number: "<value>",
        oldNumber: "<value>",
        date: "2024-03-09",
        modifiedAt: "<value>",
        court: "<value>",
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
            date: "2024-03-17",
            time: "<value>",
            solution: "<value>",
            panel: "<value>",
            solutionSummary: "<value>",
            pronouncedAt: "<value>",
            documentType: "<value>",
            documentNumber: "<value>",
            documentDate: "<value>",
          },
        ],
        appeals: [],
      },
    ],
    count: 818600,
    truncated: true,
    source: "<value>",
    criminalMattersExcluded: true,
    checkedAt: new Date("2024-02-11T00:55:42.899Z"),
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                  | [operations.GetV1JusticeCasesChangesData](../../models/operations/get-v1-justice-cases-changes-data.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |