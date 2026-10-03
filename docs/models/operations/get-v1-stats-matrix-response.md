# GetV1StatsMatrixResponse

## Example Usage

```typescript
import { GetV1StatsMatrixResponse } from "@digitap/easyapi/models/operations";

let value: GetV1StatsMatrixResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      matrix: "<value>",
      name: null,
      periods: [
        "<value 1>",
      ],
      source: "ins-tempo",
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `result`                                                                                                | [operations.GetV1StatsMatrixResponseBody](../../models/operations/get-v1-stats-matrix-response-body.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |