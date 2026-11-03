import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { startMockGateway, type MockGateway } from "../harness/mock-gateway.js";
import { companyData } from "../helpers.js";
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
// The published name comes from the manifest, not from a literal in this file.
const PACKAGE_NAME = (JSON.parse(readFileSync(join(REPO, "package.json"), "utf8")) as { name: string }).name;

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

/** The consumer calls the in-process gateway, so the parent event loop must stay free while it runs. */
const shAsync = async (args: string[], cwd: string, env?: Record<string, string>): Promise<{ code: number; out: string; err: string }> => {
  const child = Bun.spawn(args, { cwd, env: { ...process.env, ...env }, stdout: "pipe", stderr: "pipe" });
  const [out, err, code] = await Promise.all([new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited]);
  return { code, out, err };
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
      expect(entries.some((entry) => entry === "package/dist/esm/index.js")).toBe(true);
      expect(entries.some((entry) => entry === "package/dist/commonjs/index.js")).toBe(true);
      for (const banned of ["package/src/", "package/scripts/", "package/contract/", "package/test/", "package/.ship/"]) {
        expect(entries.some((entry) => entry.startsWith(banned))).toBe(false);
      }

      // 3. Install the tarball into a temp consumer project without network.
      writeFileSync(join(consumer, "package.json"), JSON.stringify({ name: "packed-consumer", version: "0.0.0" }));
      const installed = join(consumer, "node_modules", PACKAGE_NAME);
      const offline = sh(["npm", "install", "--offline", "--no-audit", "--no-fund", tarball], consumer);
      if (offline.code !== 0) {
        // npm's cache cannot satisfy zod offline: unpack the tarball and link the
        // repo's node_modules instead — still no network, still the packed bytes.
        mkdirSync(join(consumer, "node_modules", dirname(PACKAGE_NAME)), { recursive: true });
        expect(sh(["tar", "-xzf", tarball, "-C", join(consumer, "node_modules")], consumer).code).toBe(0);
        Bun.spawnSync(["mv", join(consumer, "node_modules", "package"), installed]);
        symlinkSync(join(REPO, "node_modules", "zod"), join(consumer, "node_modules", "zod"));
      }
      expect(existsSync(join(installed, "package.json"))).toBe(true);

      // 4. A live identity for the consumer to call with.
      expect((await runSetup(enrollEnv(gateway, box.dir))).code).toBe(0);
      gateway.onResource("GET", "/v1/company/43020532", (res) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: companyData("43020532") }));
      });

      // 5. ESM import of the public exports + a live authenticated call.
      writeFileSync(join(consumer, "check-esm.mjs"), [
        `import * as sdk from "${PACKAGE_NAME}";`,
        `for (const name of ["fromMachineCredential", "OAuthError", "ConfigError"]) {`,
        `  if (typeof sdk[name] !== "function") throw new Error(name + " missing");`,
        `}`,
        `const client = await sdk.fromMachineCredential();`,
        `const me = (await client.me.get()).result.data;`,
        `if (me.authentication.method !== "dpop") throw new Error("expected dpop me");`,
        `const company = (await client.company.get("43020532")).result.data;`,
        `if (company.cui !== "43020532") throw new Error("expected company payload");`,
        `console.log("esm-ok " + me.businessName);`,
        ``,
      ].join("\n"));
      const esm = await shAsync(["node", "check-esm.mjs"], consumer, clientEnv(box.dir, gateway.origin));
      expect(esm.err).toBe("");
      expect(esm.code).toBe(0);
      expect(esm.out).toMatch(/^esm-ok Mock Business SRL/m);

      // 6. CJS require of the public exports, then the same live call through the CJS build.
      writeFileSync(join(consumer, "check-cjs.cjs"), [
        `const sdk = require("${PACKAGE_NAME}");`,
        `for (const name of ["fromMachineCredential", "OAuthError", "ConfigError", "SetupError", "NetworkError"]) {`,
        `  if (typeof sdk[name] !== "function") throw new Error(name + " missing");`,
        `}`,
        `sdk.fromMachineCredential().then((client) => client.me.get()).then((response) => {`,
        `  if (response.result.data.authentication.method !== "dpop") throw new Error("expected dpop me");`,
        `  console.log("cjs-ok");`,
        `});`,
        ``,
      ].join("\n"));
      const cjs = await shAsync(["node", "check-cjs.cjs"], consumer, clientEnv(box.dir, gateway.origin));
      expect(cjs.err).toBe("");
      expect(cjs.code).toBe(0);
      expect(cjs.out).toMatch(/^cjs-ok/m);

      // 7. The packed manifest still exposes both entry points.
      const manifest = JSON.parse(readFileSync(join(installed, "package.json"), "utf8")) as {
        main: string; module: string; exports: Record<string, unknown>;
      };
      expect(manifest.main).toContain("dist/commonjs");
      expect(manifest.module).toContain("dist/esm");
      expect(Object.keys(manifest.exports)).toContain(".");
    } finally {
      cleanup();
    }
  }, { timeout: 120_000 });
});
