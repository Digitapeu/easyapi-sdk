# GetV1BankInstitutionsResponse

## Example Usage

```typescript
import { GetV1BankInstitutionsResponse } from "@digitap.eu/easyapi/models/operations";

let value: GetV1BankInstitutionsResponse = {
  headers: {
    "key": [],
  },
  result: {
    data: {
      institutions: [],
      count: 193502,
    },
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.GetV1BankInstitutionsResponseBody](../../models/operations/get-v1-bank-institutions-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |