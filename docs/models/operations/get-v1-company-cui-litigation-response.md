# GetV1CompanyCuiLitigationResponse

## Example Usage

```typescript
import { GetV1CompanyCuiLitigationResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLitigationResponse = {
  headers: {
    "key": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                  | Record<string, *string*[]>                                                                                                 | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `result`                                                                                                                   | [operations.GetV1CompanyCuiLitigationResponseBody](../../models/operations/get-v1-company-cui-litigation-response-body.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |