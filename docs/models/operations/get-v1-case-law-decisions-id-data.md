# GetV1CaseLawDecisionsIdData

## Example Usage

```typescript
import { GetV1CaseLawDecisionsIdData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CaseLawDecisionsIdData = {
  id: "<id>",
  list: "iccj_hp_caf",
  court: "ccr",
  kind: "ccr_admission",
  matter: "penal",
  number: "<value>",
  pronouncedOn: "<value>",
  moReference: "<value>",
  actId: "<id>",
  sourceUrl: "https://unsteady-larva.net",
  firstSeenAt: new Date("2025-08-27T10:11:03.268Z"),
  fetchedAt: new Date("2025-07-05T03:55:58.948Z"),
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `list`                                                                                                     | [operations.GetV1CaseLawDecisionsIdList](../../models/operations/get-v1-case-law-decisions-id-list.md)     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `court`                                                                                                    | [operations.GetV1CaseLawDecisionsIdCourt](../../models/operations/get-v1-case-law-decisions-id-court.md)   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `kind`                                                                                                     | [operations.GetV1CaseLawDecisionsIdKind](../../models/operations/get-v1-case-law-decisions-id-kind.md)     | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `matter`                                                                                                   | [operations.GetV1CaseLawDecisionsIdMatter](../../models/operations/get-v1-case-law-decisions-id-matter.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `number`                                                                                                   | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `pronouncedOn`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `moReference`                                                                                              | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `actId`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `sourceUrl`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `firstSeenAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `fetchedAt`                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |