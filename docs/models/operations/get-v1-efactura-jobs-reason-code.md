# GetV1EfacturaJobsReasonCode

## Example Usage

```typescript
import { GetV1EfacturaJobsReasonCode } from "@digitap.eu/easyapi/models/operations";

let value: GetV1EfacturaJobsReasonCode = "http_401_403";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"timeout" | "http_5xx" | "http_4xx" | "http_401_403" | "unparseable" | "missing_upload_id" | "breaker_open" | "queue_full" | "pool_timeout" | "token_stale" | "token_refresh" | "token_persist" | "vault_unavailable" | "connection_pending" | "connection_error" | "feature_disabled" | "flag_disabled" | "sibling_delivered" | "own_evidence" | "precheck_failed" | "lease_short" | "lease_expired" | "payload_expired" | "crash" | "restore_rearm" | Unrecognized<string>
```