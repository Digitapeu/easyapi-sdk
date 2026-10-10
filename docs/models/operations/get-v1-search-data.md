# GetV1SearchData

## Example Usage

```typescript
import { GetV1SearchData } from "@digitap.eu/easyapi/models/operations";

let value: GetV1SearchData = {
  results: [
    {
      cui: "<value>",
      name: "<value>",
      registrationNumber: "<value>",
      county: "South Glamorgan",
      locality: "<value>",
      legalForm: "<value>",
      insolvent: false,
      status: null,
    },
  ],
  count: 771207,
  source: "demoanaf",
  naturalPersonsExcluded: true,
  checkedAt: new Date("2024-07-12T07:36:14.577Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `results`                                                                                     | [operations.GetV1SearchResult](../../models/operations/get-v1-search-result.md)[]             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `count`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `source`                                                                                      | *"demoanaf"*                                                                                  | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `naturalPersonsExcluded`                                                                      | *true*                                                                                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checkedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |