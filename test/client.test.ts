import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import {
  AbortedError, ApiError, NetworkError, OAuthError, RedirectRefusedError, TimeoutError, UnexpectedResponseError, createClient,
} from "../src/index.js";
import { resolveIdentity } from "../src/resolve.js";
import { Session } from "../src/session.js";
import { startMockGateway, type MockGateway } from "./harness/mock-gateway.js";
import { provision, type Provisioned } from "./helpers.js";

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

describe("createClient", () => {
  test("coalesces concurrent token acquisition and reuses the token afterwards", async () => {
    gateway.onResource("GET", "/v1/company/1", (res) => jsonOk(res, { cui: "1", name: "A" }));
    const client = createClient({}, identity.runtime);
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
      clocked.onResource("GET", "/v1/company/1", (res) => jsonOk(res, { cui: "1" }));
      const { baseUrl, credentialId, signer } = resolveIdentity({}, local.runtime);
      const session = new Session({ origin: baseUrl, credentialId, signer, now: () => now });
      const tokenCount = (): number => clocked.requestLog.filter((entry) => entry.path === "/oauth/sdk/token").length;
      const call = (): Promise<unknown> => session.request({ method: "GET", rawPath: "/v1/company/1" });

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

  test("signs a fresh DPoP proof per attempt and retries safe reads at most twice", async () => {
    const proofs: string[] = [];
    let calls = 0;
    gateway.onResource("GET", "/v1/fx/rates", (res) => jsonOk(res, { ok: true }));
    const client = createClient({
      fetch: async (url, init) => {
        if (url.endsWith("/v1/fx/rates")) {
          proofs.push((init?.headers as Record<string, string>).DPoP ?? "");
          calls += 1;
          if (calls <= 2) throw new TypeError("connection reset");
        }
        return fetch(url, init);
      },
    }, identity.runtime);
    await client.request("get", "/v1/fx/rates");
    expect(calls).toBe(3);
    expect(new Set(proofs).size).toBe(3);

    calls = -10;
    await expect(client.request("get", "/v1/fx/rates")).rejects.toBeInstanceOf(NetworkError);
    expect(calls).toBe(-7);
  });

  test("never retries a mutation and keeps the idempotency key", async () => {
    let posts = 0;
    const keys: (string | undefined)[] = [];
    const client = createClient({
      fetch: async (url, init) => {
        if (url.endsWith("/v1/company/batch")) {
          posts += 1;
          keys.push((init?.headers as Record<string, string>)["Idempotency-Key"]);
          throw new TypeError("connection reset");
        }
        return fetch(url, init);
      },
    }, identity.runtime);
    await expect(client.request("post", "/v1/company/batch", { body: { cuis: ["1"] }, idempotencyKey: "key-123" })).rejects.toBeInstanceOf(NetworkError);
    expect(posts).toBe(1);
    expect(keys).toEqual(["key-123"]);
  });

  test("refuses redirects instead of forwarding credentials", async () => {
    gateway.onResource("GET", "/v1/fx/convert", (res) => {
      res.writeHead(307, { Location: `${gateway.origin}/v1/me` });
      res.end();
    });
    const before = gateway.requestLog.filter((entry) => entry.path === "/v1/me").length;
    await expect(createClient({}, identity.runtime).request("get", "/v1/fx/convert", { query: { from: "EUR", to: "RON", amount: 1 } }))
      .rejects.toBeInstanceOf(RedirectRefusedError);
    expect(gateway.requestLog.filter((entry) => entry.path === "/v1/me").length).toBe(before);
  });

  test("preserves binary bodies byte for byte", async () => {
    const bytes = Uint8Array.from([0, 255, 1, 254, 128]);
    gateway.onResource("GET", "/v1/spv/documents/a%20b", (res) => {
      res.writeHead(200, { "Content-Type": "application/octet-stream" });
      res.end(bytes);
    });
    const response = await createClient({}, identity.runtime).request("get", "/v1/spv/documents/{id}", { path: { id: "a b" } });
    expect(response.body).toEqual(bytes);
  });

  test("maps the product envelope and unrecognised answers to typed errors", async () => {
    const client = createClient({}, identity.runtime);
    const missing = await client.company.get("999").catch((error: unknown) => error);
    expect(missing).toBeInstanceOf(ApiError);
    expect(missing).toMatchObject({ status: 404, code: "not_found" });

    gateway.onResource("GET", "/v1/company/502", (res) => {
      res.writeHead(502, { "Content-Type": "text/html" });
      res.end("<html>bad gateway</html>");
    });
    await expect(client.company.get("502")).rejects.toBeInstanceOf(UnexpectedResponseError);

  });

  test("a revoked credential surfaces as an OAuth invalid_client error", async () => {
    const revoked = await provision(gateway);
    try {
      const me = await createClient({}, revoked.runtime).me();
      const revokeUrl = (businessId: string): string =>
        `${gateway.origin}/api/admin/businesses/${businessId}/sdk-credentials/${me.authentication && "credentialId" in me.authentication ? me.authentication.credentialId : ""}/revoke`;
      const reason = JSON.stringify({ reason: "customer requested revocation" });
      expect((await fetch(revokeUrl("00000000-0000-4000-8000-000000000000"), { method: "POST", body: reason })).status).toBe(404);
      expect((await fetch(revokeUrl(me.businessId), { method: "POST", body: reason })).status).toBe(200);
      const error = await createClient({}, revoked.runtime).me().catch((caught: unknown) => caught);
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
    const client = createClient({}, identity.runtime);
    const controller = new AbortController();
    const pending = client.company.get("slow", { signal: controller.signal });
    setTimeout(() => controller.abort(), 50);
    await expect(pending).rejects.toBeInstanceOf(AbortedError);
    await expect(client.company.get("slow", { timeoutMs: 100 })).rejects.toBeInstanceOf(TimeoutError);
  });

  test("typed surface: advertised routes compile, unadvertised ones do not", () => {
    const client = createClient({}, identity.runtime);
    // Compile-time only: the thunks are never called.
    void (() => client.request("get", "/v1/company/{cui}", { path: { cui: "1" } }));
    // @ts-expect-error search is not advertised
    void (() => client.request("get", "/v1/search"));
    // @ts-expect-error a path parameter is required
    void (() => client.request("get", "/v1/company/{cui}"));
  });
});
