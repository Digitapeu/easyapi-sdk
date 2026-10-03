# GetV1LegislationBillsResponse

## Example Usage

```typescript
import { GetV1LegislationBillsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
    "key2": [],
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

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.GetV1LegislationBillsResponseBody](../../models/operations/get-v1-legislation-bills-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |