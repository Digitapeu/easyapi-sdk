import {
  SDK_AUTH_LIMITS,
  SdkClientAssertionClaimsSchema,
  SdkEnrollmentClaimsSchema,
  SdkReplacementClaimsSchema,
  SdkResourceDpopClaimsSchema,
  SdkRotationClaimsSchema,
  SdkTokenDpopClaimsSchema,
} from "./contract/sdk-auth.js";
import { InvalidRequestError } from "./errors.js";
import { randomJti, sha256Base64Url, signJwt, type Signer } from "./keys.js";

export const ENROLL_PATH = "/v1/auth/enroll";
export const TOKEN_PATH = "/oauth/sdk/token";
export const rotatePath = (credentialId: string): string => `/v1/auth/credentials/${credentialId}/rotate`;

export type Clock = () => number;
export const epochSeconds = (now: Clock): number => Math.floor(now() / 1000);

// Claims are re-validated against the frozen contract schemas before signing so drift fails here, not
// as an opaque 401 from the server.
const lifetimeClaims = (now: Clock) => {
  const iat = epochSeconds(now);
  return { iat, exp: iat + SDK_AUTH_LIMITS.jwtLifetimeSeconds, jti: randomJti() };
};

export function enrollmentProof(signer: Signer, input: {
  origin: string; credentialId: string; bootstrapApiKey: string; now: Clock;
}): string {
  const claims = SdkEnrollmentClaimsSchema.parse({
    credentialId: input.credentialId,
    aud: input.origin + ENROLL_PATH,
    ...lifetimeClaims(input.now),
    keyThumbprint: signer.thumbprint,
    // Hash of the exact raw key, never the peppered database hash.
    bootstrapHash: sha256Base64Url(input.bootstrapApiKey),
  });
  return signJwt(signer, { alg: "ES256", typ: "sdk-enrollment+jwt" }, claims);
}

export function clientAssertion(signer: Signer, input: { origin: string; credentialId: string; now: Clock }): string {
  const claims = SdkClientAssertionClaimsSchema.parse({
    iss: input.credentialId,
    sub: input.credentialId,
    aud: input.origin + TOKEN_PATH,
    ...lifetimeClaims(input.now),
  });
  return signJwt(signer, { alg: "ES256", typ: "JWT" }, claims);
}

export function tokenDpopProof(signer: Signer, input: { origin: string; now: Clock; nonce?: string }): string {
  const claims = SdkTokenDpopClaimsSchema.parse({
    jti: randomJti(),
    htm: "POST",
    htu: input.origin + TOKEN_PATH,
    iat: epochSeconds(input.now),
    ...(input.nonce === undefined ? {} : { nonce: input.nonce }),
  });
  return signJwt(signer, { alg: "ES256", typ: "dpop+jwt", jwk: signer.publicJwk }, claims);
}

export function resourceDpopProof(signer: Signer, input: {
  method: string; origin: string; rawPath: string; accessToken: string; now: Clock; nonce?: string;
}): string {
  const claims = SdkResourceDpopClaimsSchema.parse({
    jti: randomJti(),
    htm: input.method.toUpperCase(),
    htu: input.origin + input.rawPath,
    iat: epochSeconds(input.now),
    ath: sha256Base64Url(input.accessToken),
    ...(input.nonce === undefined ? {} : { nonce: input.nonce }),
  });
  return signJwt(signer, { alg: "ES256", typ: "dpop+jwt", jwk: signer.publicJwk }, claims);
}

/** The two signed claim sets of a rotation: authorization by the old signer, possession by the new one. */
export function rotationProofs(oldSigner: Signer, newSigner: Signer, input: {
  origin: string; credentialId: string; expectedGeneration: number; now: Clock;
}): { rotationAuthorization: string; replacementProof: string } {
  const shared = {
    sub: input.credentialId,
    aud: input.origin + rotatePath(input.credentialId),
    expectedGeneration: input.expectedGeneration,
    replacementKeyThumbprint: newSigner.thumbprint,
  };
  const authorization = SdkRotationClaimsSchema.parse({ ...shared, ...lifetimeClaims(input.now) });
  const possession = SdkReplacementClaimsSchema.parse({ ...shared, ...lifetimeClaims(input.now) });
  return {
    rotationAuthorization: signJwt(oldSigner, { alg: "ES256", typ: "sdk-rotation+jwt" }, authorization),
    replacementProof: signJwt(newSigner, { alg: "ES256", typ: "sdk-replacement+jwt" }, possession),
  };
}

// Written as a code-point check because a regex character class over C0 controls trips no-control-regex.
const hasControlCharacter = (text: string): boolean => {
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0;
    if (code <= 0x1f || code === 0x7f) return true;
  }
  return false;
};

/**
 * Rejects the path shapes the gateway refuses on machine-authenticated routes (contract section 6), so a
 * path that could be normalized differently by a proxy is never signed.
 */
export function assertCanonicalPath(rawPath: string): void {
  const fail = (why: string): never => {
    throw new InvalidRequestError(`refusing to sign request path: ${why}`);
  };
  if (!rawPath.startsWith("/")) fail("it must start with '/'");
  if (rawPath.includes("//")) fail("duplicate slashes");
  if (rawPath.includes("\\")) fail("backslash");
  if (/[?#]/.test(rawPath)) fail("query or fragment in path");
  if (hasControlCharacter(rawPath)) fail("control character");
  if (/%(?![0-9a-fA-F]{2})/.test(rawPath)) fail("malformed percent escape");
  if (/%(2f|5c)/i.test(rawPath)) fail("encoded path separator");
  if (/%(0[0-9a-f]|1[0-9a-f]|7f)/i.test(rawPath)) fail("encoded control character");
  for (const segment of rawPath.split("/")) {
    const decoded = segment.replace(/%2e/gi, ".");
    if (decoded === "." || decoded === "..") fail("dot segment");
  }
}
