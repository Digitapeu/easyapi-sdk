# GetV1JusticeHearingsResponse

## Example Usage

```typescript
import { GetV1JusticeHearingsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeHearingsResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: {
      sessions: [
        {
          department: "<value>",
          panel: "<value>",
          date: "2024-08-17",
          time: "<value>",
          cases: [],
        },
      ],
      count: 713348,
      source: "<value>",
      criminalMattersExcluded: true,
      checkedAt: new Date("2024-01-28T09:18:14.361Z"),
    },
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                       | Record<string, *string*[]>                                                                                      | :heavy_check_mark:                                                                                              | N/A                                                                                                             |
| `result`                                                                                                        | [operations.GetV1JusticeHearingsResponseBody](../../models/operations/get-v1-justice-hearings-response-body.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |