# GetV1LegislationActsItem

## Example Usage

```typescript
import { GetV1LegislationActsItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsItem = {
  id: "<id>",
  type: "<value>",
  number: "<value>",
  year: 199946,
  title: "<value>",
  issuer: "mastercard",
  moReference: {
    part: 470860,
    number: "<value>",
    issuedOn: null,
    link: {
      id: "<id>",
      status: "unresolved",
      reason: "<value>",
    },
  },
  inForceOn: "<value>",
  currentVersion: "<value>",
  sourceUrl: "https://superior-mousse.net",
  sourceKind: "cdep",
  documentVersion: "<value>",
  retrievedAt: new Date("2025-02-23T13:46:20.644Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                          | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `type`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `number`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `year`                                                                                                        | *number*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `title`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `issuer`                                                                                                      | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `moReference`                                                                                                 | [operations.GetV1LegislationActsMoReference](../../models/operations/get-v1-legislation-acts-mo-reference.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `inForceOn`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `currentVersion`                                                                                              | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `sourceUrl`                                                                                                   | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `sourceKind`                                                                                                  | [operations.GetV1LegislationActsSourceKind](../../models/operations/get-v1-legislation-acts-source-kind.md)   | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `documentVersion`                                                                                             | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `retrievedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `contentHash`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `coverageNote`                                                                                                | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |