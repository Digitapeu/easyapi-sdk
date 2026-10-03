# Checks

## Example Usage

```typescript
import { Checks } from "@digitap/easyapi/models/operations";

let value: Checks = {
  db: "degraded",
  redis: "degraded",
  anaf: "ok",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `db`                                                 | [operations.Db](../../models/operations/db.md)       | :heavy_check_mark:                                   | N/A                                                  |
| `redis`                                              | [operations.Redis](../../models/operations/redis.md) | :heavy_check_mark:                                   | N/A                                                  |
| `anaf`                                               | [operations.Anaf](../../models/operations/anaf.md)   | :heavy_check_mark:                                   | N/A                                                  |