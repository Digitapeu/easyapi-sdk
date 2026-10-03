# Online


## Supported Types

### `operations.OnlineNok`

```typescript
const value: operations.OnlineNok = {
  status: "nok",
  traceId: "<id>",
  findings: [
    {
      severity: "error",
      code: "<value>",
      message: "<value>",
    },
  ],
};
```

### `operations.OnlineSkipped`

```typescript
const value: operations.OnlineSkipped = {
  status: "skipped",
  traceId: "<id>",
  findings: [],
};
```

