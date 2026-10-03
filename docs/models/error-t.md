# ErrorT

## Example Usage

```typescript
import { ErrorT } from "@digitap/easyapi/models";

let value: ErrorT = {
  code: "not_found",
  message: "<value>",
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `code`                                      | [models.ErrorCode](../models/error-code.md) | :heavy_check_mark:                          | N/A                                         |
| `message`                                   | *string*                                    | :heavy_check_mark:                          | N/A                                         |
| `details`                                   | Record<string, *any*>                       | :heavy_minus_sign:                          | N/A                                         |