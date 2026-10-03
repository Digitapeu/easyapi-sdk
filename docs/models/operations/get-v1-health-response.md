# GetV1HealthResponse

## Example Usage

```typescript
import { GetV1HealthResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1HealthResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      status: "degraded",
      checks: {
        db: "down",
        redis: "ok",
        anaf: "down",
      },
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `headers`                                                                                    | Record<string, *string*[]>                                                                   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `result`                                                                                     | [operations.GetV1HealthResponseBody](../../models/operations/get-v1-health-response-body.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |