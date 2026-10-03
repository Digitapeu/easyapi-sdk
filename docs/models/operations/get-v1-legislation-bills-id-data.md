# GetV1LegislationBillsIdData

## Example Usage

```typescript
import { GetV1LegislationBillsIdData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsIdData = {
  id: "<id>",
  chamberFirst: "cdep",
  registration: {
    plx: "<value>",
    l: "<value>",
    e: "<value>",
    bpi: "<value>",
    senatB: "<value>",
  },
  title: "<value>",
  initiators: [
    {
      name: "<value>",
      function: "<value>",
    },
  ],
  domainTags: [],
  currentStage: "<value>",
  status: "<value>",
  registeredOn: "<value>",
  lastActivityOn: "<value>",
  amends: [],
  moReference: {
    part: null,
    number: "<value>",
    issuedOn: "<value>",
    link: {
      id: null,
      status: "unresolved",
      reason: "<value>",
    },
  },
  sourceUrl: "https://bright-hepatitis.name/",
  sourceKind: "senat",
  documentVersion: "<value>",
  retrievedAt: new Date("2025-08-24T05:24:05.876Z"),
  contentHash: "<value>",
  coverageNote: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `chamberFirst`                                                                                                         | [operations.GetV1LegislationBillsIdChamberFirst](../../models/operations/get-v1-legislation-bills-id-chamber-first.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `registration`                                                                                                         | [operations.GetV1LegislationBillsIdRegistration](../../models/operations/get-v1-legislation-bills-id-registration.md)  | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `initiators`                                                                                                           | [operations.GetV1LegislationBillsIdInitiator](../../models/operations/get-v1-legislation-bills-id-initiator.md)[]      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `domainTags`                                                                                                           | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `currentStage`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `status`                                                                                                               | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `registeredOn`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `lastActivityOn`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `amends`                                                                                                               | [operations.GetV1LegislationBillsIdAmend](../../models/operations/get-v1-legislation-bills-id-amend.md)[]              | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `moReference`                                                                                                          | [operations.GetV1LegislationBillsIdMoReference](../../models/operations/get-v1-legislation-bills-id-mo-reference.md)   | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceUrl`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `sourceKind`                                                                                                           | [operations.GetV1LegislationBillsIdSourceKind](../../models/operations/get-v1-legislation-bills-id-source-kind.md)     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `documentVersion`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `retrievedAt`                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `contentHash`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `coverageNote`                                                                                                         | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |