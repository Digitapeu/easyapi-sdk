# PostV1ConnectionsRequestBody

## Example Usage

```typescript
import { PostV1ConnectionsRequestBody } from "@digitap.eu/easyapi/models/operations";

let value: PostV1ConnectionsRequestBody = {
  cui: "<value>",
  service: "spv",
  redirectUri: "https://sparse-harp.info/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cui`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `service`                                                                                     | [operations.PostV1ConnectionsService](../../models/operations/post-v1-connections-service.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `redirectUri`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `institutionId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |