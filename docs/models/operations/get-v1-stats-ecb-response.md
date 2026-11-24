# GetV1StatsEcbResponse

## Example Usage

```typescript
import { GetV1StatsEcbResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsEcbResponse = {
  headers: {},
  result: {
    data: {
      dataset: "BSI",
      series: [],
      source: "<value>",
      sourceUrl: "https://calculating-handle.net",
      licence: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [operations.GetV1StatsEcbResponseBody](../../models/operations/get-v1-stats-ecb-response-body.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |