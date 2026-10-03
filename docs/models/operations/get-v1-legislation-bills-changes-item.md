# GetV1LegislationBillsChangesItem

## Example Usage

```typescript
import { GetV1LegislationBillsChangesItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsChangesItem = {
  id: "<id>",
  collection: "bills",
  changeType: "updated",
  previousHash: "<value>",
  newHash: "<value>",
  observedAt: new Date("2026-01-15T12:23:54.981Z"),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `collection`                                                                                                                 | [operations.GetV1LegislationBillsChangesCollection](../../models/operations/get-v1-legislation-bills-changes-collection.md)  | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `changeType`                                                                                                                 | [operations.GetV1LegislationBillsChangesChangeType](../../models/operations/get-v1-legislation-bills-changes-change-type.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `previousHash`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `newHash`                                                                                                                    | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `observedAt`                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |