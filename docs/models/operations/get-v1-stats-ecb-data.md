# GetV1StatsEcbData

## Example Usage

```typescript
import { GetV1StatsEcbData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsEcbData = {
  dataset: "BSI",
  series: [],
  source: "<value>",
  sourceUrl: "https://linear-bar.info/",
  licence: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `dataset`                                                                 | [operations.DatasetResponse](../../models/operations/dataset-response.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `series`                                                                  | [operations.Series](../../models/operations/series.md)[]                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `source`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `sourceUrl`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `licence`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |