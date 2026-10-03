# GetV1LegislationMonitorulOficialIssuesResponse

## Example Usage

```typescript
import { GetV1LegislationMonitorulOficialIssuesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1LegislationMonitorulOficialIssuesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [],
  },
  result: {
    data: {
      items: [],
      nextCursor: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                             | Record<string, *string*[]>                                                                                                                            | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |
| `result`                                                                                                                                              | [operations.GetV1LegislationMonitorulOficialIssuesResponseBody](../../models/operations/get-v1-legislation-monitorul-oficial-issues-response-body.md) | :heavy_check_mark:                                                                                                                                    | N/A                                                                                                                                                   |