# GetV1SpvMessagesData

## Example Usage

```typescript
import { GetV1SpvMessagesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1SpvMessagesData = {
  messages: [],
  serial: "<value>",
  cui: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `messages`                                                                                     | [operations.GetV1SpvMessagesMessage](../../models/operations/get-v1-spv-messages-message.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `serial`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `cui`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |