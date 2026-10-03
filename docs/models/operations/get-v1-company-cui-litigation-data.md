# GetV1CompanyCuiLitigationData

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationData = {
  company: {
    cui: "<value>",
    name: "<value>",
  },
  queried: {
    party: "<value>",
  },
  matches: [
    {
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
          },
        ],
      },
      match: {
        confidence: "weak",
        party: {
          name: "<value>",
          role: "<value>",
        },
      },
    },
  ],
  truncated: false,
  source: "<value>",
  criminalMattersExcluded: true,
  checkedAt: new Date("2026-10-01T13:03:01.790Z"),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `company`                                                                                                       | [operations.GetV1CompanyCuiLitigationCompany](../../models/operations/get-v1-company-cui-litigation-company.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `queried`                                                                                                       | [operations.Queried](../../models/operations/queried.md)                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `matches`                                                                                                       | [operations.Match](../../models/operations/match.md)[]                                                          | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `truncated`                                                                                                     | *boolean*                                                                                                       | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `source`                                                                                                        | *string*                                                                                                        | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `criminalMattersExcluded`                                                                                       | *true*                                                                                                          | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `checkedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_check_mark:                                                                                              | N/A                                                                                                             |