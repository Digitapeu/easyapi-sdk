import { z } from "zod";
import { MeAuthenticationSchema } from "../../contract/sdk-auth.js";
import { SetupError, UnexpectedResponseError } from "../errors.js";
import type { Session } from "../session.js";

const MeEnvelopeSchema = z.object({
  data: z.object({
    businessName: z.string(),
    tier: z.object({ code: z.string() }).passthrough(),
    scopes: z.array(z.string()),
    authentication: MeAuthenticationSchema.optional(),
  }).passthrough(),
});
export type MeData = z.infer<typeof MeEnvelopeSchema>["data"];

export async function fetchMe(session: Session): Promise<MeData> {
  const response = await session.request({ method: "GET", rawPath: "/v1/me" });
  const parsed = MeEnvelopeSchema.safeParse(response.body);
  if (!parsed.success) throw new UnexpectedResponseError("GET /v1/me returned an unexpected response", response.status);
  return parsed.data.data;
}

export type Verdict = { kind: "match"; generation: number } | { kind: "mismatch"; reason: string };

/** Compares what the server says about this request's authentication with the local credential. */
export function judgeIdentity(me: MeData, expected: { credentialId: string; thumbprint: string; generation?: number }): Verdict {
  const auth = me.authentication;
  if (auth?.method !== "dpop") return { kind: "mismatch", reason: "the server did not report DPoP authentication for this request" };
  if (auth.credentialId !== expected.credentialId) return { kind: "mismatch", reason: "the credential ID differs from the saved one" };
  if (auth.publicKeyThumbprint !== expected.thumbprint) return { kind: "mismatch", reason: "the registered key fingerprint differs from the local key" };
  if (expected.generation !== undefined && auth.generation !== expected.generation) {
    return { kind: "mismatch", reason: `the server is at generation ${auth.generation}, expected ${expected.generation}` };
  }
  return { kind: "match", generation: auth.generation };
}

export function requireMatch(verdict: Verdict): number {
  if (verdict.kind === "mismatch") throw new SetupError(`verification failed: ${verdict.reason}`);
  return verdict.generation;
}
