# GetV1CaseLawDecisionsItem

## Example Usage

```typescript
import { GetV1CaseLawDecisionsItem } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CaseLawDecisionsItem = {
  id: "<id>",
  list: "iccj_hp_penal",
  court: "ccr",
  kind: "ccr_admission",
  matter: "caf",
  number: "<value>",
  pronouncedOn: "<value>",
  moReference: "<value>",
  actId: "<id>",
  sourceUrl: "https://shrill-fax.com",
  firstSeenAt: new Date("2026-08-11T20:48:21.063Z"),
  fetchedAt: new Date("2025-07-08T07:12:30.605Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `list`                                                                                                     | [operations.ItemList](../../models/operations/item-list.md)                                                | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `court`                                                                                                    | [operations.ItemCourt](../../models/operations/item-court.md)                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `kind`                                                                                                     | [operations.GetV1CaseLawDecisionsItemKind](../../models/operations/get-v1-case-law-decisions-item-kind.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `matter`                                                                                                   | [operations.ItemMatter](../../models/operations/item-matter.md)                                            | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `number`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pronouncedOn`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `moReference`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actId`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sourceUrl`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `firstSeenAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fetchedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |