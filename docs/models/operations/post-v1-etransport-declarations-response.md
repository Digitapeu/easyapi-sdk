# PostV1EtransportDeclarationsResponse

## Example Usage

```typescript
import { PostV1EtransportDeclarationsResponse } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EtransportDeclarationsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      id: "<id>",
      uit: "<value>",
      status: "<value>",
      createdAt: new Date("2025-10-16T19:49:29.949Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                       | Record<string, *string*[]>                                                                                                      | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |
| `result`                                                                                                                        | [operations.PostV1EtransportDeclarationsResponseBody](../../models/operations/post-v1-etransport-declarations-response-body.md) | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             |