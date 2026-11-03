# GetV1CaseLawDecisionsResponseBody

Success

## Example Usage

```typescript
import { GetV1CaseLawDecisionsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CaseLawDecisionsResponseBody = {
  data: {
    items: [
      {
        id: "<id>",
        list: "ccr_admissions",
        court: "iccj",
        kind: "hp",
        matter: "penal",
        number: "<value>",
        pronouncedOn: "<value>",
        moReference: "<value>",
        actId: "<id>",
        sourceUrl: "https://glorious-attraction.biz/",
        firstSeenAt: new Date("2026-04-24T17:34:07.720Z"),
        fetchedAt: new Date("2026-04-09T18:58:03.323Z"),
      },
    ],
    nextCursor: "<value>",
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `data`                                                                                            | [operations.GetV1CaseLawDecisionsData](../../models/operations/get-v1-case-law-decisions-data.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |