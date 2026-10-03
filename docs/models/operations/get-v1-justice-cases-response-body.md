# GetV1JusticeCasesResponseBody

Success

## Example Usage

```typescript
import { GetV1JusticeCasesResponseBody } from "@digitap.eu/easyapi/models/operations";

let value: GetV1JusticeCasesResponseBody = {
  data: {
    cases: [],
    count: 298896,
    truncated: false,
    source: "<value>",
    criminalMattersExcluded: true,
    checkedAt: new Date("2026-02-01T13:35:40.193Z"),
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `data`                                                                                   | [operations.GetV1JusticeCasesData](../../models/operations/get-v1-justice-cases-data.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |