# GetV1EtransportDeclarationsUitResponseBody

Success

## Example Usage

```typescript
import { GetV1EtransportDeclarationsUitResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1EtransportDeclarationsUitResponseBody = {
  data: {
    id: "<id>",
    uit: "<value>",
    status: "<value>",
    detail: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    checkedAt: new Date("2025-08-30T01:35:26.471Z"),
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                              | [operations.GetV1EtransportDeclarationsUitData](../../models/operations/get-v1-etransport-declarations-uit-data.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |