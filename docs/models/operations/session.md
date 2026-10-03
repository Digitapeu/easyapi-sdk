# Session

## Example Usage

```typescript
import { Session } from "@digitap.eu/easyapi/models/operations";

let value: Session = {
  department: "<value>",
  panel: "<value>",
  date: null,
  time: "<value>",
  cases: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `department`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `panel`                                                                                          | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `date`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `time`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `cases`                                                                                          | [operations.GetV1JusticeHearingsCase](../../models/operations/get-v1-justice-hearings-case.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |