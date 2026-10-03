# GetV1LegislationMonitorulOficialActsIdResponse

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialActsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialActsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: "<id>",
      type: "<value>",
      title: "<value>",
      issuer: null,
      issue: {
        id: "<id>",
        part: 550631,
        number: "<value>",
        issuedOn: "<value>",
      },
      consolidatedAct: {
        id: "<id>",
        status: "resolved",
        reason: "<value>",
      },
      sourceUrl: "https://made-up-slime.name/",
      sourceKind: "derived",
      documentVersion: "<value>",
      retrievedAt: new Date("2026-03-07T12:25:31.285Z"),
      contentHash: "<value>",
      coverageNote: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                              | Record<string, *string*[]>                                                                                                                             | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |
| `result`                                                                                                                                               | [operations.GetV1LegislationMonitorulOficialActsIdResponseBody](../../models/operations/get-v1-legislation-monitorul-oficial-acts-id-response-body.md) | :heavy_check_mark:                                                                                                                                     | N/A                                                                                                                                                    |