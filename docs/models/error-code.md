# ErrorCode

## Example Usage

```typescript
import { ErrorCode } from "@digitap.eu/easyapi/models";

let value: ErrorCode = "connect_in_progress";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"unauthorized" | "forbidden" | "not_found" | "rate_limited" | "idempotency_key_reuse" | "idempotency_in_progress" | "operation_pending" | "not_implemented" | "hardening_gate_unmet" | "impersonation_readonly" | "passkey_required" | "passkey_elevation_required" | "edge_binding_rejected" | "scope_required" | "validation_error" | "upstream_error" | "conflict" | "connection_limit_reached" | "business_offboarding" | "connect_in_progress" | "connection_unsupported" | "connect_expired" | "scope_retired" | "connection_unauthorized" | "feature_disabled" | "feature_state_unknown" | "validator_unavailable" | "authentication_unavailable" | "vault_unavailable" | "method_not_allowed" | "contract_violation" | "internal_error" | Unrecognized<string>
```