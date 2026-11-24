# GetV1StatsEcbRequest

## Example Usage

```typescript
import { GetV1StatsEcbRequest } from "@digitap.eu/easyapi/models/operations";

let value: GetV1StatsEcbRequest = {
  dataset: "IRS",
  key: "<key>",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `dataset`                                                                                                                        | [operations.QueryParamDataset](../../models/operations/query-param-dataset.md)                                                   | :heavy_check_mark:                                                                                                               | ECB dataset: BSI, MIR or IRS.                                                                                                    |
| `key`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Series key without the dataset prefix, e.g. `M.RO.L.L40.CI.0000.RON.N.Z` for IRS. Segment 2 is RO; empty segments are wildcards. |
| `from`                                                                                                                           | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | First period: YYYY, YYYY-Sn, YYYY-Qn, YYYY-MM or YYYY-MM-DD.                                                                     |
| `to`                                                                                                                             | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Last period, same form as `from`.                                                                                                |