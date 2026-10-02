import { createHash, createPublicKey, verify } from "node:crypto";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import type { FetchLike } from "../../src/http.js";
import { createClient } from "../../src/index.js";
import { runCli } from "../../src/cli/main.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { cliRun, clientEnv, enrollEnv, scratch } from "./support.js";

/**
 * Client-side proof profile (contract §2 + task vector 7). Every DPoP proof the
 * client emits must carry: header typ=dpop+jwt, alg=ES256, a public JWK only
 * (exactly kty/crv/x/y, no "d"); claims whose htm/htu match the request (htu
 * without query/fragment); ath = base64url(sha256(access token)) on resource
 * calls and no ath at issuance; a fresh jti per request; iat within ±5 s of now.
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

interface Attempt {
  method: string;
  url: string;
  authorization: string | null;
  dpop: string | null;
}

function tappedFetch(attempts: Attempt[]): FetchLike {
  return async (url, init) => {
    const headers = new Headers(init?.headers);
    attempts.push({
      method: (init?.method ?? "GET").toUpperCase(),
      url,
      authorization: headers.get("authorization"),
      dpop: headers.get("dpop"),
    });
    return fetch(url, init);
  };
}

const part = (jwt: string, index: 0 | 1 | 2): unknown =>
  JSON.parse(Buffer.from(jwt.split(".")[index] ?? "", "base64url").toString("utf8")) as unknown;

function signatureValid(proof: string, jwk: Record<string, string>): boolean {
  const [h = "", p = "", s = ""] = proof.split(".");
  return verify(
    "sha256",
    Buffer.from(`${h}.${p}`),
    { key: createPublicKey({ key: { kty: "EC", crv: "P-256", x: jwk.x, y: jwk.y }, format: "jwk" }), dsaEncoding: "ieee-p1363" },
    Buffer.from(s, "base64url"),
  );
}

describe("vector: every emitted DPoP proof matches the client profile", () => {
  test("typ/alg/public-JWK/htm/htu/ath/jti/iat hold across setup, reads and rotation", async () => {
    const box = scratch();
    const attempts: Attempt[] = [];
    try {
      const env = enrollEnv(gateway, box.dir);
      const setup = cliRun(env);
      setup.ctx.fetch = tappedFetch(attempts);
      expect(await runCli(["setup"], setup.ctx)).toBe(0);

      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = createClient({ fetch: tappedFetch(attempts) }, runtime);
      gateway.onResource("GET", "/v1/company/43020532", (res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: { cui: "43020532" } }));
      });
      // A read with a query string: the proof's htu must exclude it.
      await client.request("get", "/v1/company/{cui}", { path: { cui: "43020532" }, query: { vat: true } });

      const rotate = cliRun(clientEnv(box.dir, gateway.origin));
      rotate.ctx.fetch = tappedFetch(attempts);
      expect(await runCli(["rotate"], rotate.ctx)).toBe(0);

      const proofs = attempts.filter((attempt) => attempt.dpop !== null);
      expect(proofs.length).toBeGreaterThan(3);
      // Enrollment posts the bootstrap bearer credential, never a DPoP proof.
      const enrollAttempts = attempts.filter((attempt) => attempt.url.endsWith("/v1/auth/enroll"));
      expect(enrollAttempts.length).toBeGreaterThan(0);
      for (const attempt of enrollAttempts) {
        expect(attempt.dpop).toBeNull();
        expect(attempt.authorization?.startsWith("Bearer ")).toBe(true);
      }

      const jtis = new Set<string>();
      const checkedAtSeconds = Date.now() / 1000;
      let sawTokenProof = false;
      let sawResourceProofWithQuery = false;
      for (const attempt of proofs) {
        const header = part(attempt.dpop ?? "", 0) as Record<string, unknown>;
        const claims = part(attempt.dpop ?? "", 1) as Record<string, unknown>;
        const jwk = header.jwk as Record<string, string>;

        // Header: exactly ES256 / dpop+jwt with a public JWK (no "d", no extras).
        expect(header.alg).toBe("ES256");
        expect(header.typ).toBe("dpop+jwt");
        expect(Object.keys(jwk).sort()).toEqual(["crv", "kty", "x", "y"]);
        expect(jwk.kty).toBe("EC");
        expect(jwk.crv).toBe("P-256");
        expect(jwk.x).toMatch(/^[A-Za-z0-9_-]{43}$/);
        expect(jwk.y).toMatch(/^[A-Za-z0-9_-]{43}$/);
        expect("d" in jwk).toBe(false);
        expect(signatureValid(attempt.dpop ?? "", jwk)).toBe(true);

        // htm/htu match this exact request; htu never carries query or fragment.
        const requestUrl = new URL(attempt.url);
        expect(claims.htm).toBe(attempt.method);
        expect(claims.htu).toBe(`${gateway.origin}${requestUrl.pathname}`);
        expect(String(claims.htu)).not.toMatch(/[?#]/);

        if (attempt.url.endsWith("/oauth/sdk/token")) {
          sawTokenProof = true;
          expect(claims.htm).toBe("POST");
          expect("ath" in claims).toBe(false);
        } else {
          // Resource call: ath binds the exact opaque token of this attempt.
          const token = (attempt.authorization ?? "").replace(/^DPoP /, "");
          expect(attempt.authorization?.startsWith("DPoP ")).toBe(true);
          expect(claims.ath).toBe(createHash("sha256").update(token, "utf8").digest("base64url"));
          if (requestUrl.search !== "") sawResourceProofWithQuery = true;
        }

        // Fresh jti per request; iat within ±5 s of now.
        const jti = claims.jti as string;
        expect(jti).toMatch(/^[A-Za-z0-9_-]{22,128}$/);
        expect(jtis.has(jti)).toBe(false);
        jtis.add(jti);
        expect(Math.abs(checkedAtSeconds - (claims.iat as number))).toBeLessThanOrEqual(5);
      }
      expect(sawTokenProof).toBe(true);
      expect(sawResourceProofWithQuery).toBe(true);
    } finally {
      box.cleanup();
    }
  }, { timeout: 60_000 });
});
