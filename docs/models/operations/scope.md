# Scope

## Example Usage

```typescript
import { Scope } from "@digitap.eu/easyapi/models/operations";

let value: Scope = "connections:read";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"company:read" | "search:read" | "connections:read" | "connections:write" | "efactura:send" | "efactura:read" | "efactura:validate" | "etransport:send" | "etransport:read" | "reges:write" | "reges:read" | "spv:read" | "bank:read" | "procurement:read" | "legislation:read" | "justice:read" | Unrecognized<string>
```