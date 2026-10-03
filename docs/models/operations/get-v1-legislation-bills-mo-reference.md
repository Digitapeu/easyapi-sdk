# GetV1LegislationBillsMoReference

## Example Usage

```typescript
import { GetV1LegislationBillsMoReference } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsMoReference = {
  part: 955397,
  number: "<value>",
  issuedOn: "<value>",
  link: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `part`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `number`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `issuedOn`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `link`                                                                                           | [operations.GetV1LegislationBillsLink](../../models/operations/get-v1-legislation-bills-link.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |