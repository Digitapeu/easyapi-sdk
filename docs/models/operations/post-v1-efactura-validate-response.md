# PostV1EfacturaValidateResponse

## Example Usage

```typescript
import { PostV1EfacturaValidateResponse } from "@digitap/easyapi/models/operations";

let value: PostV1EfacturaValidateResponse = {
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
      valid: false,
      findings: [],
      online: {
        status: "skipped",
        traceId: "<id>",
        findings: [
          {
            severity: "warning",
            code: "<value>",
            message: "<value>",
          },
        ],
      },
    },
  },
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                           | Record<string, *string*[]>                                                                                          | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `result`                                                                                                            | [operations.PostV1EfacturaValidateResponseBody](../../models/operations/post-v1-efactura-validate-response-body.md) | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |