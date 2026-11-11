# GetV1CompanyCuiLeiResponse

## Example Usage

```typescript
import { GetV1CompanyCuiLeiResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1CompanyCuiLeiResponse = {
  headers: {},
  result: {
    data: {
      company: {
        cui: "<value>",
        name: "<value>",
        registrationNumber: "<value>",
      },
      queried: {
        identifiers: [],
      },
      records: [],
      ambiguous: false,
      source: "<value>",
      sourceUrl: "https://infamous-thread.com",
      licence: "<value>",
      goldenCopyPublishedAt: "<value>",
      checkedAt: new Date("2025-12-20T21:20:00.355Z"),
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.GetV1CompanyCuiLeiResponseBody](../../models/operations/get-v1-company-cui-lei-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |