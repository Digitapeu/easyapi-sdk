import type { KeyObject } from "node:crypto";
import { resolve } from "node:path";
import {
  SdkCredentialIdSchema,
  SdkPublicOriginSchema,
  type SdkProfile,
} from "../contract/sdk-auth.js";
import { ConfigError } from "./errors.js";
import { readPrivateFile } from "./fsx.js";
import { signerFromKey, signerFromPem, type Signer } from "./keys.js";
import { DEFAULT_BASE_URL } from "./generated/metadata.js";
import { defaultConfigRoot, locateProfile, readProfile, type ProfileLocation } from "./profile-store.js";

export interface ResolveOptions {
  /** Profile name; default `default`. */
  profile?: string;
  configDir?: string;
  credentialId?: string;
  /** Path of a PKCS8 PEM; must be owned by the current user with mode 0600. */
  privateKeyPath?: string;
  /** PEM text or KeyObject, for deployments that inject the key from a secret store. */
  privateKey?: string | KeyObject;
  baseUrl?: string;
}

export interface Runtime {
  env: NodeJS.ProcessEnv;
  cwd: string;
  platform: NodeJS.Platform;
}

export const currentRuntime = (): Runtime => ({ env: process.env, cwd: process.cwd(), platform: process.platform });

export interface ResolvedIdentity {
  location: ProfileLocation;
  baseUrl: string;
  credentialId: string;
  signer: Signer;
  /** Present only when the identity came from a saved profile. */
  profile?: SdkProfile;
}

const nonEmpty = (value: string | undefined): string | undefined => (value === undefined || value === "" ? undefined : value);

export function parseOrigin(value: string): string {
  const parsed = SdkPublicOriginSchema.safeParse(value);
  if (!parsed.success) {
    throw new ConfigError(
      "the base URL must be an origin such as https://host with no path, query or trailing slash (http is allowed for localhost only)",
    );
  }
  return parsed.data;
}

/** Explicit option, then environment. The saved profile and package default are applied by the caller. */
export function overrideOrigin(options: ResolveOptions, env: NodeJS.ProcessEnv): string | undefined {
  const value = nonEmpty(options.baseUrl) ?? nonEmpty(env.EASYAPI_BASE_URL);
  return value === undefined ? undefined : parseOrigin(value);
}

export function locateFromOptions(options: ResolveOptions, runtime: Runtime): ProfileLocation {
  const { env, cwd, platform } = runtime;
  const configRoot = nonEmpty(options.configDir) ?? nonEmpty(env.EASYAPI_CONFIG_DIR) ?? defaultConfigRoot(env, platform);
  return locateProfile({
    profileName: nonEmpty(options.profile) ?? nonEmpty(env.EASYAPI_PROFILE) ?? "default",
    configRoot,
    cwd,
  });
}

export function loadKeyFile(path: string, cwd: string): Signer {
  const absolute = resolve(cwd, path);
  const pem = readPrivateFile(absolute);
  if (pem === null) {
    throw new ConfigError(
      `private key file ${absolute} does not exist; restore it, or create a new dedicated API key and run: easyapi setup --profile <new-name>`,
    );
  }
  return signerFromPem(pem);
}

/**
 * One resolver for the CLI and the SDK. Precedence per field is explicit option, then environment, then
 * the saved profile. A credential ID and its key are only ever overridden together, so half of an
 * override is never paired with an unrelated saved identity.
 */
export function resolveIdentity(options: ResolveOptions, runtime: Runtime = currentRuntime()): ResolvedIdentity {
  const { env, cwd } = runtime;
  const location = locateFromOptions(options, runtime);
  const idOverride = nonEmpty(options.credentialId) ?? nonEmpty(env.EASYAPI_CREDENTIAL_ID);
  const keyPathOverride = nonEmpty(options.privateKeyPath) ?? nonEmpty(env.EASYAPI_PRIVATE_KEY_PATH);
  const keyMaterial = options.privateKey;
  const hasKeyOverride = keyPathOverride !== undefined || keyMaterial !== undefined;
  const originOverride = overrideOrigin(options, env);

  if ((idOverride !== undefined) !== hasKeyOverride) {
    throw new ConfigError("the credential ID and the private key (path or key material) must be overridden together");
  }

  if (idOverride !== undefined) {
    const credentialId = SdkCredentialIdSchema.safeParse(idOverride);
    if (!credentialId.success) throw new ConfigError("the credential ID must be a lowercase UUIDv4");
    const signer =
      keyMaterial === undefined
        ? loadKeyFile(keyPathOverride as string, cwd)
        : typeof keyMaterial === "string"
          ? signerFromPem(keyMaterial)
          : signerFromKey(keyMaterial);
    return { location, baseUrl: originOverride ?? DEFAULT_BASE_URL, credentialId: credentialId.data, signer };
  }

  const profile = readProfile(location);
  if (profile === null) {
    throw new ConfigError(`no profile "${location.profileName}" found at ${location.profilePath}; run: easyapi setup`);
  }
  if (profile.status !== "verified") {
    throw new ConfigError(`setup of profile "${location.profileName}" is not finished; run: easyapi setup`);
  }
  const signer = loadKeyFile(profile.privateKeyPath, cwd);
  if (signer.thumbprint !== profile.publicKeyThumbprint) {
    throw new ConfigError(`the key file ${profile.privateKeyPath} does not match the fingerprint saved in profile "${location.profileName}"`);
  }
  return { location, baseUrl: originOverride ?? profile.publicOrigin, credentialId: profile.credentialId, signer, profile };
}
