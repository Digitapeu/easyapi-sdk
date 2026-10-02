import { resolveIdentity, type ResolveOptions } from "../resolve.js";
import { Session } from "../session.js";
import type { CliContext } from "./context.js";
import { fetchMe, judgeIdentity, requireMatch } from "./me.js";

/** Calls GET /v1/me with the resolved identity and prints what the server reports. */
export async function runStatus(ctx: CliContext, options: ResolveOptions): Promise<void> {
  const identity = resolveIdentity(options, ctx);
  const session = new Session({
    origin: identity.baseUrl,
    credentialId: identity.credentialId,
    signer: identity.signer,
    timeoutMs: ctx.timeoutMs,
    ...(ctx.fetch === undefined ? {} : { fetch: ctx.fetch }),
    ...(ctx.now === undefined ? {} : { now: ctx.now }),
  });
  const me = await fetchMe(session);
  const generation = requireMatch(judgeIdentity(me, { credentialId: identity.credentialId, thumbprint: identity.signer.thumbprint }));
  ctx.io.out(`profile:        ${identity.profile === undefined ? "(explicit credential)" : identity.location.profileName}`);
  ctx.io.out(`base URL:       ${identity.baseUrl}`);
  ctx.io.out(`credential:     ${identity.credentialId} (generation ${generation})`);
  ctx.io.out(`fingerprint:    ${identity.signer.thumbprint}`);
  ctx.io.out(`business:       ${me.businessName}`);
  ctx.io.out(`tier:           ${me.tier.code}`);
  ctx.io.out(`scopes:         ${me.scopes.join(", ") || "(none)"}`);
}
