# GetV1HealthResponseBody

Success

## Example Usage

```typescript
import { GetV1HealthResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1HealthResponseBody = {
  data: {
    status: "degraded",
    checks: {
      db: "down",
      redis: "ok",
      anaf: "down",
    },
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [operations.GetV1HealthData](../../models/operations/get-v1-health-data.md) | :heavy_check_mark:                                                          | N/A                                                                         |