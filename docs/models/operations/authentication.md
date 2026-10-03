# Authentication


## Supported Types

### `operations.AuthenticationAPIKey`

```typescript
const value: operations.AuthenticationAPIKey = {
  method: "api_key",
  keyId: "e9672a96-cf22-4c88-a8a1-0366b4862f1b",
};
```

### `operations.AuthenticationDpop`

```typescript
const value: operations.AuthenticationDpop = {
  method: "dpop",
  keyId: "4f915351-718c-43b3-a946-43b529eb8229",
  credentialId: "06fc3b63-a12e-44bd-bb17-82b188b4985f",
  generation: 346505,
  publicKeyThumbprint: "<value>",
};
```

### `operations.AuthenticationMcpOauth`

```typescript
const value: operations.AuthenticationMcpOauth = {
  method: "mcp_oauth",
};
```

