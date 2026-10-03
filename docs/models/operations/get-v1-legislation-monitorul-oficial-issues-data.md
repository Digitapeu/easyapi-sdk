# GetV1LegislationMonitorulOficialIssuesData

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialIssuesData } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialIssuesData = {
  items: [
    {
      id: "<id>",
      part: 203580,
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
      sourceUrl: "https://next-teammate.info",
      sourceKind: "derived",
      documentVersion: "<value>",
      retrievedAt: new Date("2024-12-18T10:22:54.645Z"),
      contentHash: "<value>",
      coverageNote: "<value>",
    },
  ],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                | [operations.GetV1LegislationMonitorulOficialIssuesItem](../../models/operations/get-v1-legislation-monitorul-oficial-issues-item.md)[] | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `nextCursor`                                                                                                                           | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |