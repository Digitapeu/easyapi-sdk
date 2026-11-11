# GetV1CompanyCuiLeiData

## Example Usage

```typescript
import { GetV1CompanyCuiLeiData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLeiData = {
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
  sourceUrl: "https://brown-elevation.net",
  licence: "<value>",
  goldenCopyPublishedAt: "<value>",
  checkedAt: new Date("2025-02-24T04:09:51.218Z"),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `company`                                                                                         | [operations.GetV1CompanyCuiLeiCompany](../../models/operations/get-v1-company-cui-lei-company.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `queried`                                                                                         | [operations.GetV1CompanyCuiLeiQueried](../../models/operations/get-v1-company-cui-lei-queried.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `records`                                                                                         | [operations.RecordT](../../models/operations/record-t.md)[]                                       | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `ambiguous`                                                                                       | *boolean*                                                                                         | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `source`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `sourceUrl`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `licence`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `goldenCopyPublishedAt`                                                                           | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `checkedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_check_mark:                                                                                | N/A                                                                                               |