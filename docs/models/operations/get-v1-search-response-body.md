# GetV1SearchResponseBody

Success

## Example Usage

```typescript
import { GetV1SearchResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1SearchResponseBody = {
  data: {
    results: [],
    count: 105356,
    source: "demoanaf",
    naturalPersonsExcluded: true,
    checkedAt: new Date("2024-08-15T06:35:46.022Z"),
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [operations.GetV1SearchData](../../models/operations/get-v1-search-data.md) | :heavy_check_mark:                                                          | N/A                                                                         |