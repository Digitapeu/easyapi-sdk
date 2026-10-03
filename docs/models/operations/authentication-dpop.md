# AuthenticationDpop

## Example Usage

```typescript
import { AuthenticationDpop } from "@digitap.eu/easyapi/models/operations";

let value: AuthenticationDpop = {
  method: "dpop",
  keyId: "4f915351-718c-43b3-a946-43b529eb8229",
  credentialId: "06fc3b63-a12e-44bd-bb17-82b188b4985f",
  generation: 346505,
  publicKeyThumbprint: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `method`              | *"dpop"*              | :heavy_check_mark:    | N/A                   |
| `keyId`               | *string*              | :heavy_check_mark:    | N/A                   |
| `credentialId`        | *string*              | :heavy_check_mark:    | N/A                   |
| `generation`          | *number*              | :heavy_check_mark:    | N/A                   |
| `publicKeyThumbprint` | *string*              | :heavy_check_mark:    | N/A                   |