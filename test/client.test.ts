import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { ConnectionError, ErrorEnvelope, RequestAbortedError, RequestTimeoutError, UnexpectedClientError } from "../src/models/errors/index.js";
import { OAuthError, RedirectRefusedError } from "../src/machine-auth/errors.js";
import { fromMachineCredential } from "../src/index.js";
import { resolveIdentity } from "../src/machine-auth/resolve.js";
import { Session } from "../src/machine-auth/session.js";
import { startMockGateway, type MockGateway } from "./harness/mock-gateway.js";
import { batchData, companyData, machineClient, provision, quickRetries, ratesData, type Attempt, type Provisioned } from "./helpers.js";
import { Deadline } from "../src/machine-auth/http.js";

let gateway: MockGateway;
let identity: Provisioned;
beforeAll(async () => {
  gateway = await startMockGateway();
  identity = await provision(gateway);
});
afterAll(async () => {
  identity.cleanup();
  await gateway.close();
});

const tokenPosts = (): number => gateway.requestLog.filter((entry) => entry.path === "/oauth/sdk/token").length;
const jsonOk = (res: import("node:http").ServerResponse, data: unknown): void => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ data }));
};
const causeOf = (error: unknown): unknown => (error instanceof UnexpectedClientError ? error.cause : error);

describe("machine client", () => {
  test("fromMachineCredential resolves the saved profile and authenticates as that credential", async () => {
    const client = await fromMachineCredential({ configDir: identity.configDir, baseUrl: gateway.origin });
    const me = await client.me.get();
    expect(me.result.data.authentication).toMatchObject({ method: "dpop", generation: 1 });
  });

  test("coalesces concurrent token acquisition and reuses the token afterwards", async () => {
    gateway.onResource("GET", "/v1/company/1", (res) => jsonOk(res, companyData("1")));
    const client = machineClient(identity.runtime);
    const before = tokenPosts();
    await Promise.all(Array.from({ length: 5 }, () => client.company.get("1")));
    await client.company.get("1");
    expect(tokenPosts() - before).toBe(1);
  });

  test("renews the token before it expires", async () => {
    let now = Date.now();
    const clocked = await startMockGateway({ now: () => now });
    const local = await provision(clocked, () => now);
    try {
      const { baseUrl, credentialId, signer } = resolveIdentity({}, local.runtime);
      const session = new Session({ origin: baseUrl, credentialId, signer, now: () => now });
      const tokenCount = (): number => clocked.requestLog.filter((entry) => entry.path === "/oauth/sdk/token").length;
      const url = new URL(`${baseUrl}/v1/company/1`);
      const call = (): Promise<unknown> => session.authorize("GET", url, new Deadline(10_000), undefined);

      await call();
      const afterFirst = tokenCount();
      now += 200_000;
      await call();
      expect(tokenCount()).toBe(afterFirst);
      now += 80_000; // 280 s: inside the 30 s renewal margin of the 300 s token
      await call();
      expect(tokenCount()).toBe(afterFirst + 1);
    } finally {
      local.cleanup();
      await clocked.close();
    }
  });

  test("a retried read signs a fresh DPoP proof per attempt and stays bounded", async () => {
    const attempts: Attempt[] = [];
    let failures = 2;
    gateway.onResource("GET", "/v1/fx/rates", (res) => jsonOk(res, ratesData()));
    const flaky = machineClient(identity.runtime, {}, {
      attempts,
      inner: (input, init) => {
        if (String(input instanceof Request ? input.url : input).endsWith("/v1/fx/rates") && failures > 0) {
          failures -= 1;
          throw new TypeError("fetch failed");
        }
        return fetch(input, init);
      },
    });
    await flaky.fx.listRates({ retries: quickRetries });
    const proofs = attempts.filter((attempt) => attempt.url.endsWith("/v1/fx/rates")).map((attempt) => attempt.dpop);
    expect(proofs.length).toBeGreaterThanOrEqual(3);
    expect(new Set(proofs).size).toBe(proofs.length);

    const dead = machineClient(identity.runtime, {}, {
      inner: (input, init) => {
        if (String(input instanceof Request ? input.url : input).endsWith("/v1/fx/rates")) throw new TypeError("fetch failed");
        return fetch(input, init);
      },
    });
    await expect(dead.fx.listRates({ retries: { ...quickRetries, backoff: { ...quickRetries.backoff, maxElapsedTime: 50 } } })).rejects.toBeInstanceOf(ConnectionError);
  });

  test("an idempotent write is retried with the same Idempotency-Key and a fresh proof", async () => {
    const seen: { key: string | null; dpop: string | null }[] = [];
    gateway.onResource("POST", "/v1/company/batch", (res) => jsonOk(res, batchData()));
    let failed = false;
    const client = machineClient(identity.runtime, {}, {
      inner: (input, init) => {
        if (input instanceof Request && input.url.endsWith("/v1/company/batch")) {
          seen.push({ key: input.headers.get("Idempotency-Key"), dpop: input.headers.get("dpop") });
          if (!failed) {
            failed = true;
            throw new TypeError("fetch failed");
          }
        }
        return fetch(input, init);
      },
    });
    await client.company.batchGet({ cuis: ["1"] }, "key-123", { retries: quickRetries });
    expect(seen.length).toBeGreaterThanOrEqual(2);
    expect(new Set(seen.map((entry) => entry.key))).toEqual(new Set(["key-123"]));
    expect(seen[0]?.dpop).not.toBe(seen[1]?.dpop);
  });

  test("a write that is not idempotent is never retried, even on a transport failure", async () => {
    let posts = 0;
    const client = machineClient(identity.runtime, {}, {
      inner: (input, init) => {
        if (input instanceof Request && input.url.endsWith("/v1/efactura/jobs/job-1/cancel")) {
          posts += 1;
          throw new TypeError("fetch failed");
        }
        return fetch(input, init);
      },
    });
    await expect(client.efactura.jobs.cancel("job-1")).rejects.toBeInstanceOf(ConnectionError);
    expect(posts).toBe(1);
  });

  test("refuses redirects instead of forwarding credentials", async () => {
    gateway.onResource("GET", "/v1/fx/convert", (res) => {
      res.writeHead(307, { Location: `${gateway.origin}/v1/me` });
      res.end();
    });
    const before = gateway.requestLog.filter((entry) => entry.path === "/v1/me").length;
    const error = await machineClient(identity.runtime).fx.convert({ from: "EUR", to: "RON", amount: 1 }).catch((caught: unknown) => caught);
    expect(causeOf(error)).toBeInstanceOf(RedirectRefusedError);
    expect(gateway.requestLog.filter((entry) => entry.path === "/v1/me").length).toBe(before);
  });

  test("preserves binary bodies byte for byte", async () => {
    const bytes = Uint8Array.from([0, 255, 1, 254, 128]);
    gateway.onResource("GET", "/v1/spv/documents/a%20b", (res) => {
      res.writeHead(200, { "Content-Type": "application/octet-stream" });
      res.end(bytes);
    });
    const response = await machineClient(identity.runtime).spv.downloadDocument("a b");
    expect(new Uint8Array(await new Response(response.result).arrayBuffer())).toEqual(bytes);
  });

  test("escapes a path parameter once and refuses separators before any network call", async () => {
    const client = machineClient(identity.runtime);
    gateway.onResource("GET", "/v1/company/RO%201", (res) => jsonOk(res, companyData("RO 1")));
    expect((await client.company.get("RO 1")).result.data).toMatchObject({ cui: "RO 1" });

    const before = gateway.requestLog.length;
    const refused = await client.company.get("a/b").catch((caught: unknown) => caught);
    expect(refused).toBeInstanceOf(UnexpectedClientError);
    expect(causeOf(refused)).toMatchObject({ name: "InvalidRequestError" });
    expect(gateway.requestLog.length).toBe(before);
  });

  test("maps the product envelope and unrecognised answers to typed errors", async () => {
    const client = machineClient(identity.runtime);
    const missing = await client.company.get("999").catch((error: unknown) => error);
    expect(missing).toBeInstanceOf(ErrorEnvelope);
    expect(missing).toMatchObject({ statusCode: 404, error: { code: "not_found" } });

    gateway.onResource("GET", "/v1/company/502", (res) => {
      res.writeHead(502, { "Content-Type": "text/html" });
      res.end("<html>bad gateway</html>");
    });
    const unexpected = await client.company.get("502", { retries: { strategy: "none" } }).catch((error: unknown) => error);
    expect(unexpected).toBeInstanceOf(Error);
    expect(unexpected).not.toBeInstanceOf(ErrorEnvelope);
    expect(unexpected).toMatchObject({ statusCode: 502 });
  });

  test("a revoked credential surfaces as an OAuth invalid_client error", async () => {
    const revoked = await provision(gateway);
    try {
      const me = (await machineClient(revoked.runtime).me.get()).result.data;
      const credentialId = "credentialId" in me.authentication ? me.authentication.credentialId : "";
      const revokeUrl = (businessId: string): string => `${gateway.origin}/api/admin/businesses/${businessId}/sdk-credentials/${credentialId}/revoke`;
      const reason = JSON.stringify({ reason: "customer requested revocation" });
      expect((await fetch(revokeUrl("00000000-0000-4000-8000-000000000000"), { method: "POST", body: reason })).status).toBe(404);
      expect((await fetch(revokeUrl(me.businessId), { method: "POST", body: reason })).status).toBe(200);
      const error = causeOf(await machineClient(revoked.runtime).me.get().catch((caught: unknown) => caught));
      expect(error).toBeInstanceOf(OAuthError);
      expect(error).toMatchObject({ error: "invalid_client", status: 401 });
    } finally {
      revoked.cleanup();
    }
  });

  test("honours AbortSignal and a bounded timeout", async () => {
    gateway.onResource("GET", "/v1/company/slow", () => {
      // Never answers.
    });
    const client = machineClient(identity.runtime);
    const controller = new AbortController();
    const pending = client.company.get("slow", { signal: controller.signal });
    setTimeout(() => controller.abort(), 50);
    await expect(pending).rejects.toBeInstanceOf(RequestAbortedError);
    await expect(client.company.get("slow", { timeoutMs: 100, retries: { strategy: "none" } })).rejects.toBeInstanceOf(RequestTimeoutError);
  });
});
