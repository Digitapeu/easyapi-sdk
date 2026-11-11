# GetV1CompanyCuiInsolvencyData

## Example Usage

```typescript
import { GetV1CompanyCuiInsolvencyData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiInsolvencyData = {
  company: {
    cui: "<value>",
    name: "<value>",
  },
  queried: {
    party: "<value>",
  },
  sameName: {
    status: "skipped",
  },
  summary: {
    asDebtor: 837116,
    asCreditor: 49103,
    asPractitioner: 765269,
    other: 904777,
  },
  cases: [],
  complete: false,
  completenessNote:
    "Derived from ECRIS court cases matched by company name. BPI (Buletinul Procedurilor de Insolventa) is the register of record and is not consulted.",
  truncated: false,
  source: "<value>",
  criminalMattersExcluded: true,
  checkedAt: new Date("2025-11-15T06:40:18.964Z"),
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `company`                                                                                                                                              | [operations.GetV1CompanyCuiInsolvencyCompany](../../models/operations/get-v1-company-cui-insolvency-company.md)                                        | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `queried`                                                                                                                                              | [operations.GetV1CompanyCuiInsolvencyQueried](../../models/operations/get-v1-company-cui-insolvency-queried.md)                                        | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `sameName`                                                                                                                                             | *operations.GetV1CompanyCuiInsolvencySameNameUnion*                                                                                                    | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `summary`                                                                                                                                              | [operations.GetV1CompanyCuiInsolvencySummary](../../models/operations/get-v1-company-cui-insolvency-summary.md)                                        | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `cases`                                                                                                                                                | [operations.GetV1CompanyCuiInsolvencyCase](../../models/operations/get-v1-company-cui-insolvency-case.md)[]                                            | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `complete`                                                                                                                                             | *false*                                                                                                                                                | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `completenessNote`                                                                                                                                     | *"Derived from ECRIS court cases matched by company name. BPI (Buletinul Procedurilor de Insolventa) is the register of record and is not consulted."* | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `truncated`                                                                                                                                            | *boolean*                                                                                                                                              | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `source`                                                                                                                                               | *string*                                                                                                                                               | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `criminalMattersExcluded`                                                                                                                              | *true*                                                                                                                                                 | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `checkedAt`                                                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                          | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |