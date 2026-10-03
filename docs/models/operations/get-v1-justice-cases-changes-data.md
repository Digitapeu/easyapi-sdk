# GetV1JusticeCasesChangesData

## Example Usage

```typescript
import { GetV1JusticeCasesChangesData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCasesChangesData = {
  cases: [],
  count: 139205,
  truncated: false,
  source: "<value>",
  criminalMattersExcluded: true,
  checkedAt: new Date("2025-11-12T12:54:02.853Z"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cases`                                                                                                   | [operations.GetV1JusticeCasesChangesCase](../../models/operations/get-v1-justice-cases-changes-case.md)[] | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `count`                                                                                                   | *number*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `truncated`                                                                                               | *boolean*                                                                                                 | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `source`                                                                                                  | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `criminalMattersExcluded`                                                                                 | *true*                                                                                                    | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `checkedAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |