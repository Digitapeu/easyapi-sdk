# GetV1ConnectionsIdData

## Example Usage

```typescript
import { GetV1ConnectionsIdData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1ConnectionsIdData = {
  id: "6fe7c1dd-4480-4b12-ae59-d483a5004e29",
  cui: "<value>",
  service: "etransport",
  status: "pending",
  expiresAt: new Date("2026-03-08T14:12:07.771Z"),
  lastRefreshedAt: new Date("2024-12-16T04:33:27.508Z"),
  createdAt: new Date("2024-06-03T03:16:00.172Z"),
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cui`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `service`                                                                                        | [operations.GetV1ConnectionsIdService](../../models/operations/get-v1-connections-id-service.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [operations.GetV1ConnectionsIdStatus](../../models/operations/get-v1-connections-id-status.md)   | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `expiresAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `lastRefreshedAt`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |