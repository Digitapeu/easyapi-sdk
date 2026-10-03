# PostV1EfacturaInvoicesRequestBody


## Supported Types

### `operations.Ubl`

```typescript
const value: operations.Ubl = {
  format: "ubl",
  xml: "<value>",
};
```

### `operations.Json`

```typescript
const value: operations.Json = {
  format: "json",
  invoice: {
    typeCode: "381",
    number: "<value>",
    issueDate: "<value>",
    currency: "Somali Shilling",
    seller: {
      name: "<value>",
      address: {
        street: "Orn Harbors",
        city: "Thealand",
        country: "Brazil",
      },
    },
    buyer: {
      name: "<value>",
      address: {
        street: "Oberbrunner Dale",
        city: "Apple Valley",
        country: "Bouvet Island",
      },
    },
    lines: [],
  },
};
```

