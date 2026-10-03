# Institution

## Example Usage

```typescript
import { Institution } from "@digitap/easyapi/models/operations";

let value: Institution = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `id`                    | *string*                | :heavy_check_mark:      | N/A                     |
| `name`                  | *string*                | :heavy_check_mark:      | N/A                     |
| `bic`                   | *string*                | :heavy_minus_sign:      | N/A                     |
| `logo`                  | *string*                | :heavy_minus_sign:      | N/A                     |
| `countries`             | *string*[]              | :heavy_minus_sign:      | N/A                     |
| `maxAccessValidForDays` | *number*                | :heavy_minus_sign:      | N/A                     |