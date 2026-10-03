# GetV1LegislationMonitorulOficialChangesResponseBody

Success

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialChangesResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialChangesResponseBody = {
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
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                 | [operations.GetV1LegislationMonitorulOficialChangesData](../../models/operations/get-v1-legislation-monitorul-oficial-changes-data.md) | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |