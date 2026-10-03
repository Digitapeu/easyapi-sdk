# GetV1LegislationBillsIdMoReference

## Example Usage

```typescript
import { GetV1LegislationBillsIdMoReference } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationBillsIdMoReference = {
  part: 592670,
  number: "<value>",
  issuedOn: "<value>",
  link: {
    id: null,
    status: "unresolved",
    reason: "<value>",
  },
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `part`                                                                                                | *number*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `number`                                                                                              | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `issuedOn`                                                                                            | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `link`                                                                                                | [operations.GetV1LegislationBillsIdLink](../../models/operations/get-v1-legislation-bills-id-link.md) | :heavy_check_mark:                                                                                    | N/A                                                                                                   |