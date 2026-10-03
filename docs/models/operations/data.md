# Data


## Supported Types

### `operations.PostV1EfacturaValidateData1`

```typescript
const value: operations.PostV1EfacturaValidateData1 = {
  valid: false,
  findings: [
    {
      severity: "warning",
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

### `operations.PostV1EfacturaValidateData2`

```typescript
const value: operations.PostV1EfacturaValidateData2 = {
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
};
```

### `operations.PostV1EfacturaValidateData3`

```typescript
const value: operations.PostV1EfacturaValidateData3 = {
  valid: false,
  findings: [
    {
      severity: "warning",
      code: "<value>",
      message: "<value>",
    },
  ],
  online: {
    status: "skipped",
    traceId: "<id>",
    findings: [],
  },
};
```

