# GetV1SpvMessagesResponse

## Example Usage

```typescript
import { GetV1SpvMessagesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1SpvMessagesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      messages: [],
      serial: "<value>",
      cui: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                               | Record<string, *string*[]>                                                                              | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `result`                                                                                                | [operations.GetV1SpvMessagesResponseBody](../../models/operations/get-v1-spv-messages-response-body.md) | :heavy_check_mark:                                                                                      | N/A                                                                                                     |