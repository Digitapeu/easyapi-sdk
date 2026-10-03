# Connection

## Example Usage

```typescript
import { Connection } from "@digitap/easyapi/models/operations";

let value: Connection = {
  id: "654c9c3a-526d-4e3e-b9bf-4c9c84516453",
  cui: "<value>",
  service: "reges",
  status: "revoked",
  expiresAt: new Date("2025-04-02T11:39:42.249Z"),
  lastRefreshedAt: new Date("2026-10-04T02:04:00.617Z"),
  createdAt: new Date("2026-05-13T01:53:28.113Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `cui`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `service`                                                                                     | [operations.GetV1ConnectionsService](../../models/operations/get-v1-connections-service.md)   | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [operations.GetV1ConnectionsStatus](../../models/operations/get-v1-connections-status.md)     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastRefreshedAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |