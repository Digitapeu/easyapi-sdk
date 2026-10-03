# GetV1JusticeHearingsResponseBody

Success

## Example Usage

```typescript
import { GetV1JusticeHearingsResponseBody } from "@digitap/easyapi/models/operations";

let value: GetV1JusticeHearingsResponseBody = {
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
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [operations.GetV1JusticeHearingsData](../../models/operations/get-v1-justice-hearings-data.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |