# PostV1ConnectionsResponse

## Example Usage

```typescript
import { PostV1ConnectionsResponse } from "@digitap/easyapi/models/operations";

let value: PostV1ConnectionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [],
  },
  result: {
    data: {
      sessionId: "<id>",
      connectUrl: "https://dazzling-tennis.com",
      expiresAt: new Date("2025-02-24T16:18:22.964Z"),
    },
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.PostV1ConnectionsResponseBody](../../models/operations/post-v1-connections-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |