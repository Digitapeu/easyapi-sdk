# GetV1CompanyCuiInsolvencyResponse

## Example Usage

```typescript
import { GetV1CompanyCuiInsolvencyResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiInsolvencyResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      company: {
        cui: "<value>",
        name: "<value>",
      },
      queried: {
        party: "<value>",
      },
      sameName: {
        status: "checked",
        count: 397651,
        listed: true,
        companies: [
          {
            cui: "<value>",
            name: "<value>",
            county: "Gloucestershire",
            status: "<value>",
          },
        ],
      },
      summary: {
        asDebtor: 837116,
        asCreditor: 49103,
        asPractitioner: 765269,
        other: 904777,
      },
      cases: [
        {
          number: "<value>",
          court: "<value>",
          category: "<value>",
          stage: "<value>",
          subject: "<value>",
          modifiedAt: "<value>",
          firmRole: "debtor",
          partyRole: "<value>",
          matchConfidence: "strong",
          latestHearing: null,
        },
      ],
      complete: false,
      completenessNote:
        "Derived from ECRIS court cases matched by company name. BPI (Buletinul Procedurilor de Insolventa) is the register of record and is not consulted.",
      truncated: true,
      source: "<value>",
      criminalMattersExcluded: true,
      checkedAt: new Date("2026-09-14T09:28:56.032Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                  | Record<string, *string*[]>                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `result`                                                                                                                   | [operations.GetV1CompanyCuiInsolvencyResponseBody](../../models/operations/get-v1-company-cui-insolvency-response-body.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |