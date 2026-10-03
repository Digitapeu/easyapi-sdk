# OnlineNok

## Example Usage

```typescript
import { OnlineNok } from "@digitap/easyapi/models/operations";

let value: OnlineNok = {
  status: "nok",
  traceId: "<id>",
  findings: [
    {
      severity: "error",
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `status`                                                                  | *"nok"*                                                                   | :heavy_check_mark:                                                        | N/A                                                                       |
| `traceId`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `findings`                                                                | [operations.OnlineFinding1](../../models/operations/online-finding1.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |