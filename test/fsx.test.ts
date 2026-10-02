import { chmodSync, existsSync, mkdirSync, readFileSync, symlinkSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { ConfigError } from "../src/errors.js";
import { acquireLock, ensurePrivateDir, readPrivateFile, writePrivateFile } from "../src/fsx.js";
import { tempConfigDir } from "./helpers.js";

describe("private files", () => {
  test("directories are 0700 and a wider existing one is refused rather than silently fixed", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      chmodSync(config.dir, 0o755);
      expect(() => ensurePrivateDir(config.dir)).toThrow(/0700/);
    } finally {
      config.cleanup();
    }
  });

  test("a symlinked directory is refused", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      const real = join(config.dir, "real");
      mkdirSync(real, { mode: 0o700 });
      symlinkSync(real, join(config.dir, "link"));
      expect(() => ensurePrivateDir(join(config.dir, "link"))).toThrow(ConfigError);
    } finally {
      config.cleanup();
    }
  });

  test("exclusive writes never overwrite and leave no temp file behind", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      const target = join(config.dir, "key.pem");
      writePrivateFile(target, "first", { exclusive: true });
      expect(() => writePrivateFile(target, "second", { exclusive: true })).toThrow(/already exists/);
      expect(readFileSync(target, "utf8")).toBe("first");
      writePrivateFile(target, "third");
      expect(readPrivateFile(target)).toBe("third");
      expect(Bun.spawnSync(["ls", "-A", config.dir]).stdout.toString().trim()).toBe("key.pem");
    } finally {
      config.cleanup();
    }
  });

  test("refuses to replace a symlink target on atomic write", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      const victim = join(config.dir, "victim");
      writeFileSync(victim, "keep", { mode: 0o600 });
      symlinkSync(victim, join(config.dir, "profile.json"));
      expect(() => writePrivateFile(join(config.dir, "profile.json"), "x")).toThrow(ConfigError);
      expect(readFileSync(victim, "utf8")).toBe("keep");
    } finally {
      config.cleanup();
    }
  });
});

describe("lock file", () => {
  test("a live holder blocks, release frees, and a lock is never taken by age", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      const path = join(config.dir, "p.lock");
      const first = acquireLock(path, "setup");
      expect(() => acquireLock(path, "setup")).toThrow(/another setup/);
      first.release();
      expect(existsSync(path)).toBe(false);
      acquireLock(path, "setup").release();
    } finally {
      config.cleanup();
    }
  });

  test("a lock whose same-host owner is conclusively dead is reclaimed; unreadable ownership is not", () => {
    const config = tempConfigDir();
    try {
      ensurePrivateDir(config.dir);
      const path = join(config.dir, "p.lock");
      const dead = spawnSync(process.execPath, ["-e", "0"]);
      const host = require("node:os").hostname() as string;
      writeFileSync(path, JSON.stringify({ ownerId: "x", pid: dead.pid, host }), { mode: 0o600 });
      acquireLock(path, "setup").release();

      writeFileSync(path, "{broken", { mode: 0o600 });
      expect(() => acquireLock(path, "setup")).toThrow(/another setup/);
    } finally {
      config.cleanup();
    }
  });
});
