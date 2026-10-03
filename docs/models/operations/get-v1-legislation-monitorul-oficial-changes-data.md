# GetV1LegislationMonitorulOficialChangesData

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialChangesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialChangesData = {
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
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                  | [operations.GetV1LegislationMonitorulOficialChangesItem](../../models/operations/get-v1-legislation-monitorul-oficial-changes-item.md)[] | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `nextCursor`                                                                                                                             | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |