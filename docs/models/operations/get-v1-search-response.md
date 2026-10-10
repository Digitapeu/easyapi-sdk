# GetV1SearchResponse

## Example Usage

```typescript
import { GetV1SearchResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1SearchResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      results: [],
      count: 105356,
      source: "demoanaf",
      naturalPersonsExcluded: true,
      checkedAt: new Date("2024-08-15T06:35:46.022Z"),
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [operations.GetV1SearchResponseBody](../../models/operations/get-v1-search-response-body.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |