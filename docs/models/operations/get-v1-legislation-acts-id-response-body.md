# GetV1LegislationActsIdResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationActsIdResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdResponseBody = {
  data: {
    id: "<id>",
    type: "<value>",
    number: "<value>",
    year: 659792,
    title: "<value>",
    issuer: "visa",
    moReference: {
      part: 829214,
      number: null,
      issuedOn: "<value>",
      link: {
        id: "<id>",
        status: "unresolved",
        reason: "<value>",
      },
    },
    inForceOn: "<value>",
    currentVersion: "<value>",
    sourceUrl: "https://rectangular-elver.info/",
    sourceKind: "portal_legislativ",
    documentVersion: "<value>",
    retrievedAt: new Date("2024-06-20T12:53:38.301Z"),
    contentHash: "<value>",
    coverageNote: "<value>",
    body: [],
    bodyText: "<value>",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `data`                                                                                              | [operations.GetV1LegislationActsIdData](../../models/operations/get-v1-legislation-acts-id-data.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |