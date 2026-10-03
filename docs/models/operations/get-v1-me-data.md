# GetV1MeData

## Example Usage

```typescript
import { GetV1MeData } from "@digitap/easyapi/models/operations";

let value: GetV1MeData = {
  businessId: "a40c29e2-ffc7-42b7-a6dd-ec314dfc3c8f",
  businessName: "<value>",
  tier: {
    code: "<value>",
    nameRo: "<value>",
    nameEn: "<value>",
    rateLimitPerMin: 829834,
    includedConnections: 724075,
  },
  scopes: [
    "connections:write",
  ],
  limits: {
    rateLimitPerMin: 887531,
  },
  authentication: {
    method: "mcp_oauth",
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `businessId`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `businessName`                                         | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `tier`                                                 | [operations.Tier](../../models/operations/tier.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `scopes`                                               | [operations.Scope](../../models/operations/scope.md)[] | :heavy_check_mark:                                     | N/A                                                    |
| `limits`                                               | [operations.Limits](../../models/operations/limits.md) | :heavy_check_mark:                                     | N/A                                                    |
| `authentication`                                       | *operations.Authentication*                            | :heavy_check_mark:                                     | N/A                                                    |