import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { clientEnv, enrollEnv, runSetup, scratch } from "./support.js";

/**
 * Vectors table line 57: "Generated and packed consumer exercises
 * OAuth, 403, binary → Runtime responses match export, no unsupported/private
 * surface published". Contract §7 exporter allowlist covers dist/, package.json,
 * README.md and LICENSE only.
 *
 * This test packs the SDK exactly as published (`npm pack` into a temp dir),
 * installs the tarball into a temp consumer project without network access, and
 * verifies ESM import + CJS require of the public exports plus a live call.
 */

const REPO = new URL("../..", import.meta.url).pathname;

let gateway: MockGateway;
beforeAll(async () => {
  gateway = await startMockGateway();
});
afterAll(() => gateway.close());

const sh = (args: string[], cwd: string, env?: Record<string, string>): { code: number; out: string; err: string } => {
  const run = Bun.spawnSync(args, { cwd, env: { ...process.env, ...env }, stdout: "pipe", stderr: "pipe" });
  expect(run.stdout).toBeDefined();
  expect(run.stderr).toBeDefined();
  return { code: run.exitCode, out: run.stdout.toString(), err: run.stderr.toString() };
};

describe("vector: packed consumer", () => {
  test("tarball publishes only dist/, package.json, README.md, LICENSE; ESM + CJS work offline", async () => {
    const root = mkdtempSync(join(tmpdir(), "easyapi-pack-"));
    const packDir = join(root, "pack");
    const consumer = join(root, "consumer");
    mkdirSync(packDir, { recursive: true });
    mkdirSync(consumer, { recursive: true });
    const box = scratch();
    const cleanup = (): void => {
      box.cleanup();
      rmSync(root, { recursive: true, force: true });
    };
    try {
      // 1. Pack exactly as published, into a temp dir.
      const pack = sh(["npm", "pack", "--pack-destination", packDir, "--silent"], REPO);
      expect(pack.code).toBe(0);
      const tarballName = pack.out.trim().split("\n").filter(Boolean).at(-1) ?? "";
      expect(tarballName).toMatch(/\.tgz$/);
      const tarball = join(packDir, tarballName);

      // 2. Nothing outside dist/, package.json, README.md, LICENSE is published.
      const list = sh(["tar", "-tzf", tarball], REPO);
      expect(list.code).toBe(0);
      const entries = list.out.split("\n").filter(Boolean);
      expect(entries.length).toBeGreaterThan(0);
      for (const entry of entries) {
        expect(entry.startsWith("package/")).toBe(true);
        const inner = entry.slice("package/".length);
        const allowed =
          inner === "" ||
          inner === "package.json" ||
          inner === "README.md" ||
          inner === "LICENSE" ||
          inner.startsWith("dist/");
        expect(allowed).toBe(true);
      }
      expect(entries.some((entry) => entry === "package/dist/esm/src/index.js")).toBe(true);
      expect(entries.some((entry) => entry === "package/dist/cjs/src/index.js")).toBe(true);
      for (const banned of ["package/src/", "package/scripts/", "package/contract/", "package/test/", "package/.ship/"]) {
        expect(entries.some((entry) => entry.startsWith(banned))).toBe(false);
      }

      // 3. Install the tarball into a temp consumer project without network.
      writeFileSync(join(consumer, "package.json"), JSON.stringify({ name: "packed-consumer", version: "0.0.0" }));
      const offline = sh(["npm", "install", "--offline", "--no-audit", "--no-fund", tarball], consumer);
      if (offline.code !== 0) {
        // npm's cache cannot satisfy zod offline: unpack the tarball and link the
        // repo's node_modules instead — still no network, still the packed bytes.
        mkdirSync(join(consumer, "node_modules", "@easyapi"), { recursive: true });
        expect(sh(["tar", "-xzf", tarball, "-C", join(consumer, "node_modules")], consumer).code).toBe(0);
        Bun.spawnSync(["mv", join(consumer, "node_modules", "package"), join(consumer, "node_modules", "@easyapi", "sdk")]);
        symlinkSync(join(REPO, "node_modules", "zod"), join(consumer, "node_modules", "zod"));
      }
      expect(existsSync(join(consumer, "node_modules", "@easyapi", "sdk", "package.json"))).toBe(true);

      // 4. A live identity for the consumer to call with.
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      gateway.onResource("GET", "/v1/company/43020532", (res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: { cui: "43020532", name: "Example SRL" } }));
      });

      // 5. ESM import of the public exports + a live authenticated call.
      writeFileSync(join(consumer, "check-esm.mjs"), [
        `import { createClient, ApiError, OAuthError, ConfigError } from "@easyapi/sdk";`,
        `if (typeof createClient !== "function") throw new Error("createClient missing");`,
        `for (const name of ["ApiError", "OAuthError", "ConfigError"]) {`,
        `  if (typeof (await import("@easyapi/sdk"))[name] !== "function") throw new Error(name + " missing");`,
        `}`,
        `const me = await createClient({}).me();`,
        `if (me?.authentication?.method !== "dpop") throw new Error("expected dpop me");`,
        `const company = await createClient({}).company.get("43020532");`,
        `if (company?.cui !== "43020532") throw new Error("expected company payload");`,
        `console.log("esm-ok " + me.businessName);`,
        ``,
      ].join("\n"));
      const esm = sh(["node", "check-esm.mjs"], consumer, clientEnv(box.dir, gateway.origin));
      expect(esm.err).toBe("");
      expect(esm.code).toBe(0);
      expect(esm.out).toMatch(/^esm-ok Mock Business SRL/m);

      // 6. CJS require of the public exports.
      writeFileSync(join(consumer, "check-cjs.cjs"), [
        `const sdk = require("@easyapi/sdk");`,
        `if (typeof sdk.createClient !== "function") throw new Error("createClient missing");`,
        `for (const name of ["ApiError", "OAuthError", "ConfigError", "SetupError", "NetworkError"]) {`,
        `  if (typeof sdk[name] !== "function") throw new Error(name + " missing");`,
        `}`,
        `console.log("cjs-ok");`,
        ``,
      ].join("\n"));
      const cjs = sh(["node", "check-cjs.cjs"], consumer, clientEnv(box.dir, gateway.origin));
      expect(cjs.err).toBe("");
      expect(cjs.code).toBe(0);
      expect(cjs.out).toMatch(/^cjs-ok/m);

      // 7. The packed manifest still exposes both entry points.
      const manifest = JSON.parse(readFileSync(join(consumer, "node_modules", "@easyapi", "sdk", "package.json"), "utf8")) as {
        main: string; module: string; exports: Record<string, unknown>;
      };
      expect(manifest.main).toContain("dist/cjs");
      expect(manifest.module).toContain("dist/esm");
      expect(Object.keys(manifest.exports)).toContain(".");
    } finally {
      cleanup();
    }
  }, { timeout: 120_000 });
});
