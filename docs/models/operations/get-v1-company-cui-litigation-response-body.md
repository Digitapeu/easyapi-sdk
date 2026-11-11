# GetV1CompanyCuiLitigationResponseBody

Success

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationResponseBody = {
  data: {
    company: {
      cui: "<value>",
      name: "<value>",
    },
    queried: {
      party: "<value>",
    },
    sameName: {
      status: "checked",
      count: 311878,
      listed: true,
      companies: [
        {
          cui: "<value>",
          name: "<value>",
          county: "Cheshire",
          status: "<value>",
        },
      ],
    },
    matches: [],
    truncated: true,
    source: "<value>",
    criminalMattersExcluded: true,
    checkedAt: new Date("2025-07-07T03:23:25.663Z"),
  },
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                    | [operations.GetV1CompanyCuiLitigationData](../../models/operations/get-v1-company-cui-litigation-data.md) | :heavy_check_mark:                                                                                        | N/A                                                                                                       |