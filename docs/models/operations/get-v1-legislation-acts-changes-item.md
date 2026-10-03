# GetV1LegislationActsChangesItem

## Example Usage

```typescript
import { GetV1LegislationActsChangesItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsChangesItem = {
  id: "<id>",
  collection: "monitorul_oficial",
  changeType: "removed",
  previousHash: "<value>",
  newHash: "<value>",
  observedAt: new Date("2025-05-26T13:07:51.403Z"),
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `collection`                                                                                                               | [operations.GetV1LegislationActsChangesCollection](../../models/operations/get-v1-legislation-acts-changes-collection.md)  | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `changeType`                                                                                                               | [operations.GetV1LegislationActsChangesChangeType](../../models/operations/get-v1-legislation-acts-changes-change-type.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `previousHash`                                                                                                             | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `newHash`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `observedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |