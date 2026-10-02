import { createPublicKey, verify } from "node:crypto";
import { describe, expect, test } from "bun:test";
import {
  SdkClientAssertionClaimsSchema, SdkClientAssertionHeaderSchema, SdkDpopHeaderSchema, SdkEnrollmentClaimsSchema,
  SdkEnrollmentHeaderSchema, SdkReplacementClaimsSchema, SdkResourceDpopClaimsSchema, SdkRotationClaimsSchema,
  SdkTokenDpopClaimsSchema, SdkJtiSchema,
} from "../contract/sdk-auth.js";
import { InvalidRequestError } from "../src/errors.js";
import { generateSigner, sha256Base64Url, thumbprintOf } from "../src/keys.js";
import { assertCanonicalPath, clientAssertion, enrollmentProof, expandPath, resourceDpopProof, rotationProofs, tokenDpopProof } from "../src/proofs.js";

const origin = "https://api.example.test";
const credentialId = "0b0f7b3e-5c3e-4a55-9c1e-2a6f0f6f9d11";
const now = () => 1_800_000_000_000;

function decode(jwt: string): { header: unknown; claims: unknown; valid: (key: ReturnType<typeof generateSigner>["signer"]) => boolean } {
  const [h = "", p = "", s = ""] = jwt.split(".");
  return {
    header: JSON.parse(Buffer.from(h, "base64url").toString()),
    claims: JSON.parse(Buffer.from(p, "base64url").toString()),
    valid: (signer) => verify("sha256", Buffer.from(`${h}.${p}`), { key: createPublicKey(signer.privateKey), dsaEncoding: "ieee-p1363" }, Buffer.from(s, "base64url")),
  };
}

describe("signed messages", () => {
  const { signer } = generateSigner();

  test("RFC 7638 thumbprint is 43 characters and stable", () => {
    expect(thumbprintOf(signer.publicJwk)).toHaveLength(43);
    expect(signer.thumbprint).toBe(thumbprintOf(signer.publicJwk));
  });

  test("enrollment proof matches the contract profile and hashes the raw key", () => {
    const jwt = decode(enrollmentProof(signer, { origin, credentialId, bootstrapApiKey: "ea_raw_key_value", now }));
    expect(SdkEnrollmentHeaderSchema.parse(jwt.header)).toEqual({ alg: "ES256", typ: "sdk-enrollment+jwt" });
    const claims = SdkEnrollmentClaimsSchema.parse(jwt.claims);
    expect(claims).toMatchObject({ aud: `${origin}/v1/auth/enroll`, bootstrapHash: sha256Base64Url("ea_raw_key_value"), keyThumbprint: signer.thumbprint });
    expect(claims.exp - claims.iat).toBeLessThanOrEqual(60);
    expect(jwt.valid(signer)).toBe(true);
  });

  test("client assertion and token DPoP target the issuer URL; token proof has no ath", () => {
    const assertion = decode(clientAssertion(signer, { origin, credentialId, now }));
    expect(SdkClientAssertionHeaderSchema.parse(assertion.header)).toEqual({ alg: "ES256", typ: "JWT" });
    expect(SdkClientAssertionClaimsSchema.parse(assertion.claims)).toMatchObject({ iss: credentialId, sub: credentialId, aud: `${origin}/oauth/sdk/token` });
    const proof = decode(tokenDpopProof(signer, { origin, now }));
    expect(SdkDpopHeaderSchema.parse(proof.header).jwk).toEqual(signer.publicJwk);
    const claims = SdkTokenDpopClaimsSchema.parse(proof.claims);
    expect(claims).toMatchObject({ htm: "POST", htu: `${origin}/oauth/sdk/token` });
    expect(claims).not.toHaveProperty("ath");
  });

  test("resource DPoP binds method, path (no query) and the token hash, with a fresh jti each time", () => {
    const make = () => decode(resourceDpopProof(signer, { method: "get", origin, rawPath: "/v1/company/43020532", accessToken: "sdk_at_x", now }));
    const first = SdkResourceDpopClaimsSchema.parse(make().claims);
    expect(first).toMatchObject({ htm: "GET", htu: `${origin}/v1/company/43020532`, ath: sha256Base64Url("sdk_at_x") });
    expect(SdkJtiSchema.safeParse(first.jti).success).toBe(true);
    expect(SdkResourceDpopClaimsSchema.parse(make().claims).jti).not.toBe(first.jti);
  });

  test("rotation authorization and replacement proof use distinct jti and distinct signers", () => {
    const next = generateSigner().signer;
    const proofs = rotationProofs(signer, next, { origin, credentialId, expectedGeneration: 3, now });
    const authorization = decode(proofs.rotationAuthorization);
    const possession = decode(proofs.replacementProof);
    const a = SdkRotationClaimsSchema.parse(authorization.claims);
    const b = SdkReplacementClaimsSchema.parse(possession.claims);
    expect(a).toMatchObject({ sub: credentialId, expectedGeneration: 3, replacementKeyThumbprint: next.thumbprint, aud: `${origin}/v1/auth/credentials/${credentialId}/rotate` });
    expect(a.jti).not.toBe(b.jti);
    expect(authorization.valid(signer)).toBe(true);
    expect(possession.valid(next)).toBe(true);
    expect(possession.valid(signer)).toBe(false);
  });
});

describe("request paths", () => {
  test("accepts the contract's accepted examples and preserves percent-encoded data", () => {
    expect(() => assertCanonicalPath("/v1/company/43020532")).not.toThrow();
    expect(expandPath("/v1/spv/documents/{id}", { id: "a b" })).toBe("/v1/spv/documents/a%20b");
  });

  test.each(["/v1//me", "/v1/%2e%2e/me", "/v1/%2E/me", "/v1/a%2Fb", "/v1/a%5cb", "/v1/a\\b", "/v1/a%00b", "/v1/a%zz", "/v1/../me", "/v1/me?x=1", "v1/me"])(
    "rejects %s", (path) => {
      expect(() => assertCanonicalPath(path)).toThrow(InvalidRequestError);
    },
  );

  test("escapes a parameter once and rejects separators and dot segments in it", () => {
    expect(expandPath("/v1/company/{cui}", { cui: "RO 1" })).toBe("/v1/company/RO%201");
    expect(() => expandPath("/v1/company/{cui}", { cui: "a/b" })).toThrow(InvalidRequestError);
    expect(() => expandPath("/v1/company/{cui}", { cui: ".." })).toThrow(InvalidRequestError);
    expect(() => expandPath("/v1/company/{cui}", {})).toThrow(InvalidRequestError);
  });
});
