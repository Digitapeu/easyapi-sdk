# GetV1JusticeCasesChangesResponse

## Example Usage

```typescript
import { GetV1JusticeCasesChangesResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCasesChangesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                | Record<string, *string*[]>                                                                                               | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `result`                                                                                                                 | [operations.GetV1JusticeCasesChangesResponseBody](../../models/operations/get-v1-justice-cases-changes-response-body.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |