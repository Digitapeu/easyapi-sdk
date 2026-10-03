# GetV1LegislationActsMoReference

## Example Usage

```typescript
import { GetV1LegislationActsMoReference } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationActsMoReference = {
  part: 879693,
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

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `part`                                                                                         | *number*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `number`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `issuedOn`                                                                                     | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `link`                                                                                         | [operations.GetV1LegislationActsLink](../../models/operations/get-v1-legislation-acts-link.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |