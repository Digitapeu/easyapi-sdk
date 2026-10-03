# Act

## Example Usage

```typescript
import { Act } from "@digitap.eu/easyapi/models/operations";

let value: Act = {
  actId: {
    id: "<id>",
    status: "resolved",
    reason: "<value>",
  },
  title: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `actId`                                               | [operations.ActId](../../models/operations/act-id.md) | :heavy_check_mark:                                    | N/A                                                   |
| `title`                                               | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `type`                                                | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |