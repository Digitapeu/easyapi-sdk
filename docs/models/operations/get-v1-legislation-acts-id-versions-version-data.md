# GetV1LegislationActsIdVersionsVersionData

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsVersionData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsVersionData = {
  version: "<value>",
  effectiveOn: "<value>",
  amendingAct: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
    reference: "<value>",
  },
  sourceDocumentId: "<id>",
  contentHash: "<value>",
  body: [
    {
      id: "<id>",
      kind: "section",
      label: "<value>",
      heading: "<value>",
      text: "<value>",
      children: [
        "<value 1>",
      ],
    },
  ],
  bodyText: "<value>",
  sourceUrl: "https://bitter-affiliate.com/",
  sourceKind: "cdep",
  documentVersion: "<value>",
  retrievedAt: new Date("2026-05-14T12:58:47.842Z"),
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                                          | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `effectiveOn`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `amendingAct`                                                                                                                                      | [operations.GetV1LegislationActsIdVersionsVersionAmendingAct](../../models/operations/get-v1-legislation-acts-id-versions-version-amending-act.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `sourceDocumentId`                                                                                                                                 | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `contentHash`                                                                                                                                      | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `body`                                                                                                                                             | [operations.GetV1LegislationActsIdVersionsVersionBody](../../models/operations/get-v1-legislation-acts-id-versions-version-body.md)[]              | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `bodyText`                                                                                                                                         | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `sourceUrl`                                                                                                                                        | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `sourceKind`                                                                                                                                       | [operations.GetV1LegislationActsIdVersionsVersionSourceKind](../../models/operations/get-v1-legislation-acts-id-versions-version-source-kind.md)   | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `documentVersion`                                                                                                                                  | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `retrievedAt`                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                      | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |
| `coverageNote`                                                                                                                                     | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |