# GetV1ConnectionsIdResponseBody

Success

## Example Usage

```typescript
import { GetV1ConnectionsIdResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ConnectionsIdResponseBody = {
  data: {
    id: "0dc9c561-00b4-412b-a181-406b35692ff0",
    cui: "<value>",
    service: "spv",
    status: "active",
    expiresAt: new Date("2026-03-23T23:46:59.787Z"),
    lastRefreshedAt: new Date("2025-05-10T07:55:59.117Z"),
    createdAt: new Date("2026-05-17T22:33:33.882Z"),
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [operations.GetV1ConnectionsIdData](../../models/operations/get-v1-connections-id-data.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |