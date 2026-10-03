# GetV1LegislationMonitorulOficialChangesResponse

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialChangesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialChangesResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: {
      items: [
        {
          id: "<id>",
          collection: "monitorul_oficial",
          changeType: "updated",
          previousHash: "<value>",
          newHash: "<value>",
          observedAt: new Date("2026-10-03T04:08:25.834Z"),
        },
      ],
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                               | Record<string, *string*[]>                                                                                                                              | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |
| `result`                                                                                                                                                | [operations.GetV1LegislationMonitorulOficialChangesResponseBody](../../models/operations/get-v1-legislation-monitorul-oficial-changes-response-body.md) | :heavy_check_mark:                                                                                                                                      | N/A                                                                                                                                                     |