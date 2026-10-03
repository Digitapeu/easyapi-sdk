# DeleteV1ConnectionsIdResponse

## Example Usage

```typescript
import { DeleteV1ConnectionsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: DeleteV1ConnectionsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: "d5e8b215-9fe4-4907-b60b-683773fd066b",
      status: "revoked",
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.DeleteV1ConnectionsIdResponseBody](../../models/operations/delete-v1-connections-id-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |