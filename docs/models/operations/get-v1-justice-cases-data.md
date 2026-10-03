# GetV1JusticeCasesData

## Example Usage

```typescript
import { GetV1JusticeCasesData } from "@digitap/easyapi/models/operations";

let value: GetV1JusticeCasesData = {
  cases: [],
  count: 503028,
  truncated: true,
  source: "<value>",
  criminalMattersExcluded: true,
  checkedAt: new Date("2026-02-19T02:50:42.922Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cases`                                                                                       | [operations.GetV1JusticeCasesCase](../../models/operations/get-v1-justice-cases-case.md)[]    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `truncated`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `criminalMattersExcluded`                                                                     | *true*                                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |