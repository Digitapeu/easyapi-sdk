# GetV1CompanyCuiLitigationResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationResponseBody = {
  data: {
    company: {
      cui: "<value>",
      name: "<value>",
    },
    queried: {
      party: "<value>",
    },
    matches: [],
    truncated: true,
    source: "<value>",
    criminalMattersExcluded: true,
    checkedAt: new Date("2024-03-07T19:38:36.918Z"),
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                    | [operations.GetV1CompanyCuiLitigationData](../../models/operations/get-v1-company-cui-litigation-data.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |