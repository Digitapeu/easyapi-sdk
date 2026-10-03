# GetV1LegislationActsIdData

## Example Usage

```typescript
import { GetV1LegislationActsIdData } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsIdData = {
  id: "<id>",
  type: "<value>",
  number: "<value>",
  year: 728187,
  title: "<value>",
  issuer: "visa",
  moReference: {
    part: 829214,
    number: null,
    issuedOn: "<value>",
    link: {
      id: "<id>",
      status: "unresolved",
      reason: "<value>",
    },
  },
  inForceOn: "<value>",
  currentVersion: null,
  sourceUrl: "https://early-baseboard.org",
  sourceKind: "cdep",
  documentVersion: "<value>",
  retrievedAt: new Date("2026-08-07T01:04:23.442Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
  body: [],
  bodyText: "<value>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `number`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `year`                                                                                                             | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `title`                                                                                                            | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `issuer`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `moReference`                                                                                                      | [operations.GetV1LegislationActsIdMoReference](../../models/operations/get-v1-legislation-acts-id-mo-reference.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `inForceOn`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `currentVersion`                                                                                                   | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sourceUrl`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `sourceKind`                                                                                                       | [operations.GetV1LegislationActsIdSourceKind](../../models/operations/get-v1-legislation-acts-id-source-kind.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `documentVersion`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `retrievedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `contentHash`                                                                                                      | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `coverageNote`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `body`                                                                                                             | [operations.GetV1LegislationActsIdBody](../../models/operations/get-v1-legislation-acts-id-body.md)[]              | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `bodyText`                                                                                                         | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |