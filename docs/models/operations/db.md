# Db

## Example Usage

```typescript
import { Db } from "@digitap/easyapi/models/operations";

let value: Db = "degraded";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "degraded" | "down" | Unrecognized<string>
```