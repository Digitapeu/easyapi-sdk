import { createHash } from "node:crypto";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { ConnectionError, ErrorEnvelope } from "../../src/models/errors/index.js";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { companyData, machineClient, quickRetries, type Attempt } from "../helpers.js";
import { clientEnv, enrollEnv, runSetup, scratch } from "./support.js";

/**
 * Vectors table line 51: "Proxy upstream fails after consuming a GET proof
 * → No automatic forwarding of old proof; eligible SDK retry uses fresh jti".
 * Contract §6: "Disable transparent retries of DPoP/auth-lifecycle requests; nginx
 * cannot sign a new proof... It retries eligible reads with fresh proofs, not
 * replayed headers." Client surface: reads and the seven idempotent writes retry with the
 * same Idempotency-Key; every other write is never retried by the SDK.
 *
 * The harness consumes the DPoP replay before invoking the product handler, so a
 * handler that answers 503 models a proxy/upstream failure after proof consumption.
 */

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

const decodeClaims = (jwt: string): Record<string, unknown> =>
  JSON.parse(Buffer.from(jwt.split(".")[1] ?? "", "base64url").toString("utf8")) as Record<string, unknown>;

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
        jsonOk(res, companyData("7", "Seven SRL"));
      });

      const seen: Attempt[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = machineClient(runtime, {}, { attempts: seen });
      const company = await client.company.get("7", { retries: quickRetries });
      expect(company.result.data).toMatchObject({ cui: "7" });

      const attempts = seen.filter((entry) => entry.url.endsWith("/v1/company/7"));
      expect(attempts.length).toBeGreaterThanOrEqual(2);
      const [first, second] = attempts as [Attempt, Attempt];
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

  test("a write that is not idempotent is never retried, even when the failure consumed the proof", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      let posts = 0;
      gateway.onResource("POST", "/v1/efactura/jobs/job-1/cancel", (res) => {
        posts += 1;
        res.writeHead(503, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: { code: "rate_limited", message: "slow down" } }));
      });

      const seen: Attempt[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = machineClient(runtime, {}, { attempts: seen });
      const failure = await client.efactura.jobs.cancel("job-1").catch((error: unknown) => error);
      expect(failure).toBeInstanceOf(ErrorEnvelope);
      expect(posts).toBe(1);
      expect(seen.filter((entry) => entry.url.endsWith("/v1/efactura/jobs/job-1/cancel"))).toHaveLength(1);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("a write that is not idempotent is never retried on transport failure either", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      let posts = 0;
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      const client = machineClient(runtime, {}, {
        inner: (input, init) => {
          if (input instanceof Request && input.url.endsWith("/v1/efactura/jobs/job-2/cancel")) {
            posts += 1;
            throw new TypeError("fetch failed");
          }
          return fetch(input, init);
        },
      });
      const failure = await client.efactura.jobs.cancel("job-2").catch((error: unknown) => error);
      expect(failure).toBeInstanceOf(ConnectionError);
      expect(posts).toBe(1);
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });

  test("resource ath binds the exact token of its own attempt", async () => {
    const box = scratch();
    try {
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      gateway.onResource("GET", "/v1/company/8", (res) => jsonOk(res, companyData("8")));
      const seen: Attempt[] = [];
      const runtime = { env: clientEnv(box.dir, gateway.origin), cwd: process.cwd(), platform: process.platform as NodeJS.Platform };
      await machineClient(runtime, {}, { attempts: seen }).company.get("8");
      const attempt = seen.find((entry) => entry.url.endsWith("/v1/company/8"));
      const token = (attempt?.authorization ?? "").replace(/^DPoP /, "");
      const claims = decodeClaims(attempt?.dpop ?? "");
      expect(claims.ath).toBe(createHash("sha256").update(token, "utf8").digest("base64url"));
    } finally {
      box.cleanup();
    }
  }, { timeout: 30_000 });
});
