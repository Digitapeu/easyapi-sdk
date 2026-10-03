# GetV1MeResponse

## Example Usage

```typescript
import { GetV1MeResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1MeResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    data: {
      businessId: "fe5f7445-9a42-4ceb-a03a-4aeab44934e1",
      businessName: "<value>",
      tier: {
        code: "<value>",
        nameRo: "<value>",
        nameEn: "<value>",
        rateLimitPerMin: 829834,
        includedConnections: 724075,
      },
      scopes: [],
      limits: {
        rateLimitPerMin: 887531,
      },
      authentication: {
        method: "api_key",
        keyId: "117b1bc5-8ece-49bd-899f-c8a9097fe285",
      },
    },
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `headers`                                                                            | Record<string, *string*[]>                                                           | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `result`                                                                             | [operations.GetV1MeResponseBody](../../models/operations/get-v1-me-response-body.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |