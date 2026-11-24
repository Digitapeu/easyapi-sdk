# Series

## Example Usage

```typescript
import { Series } from "@digitap.eu/easyapi/models/operations";

let value: Series = {
  key: "<key>",
  title: "<value>",
  titleComplete: "<value>",
  unit: "mole",
  unitMultiplier: 133757,
  frequency: "<value>",
  observations: [
    {
      period: "<value>",
      value: 8032.63,
      status: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `key`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `title`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `titleComplete`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `unit`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `unitMultiplier`                                                                                 | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `frequency`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `observations`                                                                                   | [operations.GetV1StatsEcbObservation](../../models/operations/get-v1-stats-ecb-observation.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |