# PostV1EfacturaValidateData2

## Example Usage

```typescript
import { PostV1EfacturaValidateData2 } from "@digitap/easyapi/models/operations";

let value: PostV1EfacturaValidateData2 = {
  valid: true,
  findings: [
    {
      severity: "error",
      code: "<value>",
      message: "<value>",
    },
  ],
  online: {
    status: "ok",
    traceId: "<id>",
    findings: [
      {
        severity: "error",
        code: null,
        message: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `valid`                                                      | *true*                                                       | :heavy_check_mark:                                           | N/A                                                          |
| `findings`                                                   | [operations.Finding2](../../models/operations/finding2.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `online`                                                     | [operations.OnlineOk](../../models/operations/online-ok.md)  | :heavy_check_mark:                                           | N/A                                                          |