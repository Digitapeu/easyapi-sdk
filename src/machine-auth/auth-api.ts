import { z } from "zod/v3";
import { SdkCredentialViewSchema, SdkPublicKeySchema, type SdkCredentialView } from "./contract/sdk-auth.js";
import { UnexpectedResponseError } from "./errors.js";
import { Deadline, errorFromResponse, parseJson, send, type FetchLike } from "./http.js";
import type { Signer } from "./keys.js";
import { SDK_VERSION } from "./defaults.js";
import { ENROLL_PATH, enrollmentProof, type Clock } from "./proofs.js";

const CredentialEnvelopeSchema = z.object({ data: z.object({ credential: SdkCredentialViewSchema }) });

export function parseCredentialEnvelope(body: unknown): SdkCredentialView {
  const parsed = CredentialEnvelopeSchema.safeParse(body);
  if (!parsed.success) throw new UnexpectedResponseError("the server returned a malformed credential response", 200);
  return parsed.data.data.credential;
}

/**
 * Registers the public key against the bootstrap API key (201 created, 200 resumed). Sent exactly once:
 * the caller resumes from saved state after an ambiguous outcome rather than blindly resending.
 */
export async function enroll(input: {
  origin: string;
  credentialId: string;
  signer: Signer;
  bootstrapApiKey: string;
  fetch: FetchLike;
  now: Clock;
  timeoutMs: number;
}): Promise<SdkCredentialView> {
  const body = {
    credentialId: input.credentialId,
    publicKey: SdkPublicKeySchema.parse(input.signer.publicJwk),
    enrollmentProof: enrollmentProof(input.signer, {
      origin: input.origin,
      credentialId: input.credentialId,
      bootstrapApiKey: input.bootstrapApiKey,
      now: input.now,
    }),
  };
  const response = await send(input.fetch, input.origin + ENROLL_PATH, {
    method: "POST",
    deadline: new Deadline(input.timeoutMs),
    headers: {
      Authorization: `Bearer ${input.bootstrapApiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": `easyapi-sdk/${SDK_VERSION}`,
    },
    body: JSON.stringify(body),
  });
  if (response.status !== 200 && response.status !== 201) throw errorFromResponse(response, "product");
  return parseCredentialEnvelope(parseJson(response.body));
}
