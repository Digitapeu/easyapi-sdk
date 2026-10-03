# GetV1LegislationMonitorulOficialActsIdResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialActsIdResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialActsIdResponseBody = {
  data: {
    id: "<id>",
    type: "<value>",
    title: "<value>",
    issuer: null,
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
    sourceUrl: "https://made-up-slime.name/",
    sourceKind: "derived",
    documentVersion: "<value>",
    retrievedAt: new Date("2026-03-07T12:25:31.285Z"),
    contentHash: "<value>",
    coverageNote: "<value>",
  },
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                | [operations.GetV1LegislationMonitorulOficialActsIdData](../../models/operations/get-v1-legislation-monitorul-oficial-acts-id-data.md) | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |