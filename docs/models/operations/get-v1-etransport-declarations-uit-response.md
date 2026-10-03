# GetV1EtransportDeclarationsUitResponse

## Example Usage

```typescript
import { GetV1EtransportDeclarationsUitResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportDeclarationsUitResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                            | Record<string, *string*[]>                                                                                                           | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `result`                                                                                                                             | [operations.GetV1EtransportDeclarationsUitResponseBody](../../models/operations/get-v1-etransport-declarations-uit-response-body.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |