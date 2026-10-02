import { createHash, createPublicKey, randomBytes, randomUUID, verify } from "node:crypto";
import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import type { AddressInfo } from "node:net";
import { z } from "zod";
import {
  SDK_AUTH_LIMITS,
  SDK_OAUTH_ERROR_STATUS,
  SdkClientAssertionClaimsSchema,
  SdkClientAssertionHeaderSchema,
  SdkDpopHeaderSchema,
  SdkEnrollmentClaimsSchema,
  SdkEnrollmentHeaderSchema,
  SdkPublicKeySchema,
  SdkReplacementClaimsSchema,
  SdkReplacementHeaderSchema,
  SdkResourceDpopClaimsSchema,
  SdkRotationClaimsSchema,
  SdkRotationHeaderSchema,
  SdkTokenDpopClaimsSchema,
  SdkTokenRequestSchema,
  type SdkOAuthError,
  type SdkPublicKey,
} from "../../contract/sdk-auth.js";

/**
 * Offline stand-in for the five SDK routes of the contract (sections 3 and 6): enrollment, token,
 * `/v1/me`, rotation and admin revoke. It verifies signatures, claims, windows, equalities and replays
 * with its own small verifier, independent of the SDK's signing code.
 */

type Route = "enroll" | "token" | "rotate" | "resource";

interface Credential {
  id: string;
  keyId: string;
  jwk: SdkPublicKey;
  generation: number;
  createdAt: string;
  verifiedAt: string | null;
  rotatedAt: string | null;
  revokedAt: string | null;
}

interface Parent {
  keyId: string;
  businessId: string;
  mode: "bearer" | "dpop";
}

interface Principal {
  credential: Credential;
  token: string;
}

export interface MockGateway {
  origin: string;
  /** Registers an unbound parent API key and returns its raw secret. */
  createParentKey(): string;
  credentials: Map<string, Credential>;
  requestLog: { method: string; path: string; status: number }[];
  /** Commit the next request on this route, then cut the connection without answering. */
  dropNextResponse(route: Route): void;
  /** Answer the next resource GET on `path` with this status before doing anything else. */
  failNext(path: string, status: number, headers?: Record<string, string>): void;
  /** Handler for product routes behind DPoP authentication. */
  onResource(method: string, path: string, handler: (res: ServerResponse) => void): void;
  close(): Promise<void>;
}

const SCOPES_ON_TIER = ["company:read", "efactura:read", "spv:read"];
const sha256b64u = (input: string): string => createHash("sha256").update(input).digest("base64url");
const thumbprintOf = (jwk: SdkPublicKey): string =>
  sha256b64u(`{"crv":"${jwk.crv}","kty":"${jwk.kty}","x":"${jwk.x}","y":"${jwk.y}"}`);

interface DecodedJwt {
  header: unknown;
  claims: unknown;
  signingInput: string;
  signature: Buffer;
}

function decodeJwt(token: string): DecodedJwt | null {
  const parts = token.split(".");
  if (parts.length !== 3 || token.length > SDK_AUTH_LIMITS.jwtMaxBytes) return null;
  try {
    return {
      header: JSON.parse(Buffer.from(parts[0] ?? "", "base64url").toString("utf8")),
      claims: JSON.parse(Buffer.from(parts[1] ?? "", "base64url").toString("utf8")),
      signingInput: `${parts[0]}.${parts[1]}`,
      signature: Buffer.from(parts[2] ?? "", "base64url"),
    };
  } catch {
    return null;
  }
}

function signatureValid(jwk: SdkPublicKey, jwt: DecodedJwt): boolean {
  const key = createPublicKey({ key: jwk, format: "jwk" });
  return jwt.signature.length === 64 &&
    verify("sha256", Buffer.from(jwt.signingInput), { key, dsaEncoding: "ieee-p1363" }, jwt.signature);
}

async function readBody(req: IncomingMessage): Promise<string | null> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    size += (chunk as Buffer).length;
    if (size > SDK_AUTH_LIMITS.bodyMaxBytes) return null;
    chunks.push(chunk as Buffer);
  }
  return Buffer.concat(chunks).toString("utf8");
}

const view = (credential: Credential) => ({
  id: credential.id,
  keyId: credential.keyId,
  publicKeyThumbprint: thumbprintOf(credential.jwk),
  generation: credential.generation,
  createdAt: credential.createdAt,
  verifiedAt: credential.verifiedAt,
  rotatedAt: credential.rotatedAt,
  revokedAt: credential.revokedAt,
});

export async function startMockGateway(options: { now?: () => number } = {}): Promise<MockGateway> {
  const clock = options.now ?? Date.now;
  const nowSeconds = (): number => Math.floor(clock() / 1000);
  const iatInWindow = (iat: number): boolean =>
    iat >= nowSeconds() - SDK_AUTH_LIMITS.proofMaxAgeSeconds && iat <= nowSeconds() + SDK_AUTH_LIMITS.futureSkewSeconds;
  const expNotStale = (exp: number): boolean => exp > nowSeconds() - SDK_AUTH_LIMITS.expirySkewSeconds;
  const parents = new Map<string, Parent>();
  const credentials = new Map<string, Credential>();
  const tokens = new Map<string, { credentialId: string; generation: number; thumbprint: string; expiresAtMs: number }>();
  const replays = new Set<string>();
  const drops = new Set<Route>();
  const failures = new Map<string, { status: number; headers: Record<string, string> }>();
  const resourceHandlers = new Map<string, (res: ServerResponse) => void>();
  const requestLog: MockGateway["requestLog"] = [];
  let origin = "";

  const consumeReplay = (purpose: string, identity: string, thumbprint: string, jti: string): boolean => {
    const key = [purpose, identity, thumbprint, jti].join("|");
    if (replays.has(key)) return false;
    replays.add(key);
    return true;
  };

  function reply(route: Route, res: ServerResponse, status: number, body: unknown, headers: Record<string, string> = {}): void {
    if (drops.delete(route)) {
      res.socket?.destroy();
      return;
    }
    const isBinary = body instanceof Uint8Array;
    res.writeHead(status, { "Content-Type": isBinary ? "application/octet-stream" : "application/json", ...headers });
    res.end(isBinary ? body : JSON.stringify(body));
  }
  const productError = (route: Route, res: ServerResponse, status: number, code: string, headers?: Record<string, string>): void =>
    reply(route, res, status, { error: { code, message: code } }, headers);
  const oauthError = (res: ServerResponse, error: SdkOAuthError["error"]): void =>
    reply("token", res, SDK_OAUTH_ERROR_STATUS[error], { error }, { "Cache-Control": "no-store" });

  function verifyDpopHeader(req: IncomingMessage): DecodedJwt | null {
    // Node folds duplicate DPoP headers into one value, so duplicates are counted on the raw header list.
    const occurrences = req.rawHeaders.filter((entry, index) => index % 2 === 0 && entry.toLowerCase() === "dpop").length;
    const value = req.headers.dpop;
    return occurrences === 1 && typeof value === "string" ? decodeJwt(value) : null;
  }

  /** Resource-side DPoP authentication (contract section 3), returning null after sending the 401. */
  function authenticateResource(req: IncomingMessage, res: ServerResponse, route: Route, pathname: string): Principal | null {
    const challenge = (error?: string): null => {
      productError(route, res, 401, "unauthorized", { "WWW-Authenticate": error ? `DPoP error="${error}"` : "DPoP" });
      return null;
    };
    const match = /^DPoP ([A-Za-z0-9_-]+)$/.exec(req.headers.authorization ?? "");
    if (!match?.[1]) return challenge();
    const token = match[1];
    const record = tokens.get(sha256b64u(token));
    const credential = record === undefined ? undefined : credentials.get(record.credentialId);
    if (!record || !credential || credential.revokedAt || clock() >= record.expiresAtMs || record.generation !== credential.generation) {
      return challenge("invalid_token");
    }
    const jwt = verifyDpopHeader(req);
    const header = SdkDpopHeaderSchema.safeParse(jwt?.header);
    const claims = SdkResourceDpopClaimsSchema.safeParse(jwt?.claims);
    if (!jwt || !header.success || !claims.success) return challenge("invalid_dpop_proof");
    const proofKey = thumbprintOf(header.data.jwk);
    const valid = proofKey === record.thumbprint && signatureValid(header.data.jwk, jwt) &&
      claims.data.htm === req.method && claims.data.htu === origin + pathname &&
      claims.data.ath === sha256b64u(token) && iatInWindow(claims.data.iat) &&
      consumeReplay("dpop", credential.id, proofKey, claims.data.jti);
    return valid ? { credential, token } : challenge("invalid_dpop_proof");
  }

  const EnrollBodySchema = z.object({ credentialId: z.string(), publicKey: SdkPublicKeySchema, enrollmentProof: z.string() }).strict();
  function enroll(req: IncomingMessage, res: ServerResponse, body: string): void {
    const unauthorized = (): void => productError("enroll", res, 401, "unauthorized");
    const apiKey = /^Bearer (\S+)$/.exec(req.headers.authorization ?? "")?.[1];
    const parent = apiKey === undefined ? undefined : parents.get(apiKey);
    if (!apiKey || !parent) return unauthorized();
    const parsedBody = EnrollBodySchema.safeParse(safeJson(body));
    if (!parsedBody.success) return productError("enroll", res, 400, "validation_error");
    const { credentialId, publicKey, enrollmentProof } = parsedBody.data;
    const jwt = decodeJwt(enrollmentProof);
    const header = SdkEnrollmentHeaderSchema.safeParse(jwt?.header);
    const claims = SdkEnrollmentClaimsSchema.safeParse(jwt?.claims);
    const thumbprint = thumbprintOf(publicKey);
    const proofOk = jwt !== null && header.success && claims.success && signatureValid(publicKey, jwt) &&
      claims.data.credentialId === credentialId && claims.data.aud === origin + "/v1/auth/enroll" &&
      claims.data.keyThumbprint === thumbprint && claims.data.bootstrapHash === sha256b64u(apiKey) &&
      iatInWindow(claims.data.iat) && expNotStale(claims.data.exp) &&
      consumeReplay("enrollment", parent.keyId, thumbprint, claims.data.jti);
    if (!proofOk) return unauthorized();

    const existing = [...credentials.values()].find((credential) => credential.keyId === parent.keyId);
    if (existing?.revokedAt) return unauthorized();
    if (existing) {
      const same = existing.id === credentialId && thumbprintOf(existing.jwk) === thumbprint;
      return same ? reply("enroll", res, 200, { data: { credential: view(existing) } }) : productError("enroll", res, 409, "conflict");
    }
    if (credentials.has(credentialId)) return productError("enroll", res, 409, "conflict");
    const credential: Credential = {
      id: credentialId, keyId: parent.keyId, jwk: publicKey, generation: 1,
      createdAt: new Date().toISOString(), verifiedAt: null, rotatedAt: null, revokedAt: null,
    };
    credentials.set(credentialId, credential);
    parent.mode = "dpop";
    reply("enroll", res, 201, { data: { credential: view(credential) } });
  }

  function token(req: IncomingMessage, res: ServerResponse, body: string): void {
    const params = new URLSearchParams(body);
    const names = [...params.keys()];
    if (new Set(names).size !== names.length) return oauthError(res, "invalid_request");
    if (params.get("grant_type") !== "client_credentials") return oauthError(res, "unsupported_grant_type");
    const form = SdkTokenRequestSchema.safeParse(Object.fromEntries(params));
    if (!form.success) return oauthError(res, "invalid_request");
    const credential = credentials.get(form.data.client_id);
    if (!credential || credential.revokedAt) return oauthError(res, "invalid_client");

    const assertion = decodeJwt(form.data.client_assertion);
    const assertionHeader = SdkClientAssertionHeaderSchema.safeParse(assertion?.header);
    const assertionClaims = SdkClientAssertionClaimsSchema.safeParse(assertion?.claims);
    const registered = thumbprintOf(credential.jwk);
    const assertionOk = assertion !== null && assertionHeader.success && assertionClaims.success &&
      signatureValid(credential.jwk, assertion) && assertionClaims.data.iss === credential.id &&
      assertionClaims.data.aud === origin + "/oauth/sdk/token" &&
      iatInWindow(assertionClaims.data.iat) && expNotStale(assertionClaims.data.exp) &&
      consumeReplay("client_assertion", credential.id, registered, assertionClaims.data.jti);
    if (!assertionOk) return oauthError(res, "invalid_client");

    const proof = verifyDpopHeader(req);
    const proofHeader = SdkDpopHeaderSchema.safeParse(proof?.header);
    const proofClaims = SdkTokenDpopClaimsSchema.safeParse(proof?.claims);
    const proofOk = proof !== null && proofHeader.success && proofClaims.success &&
      thumbprintOf(proofHeader.data.jwk) === registered && signatureValid(proofHeader.data.jwk, proof) &&
      proofClaims.data.htu === origin + "/oauth/sdk/token" && iatInWindow(proofClaims.data.iat) &&
      consumeReplay("dpop", credential.id, registered, proofClaims.data.jti);
    if (!proofOk) return oauthError(res, "invalid_dpop_proof");

    const requested = form.data.scope?.split(" ") ?? SCOPES_ON_TIER;
    if (!requested.every((scope) => SCOPES_ON_TIER.includes(scope))) return oauthError(res, "invalid_scope");
    const accessToken = `sdk_at_${randomBytes(32).toString("base64url")}`;
    tokens.set(sha256b64u(accessToken), {
      credentialId: credential.id, generation: credential.generation, thumbprint: registered,
      expiresAtMs: clock() + SDK_AUTH_LIMITS.tokenLifetimeSeconds * 1000,
    });
    reply("token", res, 200,
      { access_token: accessToken, token_type: "DPoP", expires_in: SDK_AUTH_LIMITS.tokenLifetimeSeconds, scope: requested.join(" ") },
      { "Cache-Control": "no-store", Pragma: "no-cache" });
  }

  const RotateBodySchema = z.object({
    expectedGeneration: z.number(), publicKey: SdkPublicKeySchema, rotationAuthorization: z.string(), replacementProof: z.string(),
  }).strict();
  function rotate(principal: Principal, res: ServerResponse, credentialId: string, body: string): void {
    const unauthorized = (): void => productError("rotate", res, 401, "unauthorized");
    if (principal.credential.id !== credentialId) return unauthorized();
    const parsedBody = RotateBodySchema.safeParse(safeJson(body));
    if (!parsedBody.success) return productError("rotate", res, 400, "validation_error");
    const input = parsedBody.data;
    const credential = principal.credential;
    const newThumbprint = thumbprintOf(input.publicKey);

    const authorization = decodeJwt(input.rotationAuthorization);
    const authorizationClaims = SdkRotationClaimsSchema.safeParse(authorization?.claims);
    const possession = decodeJwt(input.replacementProof);
    const possessionClaims = SdkReplacementClaimsSchema.safeParse(possession?.claims);
    const rotateUrl = `${origin}/v1/auth/credentials/${credentialId}/rotate`;
    const sharedOk = (claims: z.infer<typeof SdkRotationClaimsSchema>): boolean =>
      claims.sub === credentialId && claims.aud === rotateUrl && claims.expectedGeneration === input.expectedGeneration &&
      claims.replacementKeyThumbprint === newThumbprint && iatInWindow(claims.iat) && expNotStale(claims.exp);
    const proofsOk = authorization !== null && possession !== null &&
      SdkRotationHeaderSchema.safeParse(authorization.header).success && authorizationClaims.success &&
      SdkReplacementHeaderSchema.safeParse(possession.header).success && possessionClaims.success &&
      signatureValid(credential.jwk, authorization) && signatureValid(input.publicKey, possession) &&
      sharedOk(authorizationClaims.data) && sharedOk(possessionClaims.data) &&
      authorizationClaims.data.jti !== possessionClaims.data.jti;
    if (!proofsOk) return unauthorized();
    if (!consumeReplay("rotation", credentialId, thumbprintOf(credential.jwk), authorizationClaims.data.jti) ||
        !consumeReplay("replacement", credentialId, newThumbprint, possessionClaims.data.jti)) return unauthorized();

    if (input.expectedGeneration !== credential.generation || newThumbprint === thumbprintOf(credential.jwk)) {
      return productError("rotate", res, 409, "conflict");
    }
    credential.jwk = input.publicKey;
    credential.generation += 1;
    credential.rotatedAt = new Date().toISOString();
    credential.verifiedAt = null;
    for (const [hash, record] of tokens) if (record.credentialId === credentialId) tokens.delete(hash);
    reply("rotate", res, 200, { data: { credential: view(credential) } });
  }

  function revoke(res: ServerResponse, businessId: string, credentialId: string, body: string): void {
    const credential = credentials.get(credentialId);
    const owner = credential === undefined ? undefined : [...parents.values()].find((parent) => parent.keyId === credential.keyId);
    if (!credential || owner?.businessId !== businessId) return productError("resource", res, 404, "not_found");
    const reason = z.object({ reason: z.string().trim().min(SDK_AUTH_LIMITS.adminReasonMinLength).max(SDK_AUTH_LIMITS.adminReasonMaxLength) })
      .strict().safeParse(safeJson(body));
    if (!reason.success) return productError("resource", res, 400, "validation_error");
    credential.revokedAt ??= new Date().toISOString();
    for (const [hash, record] of tokens) if (record.credentialId === credentialId) tokens.delete(hash);
    reply("resource", res, 200, { data: { credential: view(credential) } });
  }

  async function handle(req: IncomingMessage, res: ServerResponse): Promise<void> {
    const method = req.method ?? "GET";
    const pathname = (req.url ?? "/").split("?")[0] ?? "/";
    res.on("finish", () => requestLog.push({ method, path: pathname, status: res.statusCode }));
    const body = method === "POST" ? await readBody(req) : "";
    if (body === null) return reply("resource", res, 413, { error: { code: "validation_error", message: "body too large" } });

    if (method === "POST" && pathname === "/v1/auth/enroll") return enroll(req, res, body);
    if (method === "POST" && pathname === "/oauth/sdk/token") return token(req, res, body);
    const revokeMatch = /^\/api\/admin\/businesses\/([^/]+)\/sdk-credentials\/([^/]+)\/revoke$/.exec(pathname);
    if (method === "POST" && revokeMatch) return revoke(res, revokeMatch[1] ?? "", revokeMatch[2] ?? "", body);

    const injected = failures.get(`${method} ${pathname}`);
    if (injected) {
      failures.delete(`${method} ${pathname}`);
      return reply("resource", res, injected.status, { error: { code: "unavailable", message: "injected" } }, injected.headers);
    }
    const rotateMatch = /^\/v1\/auth\/credentials\/([^/]+)\/rotate$/.exec(pathname);
    const route: Route = rotateMatch ? "rotate" : "resource";
    const principal = authenticateResource(req, res, route, pathname);
    if (!principal) return;
    if (rotateMatch && method === "POST") return rotate(principal, res, rotateMatch[1] ?? "", body);
    if (method === "GET" && pathname === "/v1/me") {
      principal.credential.verifiedAt ??= new Date().toISOString();
      const parent = [...parents.values()].find((candidate) => candidate.keyId === principal.credential.keyId);
      return reply("resource", res, 200, {
        data: {
          businessId: parent?.businessId, businessName: "Mock Business SRL",
          tier: { code: "pro", nameRo: "Pro", nameEn: "Pro", rateLimitPerMin: 600, includedConnections: 3 },
          scopes: SCOPES_ON_TIER, limits: { rateLimitPerMin: 600 },
          authentication: {
            method: "dpop", keyId: principal.credential.keyId, credentialId: principal.credential.id,
            generation: principal.credential.generation, publicKeyThumbprint: thumbprintOf(principal.credential.jwk),
          },
        },
      });
    }
    const handler = resourceHandlers.get(`${method} ${pathname}`);
    if (handler) return handler(res);
    productError("resource", res, 404, "not_found");
  }

  const server: Server = createServer((req, res) => {
    handle(req, res).catch(() => {
      res.statusCode = 500;
      res.end();
    });
  });
  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  origin = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;

  return {
    origin,
    credentials,
    requestLog,
    createParentKey() {
      const apiKey = `ea_test_${randomBytes(18).toString("base64url")}`;
      parents.set(apiKey, { keyId: randomUUID(), businessId: randomUUID(), mode: "bearer" });
      return apiKey;
    },
    dropNextResponse: (route) => void drops.add(route),
    failNext: (path, status, headers = {}) => void failures.set(`GET ${path}`, { status, headers }),
    onResource: (method, path, handler) => void resourceHandlers.set(`${method} ${path}`, handler),
    close: () => new Promise((resolve) => {
      server.closeAllConnections();
      server.close(() => resolve());
    }),
  };
}

function safeJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}
