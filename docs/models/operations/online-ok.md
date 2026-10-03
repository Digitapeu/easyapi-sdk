# OnlineOk

## Example Usage

```typescript
import { OnlineOk } from "@digitap.eu/easyapi/models/operations";

let value: OnlineOk = {
  status: "ok",
  traceId: "<id>",
  findings: [],
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `status`                                                        | *"ok"*                                                          | :heavy_check_mark:                                              | N/A                                                             |
| `traceId`                                                       | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `findings`                                                      | [operations.FindingOk](../../models/operations/finding-ok.md)[] | :heavy_check_mark:                                              | N/A                                                             |