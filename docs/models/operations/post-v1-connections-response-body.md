# PostV1ConnectionsResponseBody

Success

## Example Usage

```typescript
import { PostV1ConnectionsResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: PostV1ConnectionsResponseBody = {
  data: {
    sessionId: "<id>",
    connectUrl: "https://dazzling-tennis.com",
    expiresAt: new Date("2025-02-24T16:18:22.964Z"),
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `data`                                                                                  | [operations.PostV1ConnectionsData](../../models/operations/post-v1-connections-data.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |