# GetV1BankInstitutionsInstitution

## Example Usage

```typescript
import { GetV1BankInstitutionsInstitution } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankInstitutionsInstitution = {
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