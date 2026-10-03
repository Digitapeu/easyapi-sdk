# GetV1StatsMatrixResponseBody

Success

## Example Usage

```typescript
import { GetV1StatsMatrixResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsMatrixResponseBody = {
  data: {
    matrix: "<value>",
    name: null,
    periods: [
      "<value 1>",
    ],
    source: "ins-tempo",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [operations.GetV1StatsMatrixData](../../models/operations/get-v1-stats-matrix-data.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |