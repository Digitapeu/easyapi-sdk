# PostV1ConnectionsRequest

## Example Usage

```typescript
import { PostV1ConnectionsRequest } from "@digitap.eu/easyapi/models/operations";

let value: PostV1ConnectionsRequest = {
  body: {
    cui: "<value>",
    service: "efactura",
    redirectUri: "https://jumbo-hydrant.info/",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                 | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Replays the first response for the same key, body and route (24h); a different body under the same key is a 409. |
| `body`                                                                                                           | [operations.PostV1ConnectionsRequestBody](../../models/operations/post-v1-connections-request-body.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |