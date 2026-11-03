import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { runCli } from "../src/cli/main.js";
import { cliRun, machineClient, tempConfigDir } from "./helpers.js";
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
      const me = (await machineClient(runtime).me.get()).result.data;
      expect(me.authentication).toMatchObject({ method: "dpop", generation: 1 });

      const oldKeyPath = profile.privateKeyPath as string;
      expect(await runCli(["rotate"], cliRun(env).ctx)).toBe(0);
      const rotated = readProfileJson(config.dir);
      expect(rotated).toMatchObject({ status: "verified", generation: 2 });
      expect(rotated.publicKeyThumbprint).not.toBe(profile.publicKeyThumbprint);
      expect(rotated.pendingRotation).toBeUndefined();
      expect(existsSync(oldKeyPath)).toBe(false);

      // A fresh client picks up the rotated key from the profile; the old client's token died with the old signer.
      const afterRotation = (await machineClient(runtime).me.get()).result.data;
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
      expect(first.stderr.join("\n")).toMatch(/run `easyapi setup` again/i);
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
      gateway.onResource("GET", "/v1/company/43020532/vat-status", (res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: { cui: "43020532", vatActive: true, vatOnPayment: false, vatNumber: "RO43020532", active: true, checkedAt: "2026-11-03T12:00:00.000Z" } }));
      });
      const { EASYAPI_API_KEY: _bootstrap, ...clientEnv } = env;
      // The example imports the package by name: give it a throwaway project whose node_modules links to this one.
      const repo = new URL("..", import.meta.url).pathname;
      const project = mkdtempSync(join(tmpdir(), "easyapi-example-"));
      try {
        mkdirSync(join(project, "node_modules", "@digitap.eu"), { recursive: true });
        symlinkSync(repo, join(project, "node_modules", "@digitap.eu", "easyapi"));
        cpSync(join(repo, "examples", "first-request.ts"), join(project, "first-request.ts"));
        // Async spawn: the gateway lives in this process and must keep answering while the example runs.
        const child = Bun.spawn(["bun", "first-request.ts"], { env: { ...process.env, ...clientEnv }, cwd: project, stdout: "pipe", stderr: "pipe" });
        const [stdout, stderr] = await Promise.all([new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited]);
        expect(stderr).toBe("");
        expect(stdout).toContain("Mock Business SRL on tier pro");
        expect(stdout).toContain("vatActive: true");
      } finally {
        rmSync(project, { recursive: true, force: true });
      }
    } finally {
      config.cleanup();
    }
  });
});
