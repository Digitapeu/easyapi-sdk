import { existsSync, readFileSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { createClient } from "../src/index.js";
import { runCli } from "../src/cli/main.js";
import { cliRun, tempConfigDir } from "./helpers.js";
import { startMockGateway, type MockGateway } from "./harness/mock-gateway.js";

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

const readProfileJson = (dir: string) => JSON.parse(readFileSync(`${dir}/profiles/default.json`, "utf8")) as Record<string, unknown>;

describe("harness smoke: setup -> token -> /v1/me -> rotate", () => {
  test("full flow, offline", async () => {
    const config = tempConfigDir();
    try {
      const env = { EASYAPI_API_KEY: gateway.createParentKey(), EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: gateway.origin };
      const setup = cliRun(env);
      expect(await runCli(["setup"], setup.ctx)).toBe(0);
      const profile = readProfileJson(config.dir);
      expect(profile).toMatchObject({ status: "verified", generation: 1, publicOrigin: gateway.origin });
      expect(JSON.stringify(profile)).not.toContain(env.EASYAPI_API_KEY);

      const status = cliRun(env);
      expect(await runCli(["status"], status.ctx)).toBe(0);

      const runtime = { env, cwd: process.cwd(), platform: process.platform };
      const client = createClient({}, runtime);
      const me = await client.me();
      expect(me.authentication).toMatchObject({ method: "dpop", generation: 1 });

      const oldKeyPath = profile.privateKeyPath as string;
      expect(await runCli(["rotate"], cliRun(env).ctx)).toBe(0);
      const rotated = readProfileJson(config.dir);
      expect(rotated).toMatchObject({ status: "verified", generation: 2 });
      expect(rotated.publicKeyThumbprint).not.toBe(profile.publicKeyThumbprint);
      expect(rotated.pendingRotation).toBeUndefined();
      expect(existsSync(oldKeyPath)).toBe(false);

      // A fresh client picks up the rotated key from the profile; the old client's token died with the old signer.
      const afterRotation = await createClient({}, runtime).me();
      expect(afterRotation.authentication).toMatchObject({ method: "dpop", generation: 2 });
    } finally {
      config.cleanup();
    }
  });

  test("a lost enrollment response resumes from saved state without the bootstrap key", async () => {
    const config = tempConfigDir();
    try {
      const env = { EASYAPI_API_KEY: gateway.createParentKey(), EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: gateway.origin };
      gateway.dropNextResponse("enroll");
      const first = cliRun(env);
      expect(await runCli(["setup"], first.ctx)).toBe(1);
      expect(first.stderr.join("\n")).toContain("run `easyapi setup` again");
      expect(first.stderr.join("\n")).not.toContain(env.EASYAPI_API_KEY);
      const pending = readProfileJson(config.dir);
      expect(pending.status).toBe("pending");

      const { EASYAPI_API_KEY: _dropped, ...withoutKey } = env;
      expect(await runCli(["setup"], cliRun(withoutKey).ctx)).toBe(0);
      const done = readProfileJson(config.dir);
      expect(done).toMatchObject({ status: "verified", credentialId: pending.credentialId, privateKeyPath: pending.privateKeyPath });
    } finally {
      config.cleanup();
    }
  });

  test("a lost rotation response is recovered by verifying the new key", async () => {
    const config = tempConfigDir();
    try {
      const env = { EASYAPI_API_KEY: gateway.createParentKey(), EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: gateway.origin };
      expect(await runCli(["setup"], cliRun(env).ctx)).toBe(0);
      gateway.dropNextResponse("rotate");
      expect(await runCli(["rotate"], cliRun(env).ctx)).toBe(0);
      expect(readProfileJson(config.dir)).toMatchObject({ status: "verified", generation: 2 });
    } finally {
      config.cleanup();
    }
  });

  test("examples/first-request.ts runs against the harness", async () => {
    const config = tempConfigDir();
    try {
      const env = { EASYAPI_API_KEY: gateway.createParentKey(), EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: gateway.origin };
      expect(await runCli(["setup"], cliRun(env).ctx)).toBe(0);
      gateway.onResource("GET", "/v1/company/43020532", (res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: { cui: "43020532", name: "Example SRL", vat: { vatActive: true } } }));
      });
      const { EASYAPI_API_KEY: _bootstrap, ...clientEnv } = env;
      const run = Bun.spawnSync(["bun", "examples/first-request.ts"], { env: { ...process.env, ...clientEnv }, cwd: new URL("..", import.meta.url).pathname });
      expect(String(run.stderr)).toBe("");
      expect(run.stdout.toString()).toContain("Mock Business SRL on tier pro");
      expect(run.stdout.toString()).toContain("Example SRL (VAT active: true)");
    } finally {
      config.cleanup();
    }
  });
});
