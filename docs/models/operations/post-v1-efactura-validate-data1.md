# PostV1EfacturaValidateData1

## Example Usage

```typescript
import { PostV1EfacturaValidateData1 } from "@digitap.eu/easyapi/models/operations";

let value: PostV1EfacturaValidateData1 = {
  valid: false,
  findings: [
    {
      severity: "warning",
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `valid`                                                      | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `findings`                                                   | [operations.Finding1](../../models/operations/finding1.md)[] | :heavy_check_mark:                                           | N/A                                                          |