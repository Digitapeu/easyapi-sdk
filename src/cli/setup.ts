import { randomUUID } from "node:crypto";
import type { SdkProfile } from "../../contract/sdk-auth.js";
import { enroll } from "../auth-api.js";
import { ApiError, ConfigError, EasyApiError, OAuthError, SetupError } from "../errors.js";
import { acquireLock, writePrivateFile } from "../fsx.js";
import { DEFAULT_BASE_URL } from "../generated/metadata.js";
import { generateSigner, type Signer } from "../keys.js";
import {
  assertValidProfile,
  ensureConfigDirs,
  keyFilePath,
  readProfile,
  writeProfile,
  type ProfileLocation,
} from "../profile-store.js";
import { loadKeyFile, locateFromOptions, overrideOrigin, type ResolveOptions } from "../resolve.js";
import { Session } from "../session.js";
import type { CliContext } from "./context.js";
import { fetchMe, judgeIdentity, requireMatch } from "./me.js";

const API_KEY_PATTERN = /^[\x21-\x7E]{8,512}$/;

export async function runSetup(ctx: CliContext, options: ResolveOptions): Promise<void> {
  const location = locateFromOptions(options, ctx);
  ensureConfigDirs(location);
  const lock = acquireLock(location.lockPath, "easyapi setup");
  try {
    await setupLocked(ctx, location, overrideOrigin(options, ctx.env));
  } finally {
    lock.release();
  }
}

async function setupLocked(ctx: CliContext, location: ProfileLocation, originOverride: string | undefined): Promise<void> {
  const saved = readProfile(location);
  if (saved === null) return enrollFresh(ctx, location, originOverride ?? DEFAULT_BASE_URL);
  if (originOverride !== undefined && originOverride !== saved.publicOrigin) {
    throw new SetupError(
      `profile "${location.profileName}" is bound to ${saved.publicOrigin}, not ${originOverride}; ` +
        "use another --profile for a different API origin",
    );
  }
  return resumeSetup(ctx, location, saved);
}

async function obtainBootstrapKey(ctx: CliContext): Promise<string> {
  const fromEnv = ctx.env.EASYAPI_API_KEY;
  const entered = fromEnv !== undefined && fromEnv !== "" ? fromEnv : await ctx.io.readSecret("easyapi API key (input hidden): ");
  const key = entered.trim();
  if (!API_KEY_PATTERN.test(key)) throw new SetupError("that value does not look like an API key; nothing was saved");
  return key;
}

const sessionFor = (ctx: CliContext, profile: SdkProfile, signer: Signer): Session =>
  new Session({
    origin: profile.publicOrigin,
    credentialId: profile.credentialId,
    signer,
    timeoutMs: ctx.timeoutMs,
    ...(ctx.fetch === undefined ? {} : { fetch: ctx.fetch }),
    ...(ctx.now === undefined ? {} : { now: ctx.now }),
  });

async function enrollFresh(ctx: CliContext, location: ProfileLocation, origin: string): Promise<void> {
  // The bootstrap key is collected first so an aborted prompt leaves no orphan key behind.
  const bootstrapApiKey = await obtainBootstrapKey(ctx);
  const { signer, pkcs8Pem } = generateSigner();
  const credentialId = randomUUID();
  const profile = assertValidProfile({
    credentialId,
    publicOrigin: origin,
    privateKeyPath: keyFilePath(location, credentialId),
    publicKeyThumbprint: signer.thumbprint,
    status: "pending",
  });
  // Key first, then the pending profile, both durable before any network call: a lost response can
  // then resume with this exact identity instead of inventing a new one.
  writePrivateFile(profile.privateKeyPath, pkcs8Pem, { exclusive: true });
  writeProfile(location, profile);
  await enrollThenVerify(ctx, location, profile, signer, bootstrapApiKey);
}

async function enrollThenVerify(
  ctx: CliContext, location: ProfileLocation, profile: SdkProfile, signer: Signer, bootstrapApiKey: string,
): Promise<void> {
  try {
    const credential = await enroll({
      origin: profile.publicOrigin,
      credentialId: profile.credentialId,
      signer,
      bootstrapApiKey,
      fetch: ctx.fetch ?? ((input, init) => fetch(input, init)),
      now: ctx.now ?? Date.now,
      timeoutMs: ctx.timeoutMs,
    });
    if (credential.id !== profile.credentialId || credential.publicKeyThumbprint !== signer.thumbprint) {
      throw new SetupError("the server acknowledged a different credential than the one this setup registered; nothing was changed locally");
    }
  } catch (error) {
    throw explainEnrollmentFailure(error, location);
  }
  await verifyAndFinish(ctx, location, profile, signer);
}

async function resumeSetup(ctx: CliContext, location: ProfileLocation, profile: SdkProfile): Promise<void> {
  const signer = loadKeyFile(profile.privateKeyPath, ctx.cwd);
  if (signer.thumbprint !== profile.publicKeyThumbprint) {
    throw new ConfigError(`${profile.privateKeyPath} does not match the fingerprint saved in profile "${location.profileName}"`);
  }
  try {
    await verifyAndFinish(ctx, location, profile, signer);
    return;
  } catch (error) {
    // Only "unknown client" can mean the enrollment never committed; every other failure is ambiguous.
    const notEnrolledOrRejected = error instanceof OAuthError && error.error === "invalid_client";
    if (profile.status === "verified" || !notEnrolledOrRejected) throw explainVerificationFailure(error, location, profile.status);
  }
  const bootstrapApiKey = await obtainBootstrapKey(ctx);
  await enrollThenVerify(ctx, location, profile, signer, bootstrapApiKey);
}

/** Token exchange, then /v1/me, then the two profile writes of the contract (generation, then verified). */
async function verifyAndFinish(ctx: CliContext, location: ProfileLocation, profile: SdkProfile, signer: Signer): Promise<void> {
  const me = await fetchMe(sessionFor(ctx, profile, signer));
  const generation = requireMatch(
    judgeIdentity(me, {
      credentialId: profile.credentialId,
      thumbprint: signer.thumbprint,
      ...(profile.generation === undefined ? {} : { generation: profile.generation }),
    }),
  );
  if (profile.generation !== generation) writeProfile(location, { ...profile, generation, status: "pending" });
  if (profile.status !== "verified") writeProfile(location, { ...profile, generation, status: "verified" });
  ctx.io.out(
    `${profile.status === "verified" ? "Already set up" : "Setup complete"}: profile "${location.profileName}", ` +
      `credential ${profile.credentialId}, generation ${generation}, business "${me.businessName}", tier ${me.tier.code}`,
  );
}

function explainEnrollmentFailure(error: unknown, location: ProfileLocation): Error {
  if (error instanceof SetupError) return error;
  const kept = `Your signer and profile were kept (${location.profilePath}).`;
  if (error instanceof ApiError && error.status === 401) {
    return new SetupError(
      "enrollment was rejected: the API key is unknown or revoked, or this host is outside the key's IP allowlist. " +
        `Check the key and its allowlist, then run \`easyapi setup\` again. ${kept}`,
    );
  }
  if (error instanceof ApiError && error.status === 409) {
    return new SetupError(
      "enrollment conflict: this API key is already bound to a different signer, or the credential ID is taken. " +
        `Create a new dedicated API key in the dashboard and run \`easyapi setup --profile <new-name>\`. ${kept}`,
    );
  }
  if (error instanceof ApiError && error.status === 429) {
    return new SetupError(`enrollment is rate limited; wait ${error.retryAfterSeconds ?? 60} seconds and run \`easyapi setup\` again. ${kept}`);
  }
  return new SetupError(
    `enrollment did not complete and its outcome is unknown (${describe(error)}). ` +
      `Run \`easyapi setup\` again to resume with the same identity. ${kept}`,
  );
}

function explainVerificationFailure(error: unknown, location: ProfileLocation, status: SdkProfile["status"]): Error {
  if (error instanceof SetupError) return error;
  const kept = `Your signer and profile were kept (${location.profilePath}).`;
  if (error instanceof OAuthError && error.error === "invalid_client") {
    return new SetupError(
      "the server no longer accepts this credential (revoked, suspended, or this host is outside the key's IP allowlist). " +
        `Create a new dedicated API key and run \`easyapi setup --profile <new-name>\`. ${kept}`,
    );
  }
  const next = status === "verified" ? "Retry `easyapi status`." : "Run `easyapi setup` again to resume.";
  return new SetupError(`verification did not complete (${describe(error)}). ${next} ${kept}`);
}

const describe = (error: unknown): string => (error instanceof EasyApiError ? error.message : "unexpected error");
