import { homedir } from "node:os";
import { join, resolve } from "node:path";
import { SdkProfileNameSchema, SdkProfileSchema, type SdkProfile } from "./contract/sdk-auth.js";
import { ConfigError } from "./errors.js";
import { ensurePrivateDir, readPrivateFile, writePrivateFile } from "./fsx.js";

export interface ProfileLocation {
  profileName: string;
  configRoot: string;
  profilePath: string;
  lockPath: string;
  keysDir: string;
}

/** XDG on Linux and other POSIX systems, Application Support on macOS. Windows is rejected by contract. */
export function defaultConfigRoot(env: NodeJS.ProcessEnv, platform: NodeJS.Platform, home = homedir()): string {
  if (platform === "win32") {
    throw new ConfigError("Windows is not supported yet: key and profile files cannot be protected by POSIX permissions");
  }
  if (platform === "darwin") return join(home, "Library", "Application Support", "easyapi");
  const xdg = env["XDG_CONFIG_HOME"];
  // XDG says a relative value is invalid and must be ignored.
  return join(xdg !== undefined && xdg.startsWith("/") ? xdg : join(home, ".config"), "easyapi");
}

export function locateProfile(input: { profileName: string; configRoot: string; cwd: string }): ProfileLocation {
  if (!SdkProfileNameSchema.safeParse(input.profileName).success) {
    throw new ConfigError("profile names use letters, digits, '_' and '-' only (1-64 characters, not starting with '_' or '-')");
  }
  // Explicit overrides are resolved from the caller's working directory and stored absolute.
  const configRoot = resolve(input.cwd, input.configRoot);
  const profilesDir = join(configRoot, "profiles");
  return {
    profileName: input.profileName,
    configRoot,
    profilePath: join(profilesDir, `${input.profileName}.json`),
    lockPath: join(profilesDir, `${input.profileName}.lock`),
    keysDir: join(configRoot, "keys"),
  };
}

export function ensureConfigDirs(location: ProfileLocation): void {
  ensurePrivateDir(location.configRoot);
  ensurePrivateDir(join(location.configRoot, "profiles"));
  ensurePrivateDir(location.keysDir);
}

export function keyFilePath(location: ProfileLocation, credentialId: string, generation = 1): string {
  return join(location.keysDir, generation === 1 ? `${credentialId}.pem` : `${credentialId}.g${generation}.pem`);
}

export function readProfile(location: ProfileLocation): SdkProfile | null {
  const raw = readPrivateFile(location.profilePath);
  if (raw === null) return null;
  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    throw new ConfigError(`${location.profilePath} is not valid JSON; fix or remove it (the key file is not touched)`);
  }
  const parsed = SdkProfileSchema.safeParse(json);
  if (!parsed.success) {
    throw new ConfigError(`${location.profilePath} is invalid (${describeIssues(parsed.error)})`);
  }
  return parsed.data;
}

const describeIssues = (error: { issues: { path: (string | number)[]; message: string }[] }): string =>
  error.issues.map((issue) => `${issue.path.join(".") || "profile"}: ${issue.message}`).join("; ");

/** Validates against the contract schema, so a rejected profile (e.g. a relative key path) never reaches the disk. */
export function assertValidProfile(profile: SdkProfile): SdkProfile {
  const parsed = SdkProfileSchema.safeParse(profile);
  if (!parsed.success) throw new ConfigError(`refusing to use an invalid profile (${describeIssues(parsed.error)})`);
  return parsed.data;
}

export function writeProfile(location: ProfileLocation, profile: SdkProfile): void {
  writePrivateFile(location.profilePath, `${JSON.stringify(assertValidProfile(profile), null, 2)}\n`);
}
