# OnlineSkipped

## Example Usage

```typescript
import { OnlineSkipped } from "@digitap.eu/easyapi/models/operations";

let value: OnlineSkipped = {
  status: "skipped",
  traceId: "<id>",
  findings: [],
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `status`                                                                  | *"skipped"*                                                               | :heavy_check_mark:                                                        | N/A                                                                       |
| `traceId`                                                                 | *any*                                                                     | :heavy_check_mark:                                                        | N/A                                                                       |
| `findings`                                                                | [operations.OnlineFinding2](../../models/operations/online-finding2.md)[] | :heavy_check_mark:                                                        | N/A                                                                       |