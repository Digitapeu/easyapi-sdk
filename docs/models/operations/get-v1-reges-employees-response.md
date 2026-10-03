# GetV1RegesEmployeesResponse

## Example Usage

```typescript
import { GetV1RegesEmployeesResponse } from "@digitap/easyapi/models/operations";

let value: GetV1RegesEmployeesResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
    ],
  },
  result: {
    data: {
      employees: [],
    },
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                     | Record<string, *string*[]>                                                                                    | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `result`                                                                                                      | [operations.GetV1RegesEmployeesResponseBody](../../models/operations/get-v1-reges-employees-response-body.md) | :heavy_check_mark:                                                                                            | N/A                                                                                                           |