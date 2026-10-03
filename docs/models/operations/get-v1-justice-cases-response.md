# GetV1JusticeCasesResponse

## Example Usage

```typescript
import { GetV1JusticeCasesResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCasesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      cases: [],
      count: 298896,
      truncated: false,
      source: "<value>",
      criminalMattersExcluded: true,
      checkedAt: new Date("2026-02-01T13:35:40.193Z"),
    },
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                 | Record<string, *string*[]>                                                                                | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `result`                                                                                                  | [operations.GetV1JusticeCasesResponseBody](../../models/operations/get-v1-justice-cases-response-body.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |