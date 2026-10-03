# GetV1LegislationBillsItem

## Example Usage

```typescript
import { GetV1LegislationBillsItem } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsItem = {
  id: "<id>",
  chamberFirst: "senat",
  registration: {
    plx: "<value>",
    l: "<value>",
    e: "<value>",
    bpi: "<value>",
    senatB: "<value>",
  },
  title: "<value>",
  initiators: [],
  domainTags: [
    "<value 1>",
  ],
  currentStage: "<value>",
  status: "<value>",
  registeredOn: "<value>",
  lastActivityOn: "<value>",
  amends: [],
  moReference: {
    part: 586847,
    number: "<value>",
    issuedOn: "<value>",
    link: {
      id: "<id>",
      status: "resolved",
      reason: "<value>",
    },
  },
  sourceUrl: "https://parallel-cook.biz/",
  sourceKind: "cdep",
  documentVersion: "<value>",
  retrievedAt: new Date("2024-08-19T12:23:17.911Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                              | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `chamberFirst`                                                                                                    | [operations.GetV1LegislationBillsChamberFirst](../../models/operations/get-v1-legislation-bills-chamber-first.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `registration`                                                                                                    | [operations.GetV1LegislationBillsRegistration](../../models/operations/get-v1-legislation-bills-registration.md)  | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `title`                                                                                                           | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `initiators`                                                                                                      | [operations.GetV1LegislationBillsInitiator](../../models/operations/get-v1-legislation-bills-initiator.md)[]      | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `domainTags`                                                                                                      | *string*[]                                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `currentStage`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `status`                                                                                                          | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `registeredOn`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `lastActivityOn`                                                                                                  | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `amends`                                                                                                          | [operations.GetV1LegislationBillsAmend](../../models/operations/get-v1-legislation-bills-amend.md)[]              | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `moReference`                                                                                                     | [operations.GetV1LegislationBillsMoReference](../../models/operations/get-v1-legislation-bills-mo-reference.md)   | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceUrl`                                                                                                       | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `sourceKind`                                                                                                      | [operations.GetV1LegislationBillsSourceKind](../../models/operations/get-v1-legislation-bills-source-kind.md)     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `documentVersion`                                                                                                 | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `retrievedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                     | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `contentHash`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `coverageNote`                                                                                                    | *string*                                                                                                          | :heavy_check_mark:                                                                                                | N/A                                                                                                               |