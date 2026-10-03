# GetV1LegislationBillsIdDocumentsResponse

## Example Usage

```typescript
import { GetV1LegislationBillsIdDocumentsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1LegislationBillsIdDocumentsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    data: {
      items: [],
    },
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                 | Record<string, *string*[]>                                                                                                                | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |
| `result`                                                                                                                                  | [operations.GetV1LegislationBillsIdDocumentsResponseBody](../../models/operations/get-v1-legislation-bills-id-documents-response-body.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |