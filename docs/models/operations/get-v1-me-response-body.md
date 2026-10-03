# GetV1MeResponseBody

Success

## Example Usage

```typescript
import { GetV1MeResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1MeResponseBody = {
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
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [operations.GetV1MeData](../../models/operations/get-v1-me-data.md) | :heavy_check_mark:                                                  | N/A                                                                 |