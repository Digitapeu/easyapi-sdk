# GetV1StatsEcbResponseBody

Success

## Example Usage

```typescript
import { GetV1StatsEcbResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsEcbResponseBody = {
  data: {
    dataset: "BSI",
    series: [],
    source: "<value>",
    sourceUrl: "https://calculating-handle.net",
    licence: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.GetV1StatsEcbData](../../models/operations/get-v1-stats-ecb-data.md) | :heavy_check_mark:                                                               | N/A                                                                              |