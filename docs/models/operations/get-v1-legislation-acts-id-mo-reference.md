# GetV1LegislationActsIdMoReference

## Example Usage

```typescript
import { GetV1LegislationActsIdMoReference } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationActsIdMoReference = {
  part: 194672,
  number: "<value>",
  issuedOn: "<value>",
  link: {
    id: "<id>",
    status: "unresolved",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `part`                                                                                              | *number*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `number`                                                                                            | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `issuedOn`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `link`                                                                                              | [operations.GetV1LegislationActsIdLink](../../models/operations/get-v1-legislation-acts-id-link.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |