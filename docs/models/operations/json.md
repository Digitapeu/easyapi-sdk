# Json

## Example Usage

```typescript
import { Json } from "@digitap/easyapi/models/operations";

let value: Json = {
  format: "json",
  invoice: {
    typeCode: "381",
    number: "<value>",
    issueDate: "<value>",
    currency: "Somali Shilling",
    seller: {
      name: "<value>",
      address: {
        street: "Orn Harbors",
        city: "Thealand",
        country: "Brazil",
      },
    },
    buyer: {
      name: "<value>",
      address: {
        street: "Oberbrunner Dale",
        city: "Apple Valley",
        country: "Bouvet Island",
      },
    },
    lines: [],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `format`                                                 | *"json"*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `invoice`                                                | [operations.Invoice](../../models/operations/invoice.md) | :heavy_check_mark:                                       | N/A                                                      |