# GetV1LegislationActsIdVersionsVersionResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsVersionResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsVersionResponseBody = {
  data: {
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
    body: [],
    bodyText: "<value>",
    sourceUrl: "https://fussy-pick.biz/",
    sourceKind: "senat",
    documentVersion: "<value>",
    retrievedAt: new Date("2024-05-27T10:41:00.060Z"),
    coverageNote: "<value>",
  },
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                              | [operations.GetV1LegislationActsIdVersionsVersionData](../../models/operations/get-v1-legislation-acts-id-versions-version-data.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |