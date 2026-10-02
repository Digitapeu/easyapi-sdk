import { dirname } from "node:path";
import type { SdkProfile } from "../../contract/sdk-auth.js";
import { parseCredentialEnvelope } from "../auth-api.js";
import { ApiError, ConfigError, EasyApiError, OAuthError, SetupError } from "../errors.js";
import { acquireLock, removePrivateFile, writePrivateFile } from "../fsx.js";
import { generateSigner, type Signer } from "../keys.js";
import { ensureConfigDirs, keyFilePath, readProfile, writeProfile, type ProfileLocation } from "../profile-store.js";
import { rotatePath, rotationProofs } from "../proofs.js";
import { loadKeyFile, locateFromOptions, type ResolveOptions } from "../resolve.js";
import { Session } from "../session.js";
import type { CliContext } from "./context.js";
import { fetchMe, judgeIdentity } from "./me.js";

type Verified = SdkProfile & { generation: number };

export async function runRotate(ctx: CliContext, options: ResolveOptions): Promise<void> {
  const location = locateFromOptions(options, ctx);
  ensureConfigDirs(location);
  const lock = acquireLock(location.lockPath, "easyapi command for this profile");
  try {
    await rotateLocked(ctx, location);
  } finally {
    lock.release();
  }
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

/** Does this signer authenticate at exactly this generation? "unknown" covers anything inconclusive. */
async function probe(session: Session, profile: SdkProfile, signer: Signer, generation: number): Promise<"match" | "mismatch" | "unknown"> {
  try {
    const verdict = judgeIdentity(await fetchMe(session), { credentialId: profile.credentialId, thumbprint: signer.thumbprint, generation });
    return verdict.kind;
  } catch (error) {
    const rejected = (error instanceof OAuthError && (error.error === "invalid_client" || error.error === "invalid_dpop_proof")) ||
      (error instanceof ApiError && error.status === 401);
    return rejected ? "mismatch" : "unknown";
  }
}

async function rotateLocked(ctx: CliContext, location: ProfileLocation): Promise<void> {
  const profile = readProfile(location);
  if (profile === null || profile.status !== "verified" || profile.generation === undefined) {
    throw new SetupError(`profile "${location.profileName}" is not set up and verified; run: easyapi setup`);
  }
  const current: Verified = { ...profile, generation: profile.generation };
  const oldSigner = loadKeyFile(current.privateKeyPath, ctx.cwd);
  if (oldSigner.thumbprint !== current.publicKeyThumbprint) {
    throw new ConfigError(`${current.privateKeyPath} does not match the fingerprint saved in profile "${location.profileName}"`);
  }

  const resumed = current.pendingRotation !== undefined;
  const candidate = resumed ? loadCandidate(ctx, current) : startCandidate(location, current);
  const nextGeneration = current.generation + 1;
  const kept = `Both keys and the profile were kept (${location.profilePath}); run \`easyapi rotate\` again to resume.`;

  // A previous run may have committed on the server and then lost the response.
  if (resumed && await probe(sessionFor(ctx, current, candidate.signer), current, candidate.signer, nextGeneration) === "match") {
    return finalize(ctx, location, current, candidate, nextGeneration);
  }

  const oldSession = sessionFor(ctx, current, oldSigner);
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      await postRotation(ctx, oldSession, current, oldSigner, candidate.signer);
    } catch (error) {
      if (error instanceof ApiError && error.status === 409) {
        // Another rotation may have won, or ours committed earlier: only the new key can tell.
        if (await probe(sessionFor(ctx, current, candidate.signer), current, candidate.signer, nextGeneration) === "match") break;
        throw new SetupError(`rotation conflict: the credential changed on the server (${error.message}). ${kept}`);
      }
      // Even a 4xx is not trusted on its own: the runtime may have replayed a request the server had
      // already committed, and the replay is what got rejected. Authenticated state decides.
      if (await probe(sessionFor(ctx, current, candidate.signer), current, candidate.signer, nextGeneration) === "match") break;
      if (error instanceof ApiError && error.status < 500 && error.status !== 429) {
        throw new SetupError(`rotation was rejected (${error.code}: ${error.message}). ${kept}`);
      }
      const oldStillCurrent = await probe(sessionFor(ctx, current, oldSigner), current, oldSigner, current.generation) === "match";
      if (oldStillCurrent && attempt === 0) continue;
      throw new SetupError(`rotation outcome is unknown (${describe(error)}). ${kept}`);
    }
    break;
  }

  if (await probe(sessionFor(ctx, current, candidate.signer), current, candidate.signer, nextGeneration) !== "match") {
    throw new SetupError(`the new key was not accepted at generation ${nextGeneration}. ${kept}`);
  }
  finalize(ctx, location, current, candidate, nextGeneration);
}

interface Candidate {
  signer: Signer;
  path: string;
}

/** Persists the candidate key and `pendingRotation` before any request, so a lost response is recoverable. */
function startCandidate(location: ProfileLocation, current: Verified): Candidate {
  const { signer, pkcs8Pem } = generateSigner();
  const path = keyFilePath(location, current.credentialId, current.generation + 1);
  const withPending: SdkProfile = {
    ...current,
    pendingRotation: { expectedGeneration: current.generation, privateKeyPath: path, publicKeyThumbprint: signer.thumbprint },
  };
  writePrivateFile(path, pkcs8Pem, { exclusive: true });
  writeProfile(location, withPending);
  return { signer, path };
}

function loadCandidate(ctx: CliContext, current: Verified): Candidate {
  const pending = current.pendingRotation as NonNullable<SdkProfile["pendingRotation"]>;
  const signer = loadKeyFile(pending.privateKeyPath, ctx.cwd);
  if (signer.thumbprint !== pending.publicKeyThumbprint) {
    throw new ConfigError(`${pending.privateKeyPath} does not match the fingerprint saved for the pending rotation`);
  }
  return { signer, path: pending.privateKeyPath };
}

async function postRotation(ctx: CliContext, oldSession: Session, current: Verified, oldSigner: Signer, newSigner: Signer): Promise<void> {
  const proofs = rotationProofs(oldSigner, newSigner, {
    origin: current.publicOrigin,
    credentialId: current.credentialId,
    expectedGeneration: current.generation,
    now: ctx.now ?? Date.now,
  });
  const response = await oldSession.request({
    method: "POST",
    rawPath: rotatePath(current.credentialId),
    body: { expectedGeneration: current.generation, publicKey: newSigner.publicJwk, ...proofs },
  });
  const credential = parseCredentialEnvelope(response.body);
  if (credential.generation !== current.generation + 1 || credential.publicKeyThumbprint !== newSigner.thumbprint) {
    throw new SetupError("the server acknowledged a different rotation than the one requested");
  }
}

/** The single atomic profile replacement of the contract: key path, fingerprint and generation swap together. */
function finalize(ctx: CliContext, location: ProfileLocation, current: Verified, candidate: Candidate, generation: number): void {
  writeProfile(location, {
    credentialId: current.credentialId,
    publicOrigin: current.publicOrigin,
    privateKeyPath: candidate.path,
    publicKeyThumbprint: candidate.signer.thumbprint,
    status: "verified",
    generation,
  });
  // The old signer is dead on the server (no overlap window); only delete files this CLI manages.
  if (dirname(current.privateKeyPath) === location.keysDir && current.privateKeyPath !== candidate.path) {
    try {
      removePrivateFile(current.privateKeyPath);
    } catch {
      ctx.io.err(`warning: could not remove the retired key file ${current.privateKeyPath}`);
    }
  }
  ctx.io.out(`Rotated: profile "${location.profileName}", credential ${current.credentialId}, generation ${generation - 1} -> ${generation}`);
}

const describe = (error: unknown): string => (error instanceof EasyApiError ? error.message : "unexpected error");
