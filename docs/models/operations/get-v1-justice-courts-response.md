# GetV1JusticeCourtsResponse

## Example Usage

```typescript
import { GetV1JusticeCourtsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCourtsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      courts: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      count: 588290,
      source: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [operations.GetV1JusticeCourtsResponseBody](../../models/operations/get-v1-justice-courts-response-body.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |