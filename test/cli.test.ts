import { describe, expect, test } from "bun:test";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { runCli } from "../src/cli/main.js";
import { SDK_VERSION, DEFAULT_BASE_URL } from "../src/generated/metadata.js";
import { cliRun, tempConfigDir } from "./helpers.js";

describe("cli arguments", () => {
  test("the API key is never accepted on the command line", async () => {
    for (const args of [["setup", "--api-key", "secret"], ["setup", "--api-key=secret"], ["setup", "--apikey", "s"]]) {
      const run = cliRun({});
      expect(await runCli(args, run.ctx)).toBe(2);
      expect(run.stderr.join("\n")).toContain("EASYAPI_API_KEY");
      expect(run.stderr.join("\n")).not.toContain("secret");
    }
  });

  test("unknown commands and options are usage errors; help lists the commands", async () => {
    const unknown = cliRun({});
    expect(await runCli(["frobnicate"], unknown.ctx)).toBe(2);
    expect(await runCli(["setup", "--nope"], cliRun({}).ctx)).toBe(2);
    const help = cliRun({});
    expect(await runCli(["help"], help.ctx)).toBe(0);
    expect(help.stdout.join("\n")).toMatch(/setup[\s\S]*rotate[\s\S]*status[\s\S]*help/);
  });

  test("setup and rotate refuse identity overrides that only status understands", async () => {
    expect(await runCli(["setup", "--credential-id", "x"], cliRun({}).ctx)).toBe(2);
  });

  test("setup with no key source fails non-zero and leaves no key or profile behind", async () => {
    const config = tempConfigDir();
    try {
      const run = cliRun({ EASYAPI_CONFIG_DIR: config.dir, EASYAPI_BASE_URL: "http://127.0.0.1:1" });
      expect(await runCli(["setup"], run.ctx)).toBe(1);
      expect(run.stderr.join("\n")).toContain("prompt not available");
      expect(readdirSync(join(config.dir, "keys"))).toEqual([]);
      expect(readdirSync(join(config.dir, "profiles"))).toEqual([]);
    } finally {
      config.cleanup();
    }
  });
});

describe("package metadata", () => {
  test("the generated defaults match package.json", () => {
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8")) as { version: string; easyapi: { defaultBaseUrl: string } };
    expect(DEFAULT_BASE_URL).toBe(pkg.easyapi.defaultBaseUrl);
    expect(SDK_VERSION).toBe(pkg.version);
  });
});
