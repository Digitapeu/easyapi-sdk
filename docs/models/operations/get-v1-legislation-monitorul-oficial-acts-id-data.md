# GetV1LegislationMonitorulOficialActsIdData

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialActsIdData } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialActsIdData = {
  id: "<id>",
  type: "<value>",
  title: "<value>",
  issuer: "visa",
  issue: {
    id: "<id>",
    part: 550631,
    number: "<value>",
    issuedOn: "<value>",
  },
  consolidatedAct: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
  },
  sourceUrl: "https://tired-label.biz",
  sourceKind: "derived",
  documentVersion: "<value>",
  retrievedAt: new Date("2026-10-31T18:38:07.581Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `title`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issuer`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issue`                                                                                       | [operations.Issue](../../models/operations/issue.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `consolidatedAct`                                                                             | [operations.ConsolidatedAct](../../models/operations/consolidated-act.md)                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceKind`                                                                                  | *"derived"*                                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `documentVersion`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `retrievedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contentHash`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `coverageNote`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |