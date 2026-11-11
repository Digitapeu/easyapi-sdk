# GetV1CompanyCuiLeiResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiLeiResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLeiResponseBody = {
  data: {
    company: {
      cui: "<value>",
      name: "<value>",
      registrationNumber: "<value>",
    },
    queried: {
      identifiers: [],
    },
    records: [],
    ambiguous: false,
    source: "<value>",
    sourceUrl: "https://infamous-thread.com",
    licence: "<value>",
    goldenCopyPublishedAt: "<value>",
    checkedAt: new Date("2025-12-20T21:20:00.355Z"),
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `data`                                                                                      | [operations.GetV1CompanyCuiLeiData](../../models/operations/get-v1-company-cui-lei-data.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |