# PostV1EfacturaValidateData3

## Example Usage

```typescript
import { PostV1EfacturaValidateData3 } from "@digitap/easyapi/models/operations";

let value: PostV1EfacturaValidateData3 = {
  valid: false,
  findings: [
    {
      severity: "warning",
      code: "<value>",
      message: "<value>",
    },
  ],
  online: {
    status: "skipped",
    traceId: "<id>",
    findings: [],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `valid`                                                      | *false*                                                      | :heavy_check_mark:                                           | N/A                                                          |
| `findings`                                                   | [operations.Finding3](../../models/operations/finding3.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `online`                                                     | *operations.Online*                                          | :heavy_check_mark:                                           | N/A                                                          |