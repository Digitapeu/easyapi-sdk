# GetV1ConnectionsIdResponse

## Example Usage

```typescript
import { GetV1ConnectionsIdResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ConnectionsIdResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: "0dc9c561-00b4-412b-a181-406b35692ff0",
      cui: "<value>",
      service: "spv",
      status: "active",
      expiresAt: new Date("2026-03-23T23:46:59.787Z"),
      lastRefreshedAt: new Date("2025-05-10T07:55:59.117Z"),
      createdAt: new Date("2026-05-17T22:33:33.882Z"),
    },
  },
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                   | Record<string, *string*[]>                                                                                  | :heavy_check_mark:                                                                                          | N/A                                                                                                         |
| `result`                                                                                                    | [operations.GetV1ConnectionsIdResponseBody](../../models/operations/get-v1-connections-id-response-body.md) | :heavy_check_mark:                                                                                          | N/A                                                                                                         |