# Redis

## Example Usage

```typescript
import { Redis } from "@digitap/easyapi/models/operations";

let value: Redis = "down";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "degraded" | "down" | Unrecognized<string>
```