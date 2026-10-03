# GetV1LegislationBillsIdResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationBillsIdResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsIdResponseBody = {
  data: {
    id: "<id>",
    chamberFirst: "cdep",
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
      "<value 3>",
    ],
    currentStage: "<value>",
    status: "<value>",
    registeredOn: "<value>",
    lastActivityOn: "<value>",
    amends: [
      {
        id: "<id>",
        status: "resolved",
        reason: null,
        reference: "<value>",
      },
    ],
    moReference: {
      part: null,
      number: "<value>",
      issuedOn: "<value>",
      link: {
        id: null,
        status: "unresolved",
        reason: "<value>",
      },
    },
    sourceUrl: "https://frequent-airport.info/",
    sourceKind: "cdep",
    documentVersion: "<value>",
    retrievedAt: new Date("2025-02-15T05:06:06.179Z"),
    contentHash: "<value>",
    coverageNote: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `data`                                                                                                | [operations.GetV1LegislationBillsIdData](../../models/operations/get-v1-legislation-bills-id-data.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |