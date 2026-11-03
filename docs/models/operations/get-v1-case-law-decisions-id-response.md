# GetV1CaseLawDecisionsIdResponse

## Example Usage

```typescript
import { GetV1CaseLawDecisionsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CaseLawDecisionsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: "<id>",
      list: "ccr_admissions",
      court: "ccr",
      kind: "ril",
      matter: "civil",
      number: "<value>",
      pronouncedOn: "<value>",
      moReference: "<value>",
      actId: "<id>",
      sourceUrl: "https://delicious-king.name/",
      firstSeenAt: new Date("2025-07-07T00:57:35.107Z"),
      fetchedAt: new Date("2025-06-30T16:26:25.295Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                               | Record<string, *string*[]>                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `result`                                                                                                                | [operations.GetV1CaseLawDecisionsIdResponseBody](../../models/operations/get-v1-case-law-decisions-id-response-body.md) | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |