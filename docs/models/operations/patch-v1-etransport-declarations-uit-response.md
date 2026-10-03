# PatchV1EtransportDeclarationsUitResponse

## Example Usage

```typescript
import { PatchV1EtransportDeclarationsUitResponse } from "@digitap.eu/easyapi/models/operations";

let value: PatchV1EtransportDeclarationsUitResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      id: "<id>",
      uit: "<value>",
      status: "<value>",
      createdAt: new Date("2024-04-09T02:48:48.260Z"),
    },
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `result`                                                                                                                                 | [operations.PatchV1EtransportDeclarationsUitResponseBody](../../models/operations/patch-v1-etransport-declarations-uit-response-body.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |