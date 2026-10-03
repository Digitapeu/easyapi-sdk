# GetV1JusticeHearingsData

## Example Usage

```typescript
import { GetV1JusticeHearingsData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeHearingsData = {
  sessions: [],
  count: 614497,
  source: "<value>",
  criminalMattersExcluded: true,
  checkedAt: new Date("2024-09-01T08:03:33.343Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sessions`                                                                                    | [operations.Session](../../models/operations/session.md)[]                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `criminalMattersExcluded`                                                                     | *true*                                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |