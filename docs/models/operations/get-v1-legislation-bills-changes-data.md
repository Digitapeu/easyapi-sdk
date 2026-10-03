# GetV1LegislationBillsChangesData

## Example Usage

```typescript
import { GetV1LegislationBillsChangesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsChangesData = {
  items: [
    {
      id: "<id>",
      collection: "acts",
      changeType: "removed",
      previousHash: "<value>",
      newHash: "<value>",
      observedAt: new Date("2025-12-02T20:25:33.862Z"),
    },
  ],
  nextCursor: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                           | [operations.GetV1LegislationBillsChangesItem](../../models/operations/get-v1-legislation-bills-changes-item.md)[] | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `nextCursor`                                                                                                      | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |