# GetV1LegislationBillsIdStagesItem

## Example Usage

```typescript
import { GetV1LegislationBillsIdStagesItem } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsIdStagesItem = {
  seq: 13133,
  chamber: "cdep",
  stage: "<value>",
  stageOn: "<value>",
  outcome: null,
  committee: "<value>",
  votes: {
    for: 506623,
    against: 631330,
    abstain: 211582,
    notVoting: 745402,
  },
  documentRefs: [
    {
      documentId: "<id>",
      label: "<value>",
      url: "https://that-cassava.biz",
    },
  ],
  contentHash: "<value>",
  sourceKind: "derived",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `seq`                                                                                                                           | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `chamber`                                                                                                                       | [operations.GetV1LegislationBillsIdStagesChamber](../../models/operations/get-v1-legislation-bills-id-stages-chamber.md)        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `stage`                                                                                                                         | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `stageOn`                                                                                                                       | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `outcome`                                                                                                                       | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `committee`                                                                                                                     | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `votes`                                                                                                                         | [operations.Votes](../../models/operations/votes.md)                                                                            | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `documentRefs`                                                                                                                  | [operations.DocumentRef](../../models/operations/document-ref.md)[]                                                             | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `contentHash`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `sourceKind`                                                                                                                    | [operations.GetV1LegislationBillsIdStagesSourceKind](../../models/operations/get-v1-legislation-bills-id-stages-source-kind.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |