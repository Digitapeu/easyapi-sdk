import { chmodSync, mkdirSync, symlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";
import { ConfigError } from "../src/errors.js";
import { generateSigner } from "../src/keys.js";
import { defaultConfigRoot, keyFilePath, locateProfile, writeProfile } from "../src/profile-store.js";
import { ensureConfigDirs } from "../src/profile-store.js";
import { writePrivateFile } from "../src/fsx.js";
import { resolveIdentity, type Runtime } from "../src/resolve.js";
import { tempConfigDir } from "./helpers.js";

const credentialId = "0b0f7b3e-5c3e-4a55-9c1e-2a6f0f6f9d11";
const otherCredentialId = "1c1f7b3e-5c3e-4a55-9c1e-2a6f0f6f9d22";

function savedProfile(dir: string, origin = "https://profile.example.test") {
  const location = locateProfile({ profileName: "default", configRoot: dir, cwd: process.cwd() });
  ensureConfigDirs(location);
  const { signer, pkcs8Pem } = generateSigner();
  const privateKeyPath = keyFilePath(location, credentialId);
  writePrivateFile(privateKeyPath, pkcs8Pem, { exclusive: true });
  writeProfile(location, { credentialId, publicOrigin: origin, privateKeyPath, publicKeyThumbprint: signer.thumbprint, status: "verified", generation: 1 });
  return { location, signer, privateKeyPath, pkcs8Pem };
}
const runtime = (env: Record<string, string>): Runtime => ({ env, cwd: process.cwd(), platform: process.platform });

describe("config roots", () => {
  test("Linux honours an absolute XDG_CONFIG_HOME, macOS uses Application Support, Windows is rejected", () => {
    expect(defaultConfigRoot({ XDG_CONFIG_HOME: "/x" }, "linux", "/home/u")).toBe("/x/easyapi");
    expect(defaultConfigRoot({ XDG_CONFIG_HOME: "relative" }, "linux", "/home/u")).toBe("/home/u/.config/easyapi");
    expect(defaultConfigRoot({}, "darwin", "/Users/u")).toBe("/Users/u/Library/Application Support/easyapi");
    expect(() => defaultConfigRoot({}, "win32", "C:\\Users\\u")).toThrow(ConfigError);
  });

  test("profile names cannot traverse", () => {
    for (const name of ["../x", "a/b", "", "-a", "a".repeat(65)]) {
      expect(() => locateProfile({ profileName: name, configRoot: "/c", cwd: "/" })).toThrow(ConfigError);
    }
  });
});

describe("resolveIdentity precedence", () => {
  test("profile supplies identity and origin; env then explicit options override the origin", () => {
    const config = tempConfigDir();
    try {
      const { signer } = savedProfile(config.dir);
      const base = { EASYAPI_CONFIG_DIR: config.dir };
      expect(resolveIdentity({}, runtime(base))).toMatchObject({ credentialId, baseUrl: "https://profile.example.test" });
      expect(resolveIdentity({}, runtime({ ...base, EASYAPI_BASE_URL: "https://env.example.test" })).baseUrl).toBe("https://env.example.test");
      expect(resolveIdentity({ baseUrl: "https://opt.example.test" }, runtime({ ...base, EASYAPI_BASE_URL: "https://env.example.test" })).baseUrl)
        .toBe("https://opt.example.test");
      expect(resolveIdentity({}, runtime(base)).signer.thumbprint).toBe(signer.thumbprint);
    } finally {
      config.cleanup();
    }
  });

  test("a credential ID and a key are overridden together, never half", () => {
    const config = tempConfigDir();
    try {
      const { privateKeyPath } = savedProfile(config.dir);
      const base = { EASYAPI_CONFIG_DIR: config.dir };
      expect(() => resolveIdentity({ credentialId: otherCredentialId }, runtime(base))).toThrow(ConfigError);
      expect(() => resolveIdentity({ privateKeyPath }, runtime(base))).toThrow(ConfigError);
      expect(() => resolveIdentity({}, runtime({ ...base, EASYAPI_CREDENTIAL_ID: otherCredentialId }))).toThrow(ConfigError);
      const full = resolveIdentity({ credentialId: otherCredentialId, privateKeyPath }, runtime({ ...base, EASYAPI_BASE_URL: "http://localhost:8080" }));
      expect(full).toMatchObject({ credentialId: otherCredentialId, baseUrl: "http://localhost:8080" });
      expect(full.profile).toBeUndefined();
    } finally {
      config.cleanup();
    }
  });

  test("key material overrides work with an ID and need no key file", () => {
    const { signer, pkcs8Pem } = generateSigner();
    const config = tempConfigDir();
    const resolved = resolveIdentity({ credentialId, privateKey: pkcs8Pem }, runtime({ EASYAPI_CONFIG_DIR: config.dir }));
    expect(resolved.signer.thumbprint).toBe(signer.thumbprint);
    config.cleanup();
  });

  test("rejects a missing or unfinished profile, a bad origin and a key that does not match the profile", () => {
    const config = tempConfigDir();
    try {
      expect(() => resolveIdentity({}, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(/easyapi setup/);
      const { location } = savedProfile(config.dir);
      expect(() => resolveIdentity({ baseUrl: "https://x.example.test/" }, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(ConfigError);
      expect(() => resolveIdentity({ baseUrl: "http://example.test" }, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(ConfigError);
      const imposter = generateSigner().pkcs8Pem;
      writeFileSync(join(location.keysDir, `${credentialId}.pem`), imposter, { mode: 0o600 });
      expect(() => resolveIdentity({}, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(/fingerprint/);
    } finally {
      config.cleanup();
    }
  });

  test("refuses a key file that is group-readable or a symlink", () => {
    const config = tempConfigDir();
    try {
      const { location, privateKeyPath, pkcs8Pem } = savedProfile(config.dir);
      chmodSync(privateKeyPath, 0o640);
      expect(() => resolveIdentity({}, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(/mode 0600/);
      chmodSync(privateKeyPath, 0o600);
      const real = join(location.keysDir, "real.pem");
      writeFileSync(real, pkcs8Pem, { mode: 0o600 });
      mkdirSync(join(config.dir, "other"), { mode: 0o700 });
      const link = join(location.keysDir, "link.pem");
      symlinkSync(real, link);
      expect(() => resolveIdentity({ credentialId, privateKeyPath: link }, runtime({ EASYAPI_CONFIG_DIR: config.dir }))).toThrow(/symlink/);
    } finally {
      config.cleanup();
    }
  });
});
