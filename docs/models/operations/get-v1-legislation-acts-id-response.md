# GetV1LegislationActsIdResponse

## Example Usage

```typescript
import { GetV1LegislationActsIdResponse } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                            | Record<string, *string*[]>                                                                                           | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `result`                                                                                                             | [operations.GetV1LegislationActsIdResponseBody](../../models/operations/get-v1-legislation-acts-id-response-body.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |