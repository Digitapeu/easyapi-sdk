# GetV1LegislationActsResponse

## Example Usage

```typescript
import { GetV1LegislationActsResponse } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      items: [],
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [operations.GetV1LegislationActsResponseBody](../../models/operations/get-v1-legislation-acts-response-body.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |