# GetV1LegislationActsIdVersionsVersionResponse

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsVersionResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsVersionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                            | Record<string, *string*[]>                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `result`                                                                                                                                             | [operations.GetV1LegislationActsIdVersionsVersionResponseBody](../../models/operations/get-v1-legislation-acts-id-versions-version-response-body.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |