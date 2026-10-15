# GetV1EfacturaJobsConflict

## Example Usage

```typescript
import { GetV1EfacturaJobsConflict } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsConflict = {
  kind: "uncorrelated_rejection",
  anafMessageId: "<id>",
  recordedAt: new Date("2024-05-28T21:18:56.553Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                    | [operations.GetV1EfacturaJobsConflictKind](../../models/operations/get-v1-efactura-jobs-conflict-kind.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `anafMessageId`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `recordedAt`                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |