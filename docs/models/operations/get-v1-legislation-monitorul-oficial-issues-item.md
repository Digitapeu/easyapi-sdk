# GetV1LegislationMonitorulOficialIssuesItem

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialIssuesItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialIssuesItem = {
  id: "<id>",
  part: 763593,
  number: "<value>",
  issuedOn: "<value>",
  acts: [
    {
      actId: {
        id: "<id>",
        status: "resolved",
        reason: "<value>",
      },
      title: "<value>",
      type: "<value>",
    },
  ],
  sourceUrl: "https://hoarse-switchboard.net",
  sourceKind: "derived",
  documentVersion: "<value>",
  retrievedAt: new Date("2025-07-16T20:55:24.791Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `part`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `issuedOn`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `acts`                                                                                        | [operations.Act](../../models/operations/act.md)[]                                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceUrl`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sourceKind`                                                                                  | *"derived"*                                                                                   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `documentVersion`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `retrievedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contentHash`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `coverageNote`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |