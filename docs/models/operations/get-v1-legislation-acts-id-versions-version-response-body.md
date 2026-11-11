# GetV1LegislationActsIdVersionsVersionResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsVersionResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsVersionResponseBody = {
  data: {
    version: "<value>",
    kind: "consolidation",
    effectiveOn: "<value>",
    amendingAct: {
      id: "<id>",
      status: "unresolved",
      reason: "<value>",
      reference: "<value>",
    },
    sourceDocumentId: "<id>",
    contentHash: "<value>",
    body: [],
    bodyText: "<value>",
    sourceUrl: "https://rapid-conservation.biz/",
    sourceKind: "cdep",
    documentVersion: "<value>",
    retrievedAt: new Date("2026-03-17T20:19:22.731Z"),
    coverageNote: "<value>",
  },
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                              | [operations.GetV1LegislationActsIdVersionsVersionData](../../models/operations/get-v1-legislation-acts-id-versions-version-data.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |