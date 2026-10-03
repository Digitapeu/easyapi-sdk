# GetV1HealthData

## Example Usage

```typescript
import { GetV1HealthData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1HealthData = {
  status: "ok",
  checks: {
    db: "down",
    redis: "ok",
    anaf: "down",
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `status`                                                                        | [operations.GetV1HealthStatus](../../models/operations/get-v1-health-status.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `checks`                                                                        | [operations.Checks](../../models/operations/checks.md)                          | :heavy_check_mark:                                                              | N/A                                                                             |