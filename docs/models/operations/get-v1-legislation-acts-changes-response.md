# GetV1LegislationActsChangesResponse

## Example Usage

```typescript
import { GetV1LegislationActsChangesResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsChangesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key2": [],
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

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                      | Record<string, *string*[]>                                                                                                     | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |
| `result`                                                                                                                       | [operations.GetV1LegislationActsChangesResponseBody](../../models/operations/get-v1-legislation-acts-changes-response-body.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |