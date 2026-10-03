// Runs the BUILT CLI under Node against the offline harness: setup -> status -> rotate -> status.
// Requires `bun run build` first. Exit code is non-zero on the first failing step.
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline";

const cli = new URL("../dist/esm/cli/bin.js", import.meta.url).pathname;
const server = spawn("bun", [new URL("../test/harness/serve.ts", import.meta.url).pathname], { stdio: ["ignore", "pipe", "inherit"] });
const workdir = mkdtempSync(join(tmpdir(), "easyapi-e2e-"));

try {
  const line = await new Promise((resolve, reject) => {
    createInterface({ input: server.stdout }).once("line", resolve);
    server.once("exit", () => reject(new Error("harness exited early")));
  });
  const { origin, apiKey } = JSON.parse(line);
  const env = { ...process.env, EASYAPI_CONFIG_DIR: join(workdir, "config"), EASYAPI_BASE_URL: origin };
  const step = (name, args, extraEnv = {}) => {
    const result = spawnSync(process.execPath, [cli, ...args], { env: { ...env, ...extraEnv }, encoding: "utf8" });
    console.log(`[${name}] exit ${result.status}\n${result.stdout}${result.stderr}`);
    if (result.status !== 0) throw new Error(`step "${name}" failed`);
  };
  step("setup", ["setup"], { EASYAPI_API_KEY: apiKey });
  step("status", ["status"]);
  step("rotate", ["rotate"]);
  step("status after rotate", ["status"]);
  console.log(`e2e ok under node ${process.version}`);
} finally {
  server.kill("SIGTERM");
  rmSync(workdir, { recursive: true, force: true });
}
