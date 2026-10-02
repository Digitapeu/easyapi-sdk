import { z } from "zod";

// Inlined from the platform's shared type package so this file stands alone in the public repository.
export const IsoDateTimeSchema = z
  .string()
  .datetime({ offset: true, message: "expected an ISO-8601 datetime string" });
export const UuidSchema = z.string().uuid("expected a UUID");

export const SCOPES = [
  "company:read",
  "search:read",
  "connections:read",
  "connections:write",
  "efactura:send",
  "efactura:read",
  "efactura:validate",
  "etransport:send",
  "etransport:read",
  "reges:write",
  "reges:read",
  "spv:read",
  "bank:read",
  "procurement:read",
  "legislation:read",
  "justice:read",
] as const;
export const ScopeSchema = z.enum(SCOPES);
export type Scope = z.infer<typeof ScopeSchema>;

// Application profile; clock, signature, curve-point and database checks belong
// to the verifier. Shape validation alone never authenticates a caller.
export const SDK_AUTH_LIMITS = {
  tokenLifetimeSeconds: 300,
  jwtLifetimeSeconds: 60,
  proofMaxAgeSeconds: 60,
  futureSkewSeconds: 30,
  expirySkewSeconds: 30,
  jwtReceiptRetentionAfterExpSeconds: 31,
  dpopReceiptRetentionAfterIatSeconds: 91,
  restoreQuarantineSeconds: 151,
  lockTimeoutSeconds: 2,
  statementTimeoutSeconds: 5,
  transactionTimeoutSeconds: 10,
  nonceMaxLength: 512,
  verifiedAtMinIntervalSeconds: 60,
  adminReasonMinLength: 10,
  adminReasonMaxLength: 500,
  jwtMaxBytes: 4096,
  bodyMaxBytes: 16384,
  enrollmentPerIpPerMinute: 30,
  enrollmentPerKeyPerMinute: 10,
  tokensPerIpPerMinute: 120,
  tokensPerCredentialPerMinute: 60,
  rotationsPerIpPerMinute: 30,
  rotationsPerCredentialPerMinute: 10,
} as const;

// Written by the gateway as the audit reason on every sdk:credential:rotate; not a body field.
export const SDK_ROTATION_AUDIT_REASON = "sdk signer rotation";

// The last character has only four significant bits for a 32-byte value.
export const SdkSha256Schema = z.string().regex(/^[A-Za-z0-9_-]{42}[AEIMQUYcgkosw048]$/);
export const SdkCredentialIdSchema = UuidSchema.regex(
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
  "expected a canonical lowercase UUIDv4",
);
export const SdkGenerationSchema = z.number().int().safe().positive();
export const SdkNumericDateSchema = z.number().int().safe().nonnegative();
export const SdkJtiSchema = z.string().regex(/^[A-Za-z0-9_-]{22,128}$/);
export const SdkCompactJwtSchema = z.string().max(SDK_AUTH_LIMITS.jwtMaxBytes)
  .regex(/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/);
export const SdkAccessTokenSchema = z.string().regex(/^sdk_at_[A-Za-z0-9_-]{42}[AEIMQUYcgkosw048]$/);

export const SdkPublicKeySchema = z.object({
  kty: z.literal("EC"),
  crv: z.literal("P-256"),
  x: SdkSha256Schema,
  y: SdkSha256Schema,
}).strict();
export type SdkPublicKey = z.infer<typeof SdkPublicKeySchema>;

export const ApiAuthenticationModeSchema = z.enum(["bearer", "dpop"]);
export type ApiAuthenticationMode = z.infer<typeof ApiAuthenticationModeSchema>;

export const SdkCredentialViewSchema = z.object({
  id: SdkCredentialIdSchema,
  keyId: UuidSchema,
  publicKeyThumbprint: SdkSha256Schema,
  generation: SdkGenerationSchema,
  createdAt: IsoDateTimeSchema,
  verifiedAt: IsoDateTimeSchema.nullable(),
  rotatedAt: IsoDateTimeSchema.nullable(),
  revokedAt: IsoDateTimeSchema.nullable(),
}).strict();
export type SdkCredentialView = z.infer<typeof SdkCredentialViewSchema>;

export const SdkKeyAuthenticationViewSchema = z.object({
  authenticationMode: ApiAuthenticationModeSchema,
  sdkCredential: SdkCredentialViewSchema.nullable(),
}).strict();
export type SdkKeyAuthenticationView = z.infer<typeof SdkKeyAuthenticationViewSchema>;

export const MeAuthenticationSchema = z.discriminatedUnion("method", [
  z.object({ method: z.literal("api_key"), keyId: UuidSchema }).strict(),
  z.object({
    method: z.literal("dpop"),
    keyId: UuidSchema,
    credentialId: SdkCredentialIdSchema,
    generation: SdkGenerationSchema,
    publicKeyThumbprint: SdkSha256Schema,
  }).strict(),
  z.object({ method: z.literal("mcp_oauth") }).strict(),
]);
export type MeAuthentication = z.infer<typeof MeAuthenticationSchema>;

export const SdkEnrollmentHeaderSchema = z.object({
  alg: z.literal("ES256"), typ: z.literal("sdk-enrollment+jwt"),
}).strict();
export const SdkClientAssertionHeaderSchema = z.object({
  alg: z.literal("ES256"), typ: z.literal("JWT"),
}).strict();
export const SdkRotationHeaderSchema = z.object({
  alg: z.literal("ES256"), typ: z.literal("sdk-rotation+jwt"),
}).strict();
export const SdkReplacementHeaderSchema = z.object({
  alg: z.literal("ES256"), typ: z.literal("sdk-replacement+jwt"),
}).strict();
export const SdkDpopHeaderSchema = z.object({
  alg: z.literal("ES256"), typ: z.literal("dpop+jwt"), jwk: SdkPublicKeySchema,
}).strict();

const applicationClaims = {
  aud: z.string().url().max(2048),
  iat: SdkNumericDateSchema,
  exp: SdkNumericDateSchema,
  jti: SdkJtiSchema,
};
function hasBoundedLifetime(claims: { iat: number; exp: number }): boolean {
  return claims.exp > claims.iat && claims.exp - claims.iat <= SDK_AUTH_LIMITS.jwtLifetimeSeconds;
}
export const SdkEnrollmentClaimsSchema = z.object({
  ...applicationClaims,
  credentialId: SdkCredentialIdSchema,
  keyThumbprint: SdkSha256Schema,
  bootstrapHash: SdkSha256Schema,
}).strict().refine(hasBoundedLifetime, "JWT lifetime must be 1 to 60 seconds");
export type SdkEnrollmentClaims = z.infer<typeof SdkEnrollmentClaimsSchema>;

export const SdkClientAssertionClaimsSchema = z.object({
  ...applicationClaims,
  iss: SdkCredentialIdSchema,
  sub: SdkCredentialIdSchema,
}).strict().refine(hasBoundedLifetime, "JWT lifetime must be 1 to 60 seconds")
  .refine((claims) => claims.iss === claims.sub, "issuer must equal subject");
export type SdkClientAssertionClaims = z.infer<typeof SdkClientAssertionClaimsSchema>;

export const SdkRotationClaimsSchema = z.object({
  ...applicationClaims,
  sub: SdkCredentialIdSchema,
  expectedGeneration: SdkGenerationSchema,
  replacementKeyThumbprint: SdkSha256Schema,
}).strict().refine(hasBoundedLifetime, "JWT lifetime must be 1 to 60 seconds");
export type SdkRotationClaims = z.infer<typeof SdkRotationClaimsSchema>;
export const SdkReplacementClaimsSchema = SdkRotationClaimsSchema;
export type SdkReplacementClaims = z.infer<typeof SdkReplacementClaimsSchema>;

const dpopClaims = {
  jti: SdkJtiSchema,
  htm: z.string().regex(/^[A-Z]+$/).max(16),
  htu: z.string().url().max(2048).refine((value) => !/[?#]/.test(value), "htu excludes query and fragment"),
  iat: SdkNumericDateSchema,
  nonce: z.string().min(1).max(SDK_AUTH_LIMITS.nonceMaxLength).regex(/^[\x21-\x7E]+$/).optional(),
};
export const SdkTokenDpopClaimsSchema = z.object({
  ...dpopClaims, htm: z.literal("POST"),
}).strict();
export type SdkTokenDpopClaims = z.infer<typeof SdkTokenDpopClaimsSchema>;
export const SdkResourceDpopClaimsSchema = z.object({
  ...dpopClaims, ath: SdkSha256Schema,
}).strict();
export type SdkResourceDpopClaims = z.infer<typeof SdkResourceDpopClaimsSchema>;

export const SdkScopeStringSchema = z.string().max(1024).refine((value) => {
  if (value === "") return true;
  const scopes = value.split(" ");
  return new Set(scopes).size === scopes.length && scopes.every((scope) => ScopeSchema.safeParse(scope).success);
}, "expected distinct known scopes separated by a single space");

export const SdkTokenRequestSchema = z.object({
  grant_type: z.literal("client_credentials"),
  client_id: SdkCredentialIdSchema,
  client_assertion_type: z.literal("urn:ietf:params:oauth:client-assertion-type:jwt-bearer"),
  client_assertion: SdkCompactJwtSchema,
  scope: SdkScopeStringSchema.refine((value) => value.length > 0, "omit an empty requested scope").optional(),
}).strict();
export type SdkTokenRequest = z.infer<typeof SdkTokenRequestSchema>;
export const SdkTokenResponseSchema = z.object({
  access_token: SdkAccessTokenSchema,
  token_type: z.literal("DPoP"),
  expires_in: z.literal(SDK_AUTH_LIMITS.tokenLifetimeSeconds),
  scope: SdkScopeStringSchema,
}).strict();
export type SdkTokenResponse = z.infer<typeof SdkTokenResponseSchema>;
export const SdkOAuthErrorSchema = z.object({
  error: z.enum([
    "invalid_request", "invalid_client", "invalid_scope", "unsupported_grant_type",
    "invalid_dpop_proof", "use_dpop_nonce", "temporarily_unavailable", "rate_limited", "server_error",
  ]),
  error_description: z.string().max(256).optional(),
}).strict();
export type SdkOAuthError = z.infer<typeof SdkOAuthErrorSchema>;
// One status per member; the gateway's OAuthError derives its status from here. Oversized bodies are the
// single documented exception: 413 invalid_request, rendered by the 413 branch, not by OAuthError.
export const SDK_OAUTH_ERROR_STATUS = {
  invalid_request: 400,
  invalid_client: 401,
  invalid_scope: 400,
  unsupported_grant_type: 400,
  invalid_dpop_proof: 400,
  use_dpop_nonce: 400,
  temporarily_unavailable: 503,
  rate_limited: 429,
  server_error: 500,
} as const satisfies Record<SdkOAuthError["error"], number>;

// Add to ERROR_CODES together with every HTTP mapping when the gateway lands.
export const SdkAuthenticationUnavailableCodeSchema = z.literal("authentication_unavailable");

export const SdkPublicOriginSchema = z.string().max(2048).url().refine((value) => {
  try {
    const url = new URL(value);
    const isLoopback = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
    return value === url.origin && !url.username && !url.password &&
      (url.protocol === "https:" || (url.protocol === "http:" && isLoopback));
  } catch {
    return false;
  }
}, "expected a canonical HTTPS origin (HTTP only for loopback development)");
export const SdkProfileNameSchema = z.string().regex(/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/);
// Absolute means POSIX "/...". Windows drive and UNC forms are rejected (a drive path is relative on
// POSIX); Windows is unadvertised until it has real ACL tests, and this changes when it ships.
const privateKeyPathSchema = z.string().min(1).max(4096)
  .refine((path) => !path.includes("\0"))
  .refine((path) => path.startsWith("/"), "key path must be absolute");
export const SdkPendingRotationSchema = z.object({
  expectedGeneration: SdkGenerationSchema,
  privateKeyPath: privateKeyPathSchema,
  publicKeyThumbprint: SdkSha256Schema,
}).strict();
export const SdkProfileSchema = z.object({
  credentialId: SdkCredentialIdSchema,
  publicOrigin: SdkPublicOriginSchema,
  privateKeyPath: privateKeyPathSchema,
  publicKeyThumbprint: SdkSha256Schema,
  status: z.enum(["pending", "verified"]),
  // Set once enrollment or a rotation is finalized. A pending profile may carry it: that is the crash
  // window between persisting the generation and marking the profile verified.
  generation: SdkGenerationSchema.optional(),
  pendingRotation: SdkPendingRotationSchema.optional(),
}).strict().superRefine((profile, ctx) => {
  const issue = (message: string) => ctx.addIssue({ code: "custom", message });
  if (profile.status === "verified" && profile.generation === undefined) issue("a verified profile persists its generation");
  if (profile.status === "pending" && profile.pendingRotation !== undefined) issue("pendingRotation requires a verified profile");
  if (profile.generation !== undefined && profile.pendingRotation !== undefined &&
      profile.pendingRotation.expectedGeneration !== profile.generation) {
    issue("pendingRotation.expectedGeneration must equal the profile generation");
  }
});
export type SdkProfile = z.infer<typeof SdkProfileSchema>;
