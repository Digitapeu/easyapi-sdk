# GetV1LegislationBillsIdStagesResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationBillsIdStagesResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsIdStagesResponseBody = {
  data: {
    items: [
      {
        seq: 328237,
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
        sourceKind: "cdep",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                             | [operations.GetV1LegislationBillsIdStagesData](../../models/operations/get-v1-legislation-bills-id-stages-data.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |