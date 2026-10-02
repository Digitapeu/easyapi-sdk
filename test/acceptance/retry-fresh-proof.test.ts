import { createHash } from "node:crypto";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { ApiError, NetworkError } from "../../src/errors.js";
import type { FetchLike } from "../../src/http.js";
import { createClient } from "../../src/index.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { clientEnv, enrollEnv, runSetup, scratch } from "./support.js";

/**
 * Vectors table line 51: "Proxy upstream fails after consuming a GET proof
 * → No automatic forwarding of old proof; eligible SDK retry uses fresh jti".
 * Contract §6: "Disable transparent retries of DPoP/auth-lifecycle requests; nginx
 * cannot sign a new proof... It retries eligible reads with fresh proofs, not
 * replayed headers." Client surface: "The SDK never retries a mutation by itself."
 *
 * The harness consumes the DPoP replay before invoking the product handler, so a
 * handler that answers 503 models a proxy/upstream failure after proof consumption.
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

interface Seen {
  url: string;
  authorization: string | null;
  dpop: string | null;
}

const decodeClaims = (jwt: string): Record<string, unknown> =>
  JSON.parse(Buffer.from(jwt.split(".")[1] ?? "", "base64url").toString("utf8")) as Record<string, unknown>;

/** A fetch that records the credential headers of every attempt, then delegates. */
function recordingFetch(seen: Seen[], fail?: (url: string, init: RequestInit | undefined) => Promise<Response> | Response): FetchLike {
  const attempts = new Map<string, number>();
  return async (url, init) => {
    const headers = new Headers(init?.headers);
    seen.push({ url, authorization: headers.get("authorization"), dpop: headers.get("dpop") });
    const n = (attempts.get(url) ?? 0) + 1;
    attempts.set(url, n);
    if (fail) return fail(url, init);
    return fetch(url, init);
  };
}

const jsonOk = (res: import("node:http").ServerResponse, data: unknown): void => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data }));
};

describe("vector: proxy failure after proof consumption", () => {
  test("eligible GET retry uses a fresh jti; the consumed proof is dead", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      let handlerCalls = 0;
      gateway.onResource("GET", "/v1/company/7", (res) => {
        handlerCalls += 1;
        if (handlerCalls === 1) {
          // Upstream 503 after the harness already consumed this attempt's proof.
          res.writeHead(503, { "Content-Type": "application/json", "Retry-After": "0" });
          res.end(JSON.stringify({ error: { code: "rate_limited", message: "slow down" } }));
          return;
        }
        jsonOk(res, { cui: "7", name: "Seven SRL" });
      });

      const seen: Seen[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = createClient({ fetch: recordingFetch(seen) }, runtime);
      const company = await client.company.get("7");
      expect(company).toMatchObject({ cui: "7" });

      const attempts = seen.filter((entry) => entry.url.endsWith("/v1/company/7"));
      expect(attempts).toHaveLength(2);
      const [first, second] = attempts as [Seen, Seen];
      // The retry did not forward the old proof: a fresh jti went out.
      const jtiOf = (proof: string | null): string => decodeClaims(proof ?? "").jti as string;
      expect(first?.dpop).toBeTruthy();
      expect(second?.dpop).toBeTruthy();
      expect(jtiOf(second?.dpop ?? null)).not.toBe(jtiOf(first?.dpop ?? null));

      // The consumed proof cannot be reused: replaying it with the live token is rejected.
      const replay = await fetch(`${gateway.origin}/v1/company/7`, {
        headers: { Authorization: first?.authorization ?? "", DPoP: first?.dpop ?? "" },
      });
      expect(replay.status).toBe(401);
      expect(replay.headers.get("www-authenticate")).toContain('error="invalid_dpop_proof"');
      await replay.arrayBuffer();
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("mutations are never retried, even when the failure consumed the proof", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      let posts = 0;
      gateway.onResource("POST", "/v1/company/batch", (res) => {
        posts += 1;
        res.writeHead(503, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: { code: "rate_limited", message: "slow down" } }));
      });

      const seen: Seen[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = createClient({ fetch: recordingFetch(seen) }, runtime);
      const failure = await client
        .request("post", "/v1/company/batch", { body: { cuis: ["7"] }, idempotencyKey: "batch-001" })
        .catch((error: unknown) => error);
      expect(failure).toBeInstanceOf(ApiError);
      expect(posts).toBe(1);
      expect(seen.filter((entry) => entry.url.endsWith("/v1/company/batch"))).toHaveLength(1);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("mutations are never retried on transport failure either", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      let posts = 0;
      const seenFail: Seen[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = createClient({
        fetch: recordingFetch(seenFail, (url, init) => {
          if (url.endsWith("/v1/company/batch")) {
            posts += 1;
            throw new TypeError("connection reset");
          }
          return fetch(url, init);
        }),
      }, runtime);
      const failure = await client
        .request("post", "/v1/company/batch", { body: { cuis: ["7"] }, idempotencyKey: "batch-002" })
        .catch((error: unknown) => error);
      expect(failure).toBeInstanceOf(NetworkError);
      expect(posts).toBe(1);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("resource ath binds the exact token of its own attempt", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      gateway.onResource("GET", "/v1/company/8", (res) => jsonOk(res, { cui: "8" }));
      const seen: Seen[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      await createClient({ fetch: recordingFetch(seen) }, runtime).company.get("8");
      const attempt = seen.find((entry) => entry.url.endsWith("/v1/company/8"));
      const token = (attempt?.authorization ?? "").replace(/^DPoP /, "");
      const claims = decodeClaims(attempt?.dpop ?? "");
      expect(claims.ath).toBe(createHash("sha256").update(token, "utf8").digest("base64url"));
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });
});
