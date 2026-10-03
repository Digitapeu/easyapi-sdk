# GetV1LegislationBillsData

## Example Usage

```typescript
import { GetV1LegislationBillsData } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsData = {
  items: [
    {
      id: "<id>",
      chamberFirst: "senat",
      registration: {
        plx: "<value>",
        l: "<value>",
        e: "<value>",
        bpi: "<value>",
        senatB: "<value>",
      },
      title: "<value>",
      initiators: [],
      domainTags: [
        "<value 1>",
        "<value 2>",
      ],
      currentStage: "<value>",
      status: "<value>",
      registeredOn: "<value>",
      lastActivityOn: "<value>",
      amends: [
        {
          id: "<id>",
          status: "resolved",
          reason: "<value>",
          reference: "<value>",
        },
      ],
      moReference: {
        part: 586847,
        number: "<value>",
        issuedOn: "<value>",
        link: {
          id: "<id>",
          status: "resolved",
          reason: "<value>",
        },
      },
      sourceUrl: "https://practical-louse.net/",
      sourceKind: "derived",
      documentVersion: "<value>",
      retrievedAt: new Date("2024-06-24T22:48:42.943Z"),
      contentHash: "<value>",
      coverageNote: "<value>",
    },
  ],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `items`                                                                                            | [operations.GetV1LegislationBillsItem](../../models/operations/get-v1-legislation-bills-item.md)[] | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `nextCursor`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |