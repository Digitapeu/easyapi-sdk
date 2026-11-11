# RecordT

## Example Usage

```typescript
import { RecordT } from "@digitap.eu/easyapi/models/operations";

let value: RecordT = {
  lei: "<value>",
  legalName: "<value>",
  legalForm: "<value>",
  entityStatus: "<value>",
  registrationStatus: "<value>",
  registeredAs: null,
  matchedOn: "cui",
  initialRegistrationDate: "<value>",
  lastUpdateDate: "<value>",
  nextRenewalDate: "<value>",
  corroborationLevel: "<value>",
  directParent: {
    kind: "unreported",
  },
  ultimateParent: {
    kind: "unreported",
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `lei`                                                         | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `legalName`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `legalForm`                                                   | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `entityStatus`                                                | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `registrationStatus`                                          | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `registeredAs`                                                | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `matchedOn`                                                   | [operations.MatchedOn](../../models/operations/matched-on.md) | :heavy_check_mark:                                            | N/A                                                           |
| `initialRegistrationDate`                                     | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `lastUpdateDate`                                              | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `nextRenewalDate`                                             | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `corroborationLevel`                                          | *string*                                                      | :heavy_check_mark:                                            | N/A                                                           |
| `directParent`                                                | *operations.DirectParent*                                     | :heavy_check_mark:                                            | N/A                                                           |
| `ultimateParent`                                              | *operations.UltimateParent*                                   | :heavy_check_mark:                                            | N/A                                                           |