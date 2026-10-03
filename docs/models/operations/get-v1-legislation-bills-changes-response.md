# GetV1LegislationBillsChangesResponse

## Example Usage

```typescript
import { GetV1LegislationBillsChangesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsChangesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      items: [],
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                        | Record<string, *string*[]>                                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `result`                                                                                                                         | [operations.GetV1LegislationBillsChangesResponseBody](../../models/operations/get-v1-legislation-bills-changes-response-body.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |