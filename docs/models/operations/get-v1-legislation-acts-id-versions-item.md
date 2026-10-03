# GetV1LegislationActsIdVersionsItem

## Example Usage

```typescript
import { GetV1LegislationActsIdVersionsItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsIdVersionsItem = {
  version: "<value>",
  effectiveOn: "<value>",
  amendingAct: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
    reference: null,
  },
  sourceDocumentId: "<id>",
  contentHash: "<value>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `version`                                                                                                                           | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `effectiveOn`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `amendingAct`                                                                                                                       | [operations.GetV1LegislationActsIdVersionsAmendingAct](../../models/operations/get-v1-legislation-acts-id-versions-amending-act.md) | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `sourceDocumentId`                                                                                                                  | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |
| `contentHash`                                                                                                                       | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | N/A                                                                                                                                 |