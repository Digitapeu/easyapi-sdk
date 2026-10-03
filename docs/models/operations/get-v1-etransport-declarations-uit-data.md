# GetV1EtransportDeclarationsUitData

## Example Usage

```typescript
import { GetV1EtransportDeclarationsUitData } from "@digitap/easyapi/models/operations";

let value: GetV1EtransportDeclarationsUitData = {
  id: "<id>",
  uit: "<value>",
  status: "<value>",
  detail: {
    "key": "<value>",
    "key1": "<value>",
  },
  checkedAt: new Date("2024-03-25T14:06:21.721Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `uit`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `detail`                                                                                      | Record<string, *any*>                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |