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
  },
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                            | Record<string, *string*[]>                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `result`                                                                                                                                             | [operations.GetV1LegislationActsIdVersionsVersionResponseBody](../../models/operations/get-v1-legislation-acts-id-versions-version-response-body.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |