# GetV1EtransportJobsConflict

## Example Usage

```typescript
import { GetV1EtransportJobsConflict } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EtransportJobsConflict = {
  kind: "coverage_exceeded",
  anafMessageId: "<id>",
  recordedAt: new Date("2025-03-19T22:22:03.205Z"),
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                        | [operations.GetV1EtransportJobsConflictKind](../../models/operations/get-v1-etransport-jobs-conflict-kind.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `anafMessageId`                                                                                               | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `recordedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_check_mark:                                                                                            | N/A                                                                                                           |