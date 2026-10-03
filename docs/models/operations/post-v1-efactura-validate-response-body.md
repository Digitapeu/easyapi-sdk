# PostV1EfacturaValidateResponseBody

Success

## Example Usage

```typescript
import { PostV1EfacturaValidateResponseBody } from "@digitap/easyapi/models/operations";

let value: PostV1EfacturaValidateResponseBody = {
  data: {
    valid: true,
    findings: [
      {
        severity: "error",
        code: "<value>",
        message: "<value>",
      },
    ],
    online: {
      status: "ok",
      traceId: "<id>",
      findings: [
        {
          severity: "error",
          code: null,
          message: "<value>",
        },
      ],
    },
  },
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `data`             | *operations.Data*  | :heavy_check_mark: | N/A                |