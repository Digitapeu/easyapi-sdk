# GetV1LegislationActsIdVersionsItem

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsItem } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsItem = {
  version: "<value>",
  kind: "base",
  effectiveOn: "<value>",
  amendingAct: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
    reference: "<value>",
  },
  sourceDocumentId: "<id>",
  contentHash: "<value>",
  stored: false,
  coverageNote: null,
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                           | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `kind`                                                                                                                              | [operations.GetV1LegislationActsIdVersionsKind](../../models/operations/get-v1-legislation-acts-id-versions-kind.md)                | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `effectiveOn`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `amendingAct`                                                                                                                       | [operations.GetV1LegislationActsIdVersionsAmendingAct](../../models/operations/get-v1-legislation-acts-id-versions-amending-act.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `sourceDocumentId`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `contentHash`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `stored`                                                                                                                            | *boolean*                                                                                                                           | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `coverageNote`                                                                                                                      | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |