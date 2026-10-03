import {
  createHash,
  createPrivateKey,
  createPublicKey,
  generateKeyPairSync,
  randomBytes,
  sign,
  type KeyObject,
} from "node:crypto";
import { SdkPublicKeySchema, type SdkPublicKey } from "./contract/sdk-auth.js";
import { ConfigError } from "./errors.js";

export interface Signer {
  privateKey: KeyObject;
  publicJwk: SdkPublicKey;
  thumbprint: string;
}

export const sha256Base64Url = (input: string): string => createHash("sha256").update(input, "utf8").digest("base64url");

// RFC 7638 canonical form: required members only, lexicographic order, no whitespace.
export const thumbprintOf = (jwk: SdkPublicKey): string =>
  sha256Base64Url(`{"crv":"${jwk.crv}","kty":"${jwk.kty}","x":"${jwk.x}","y":"${jwk.y}"}`);

/** 32 random bytes as 43 base64url characters, per the contract's `jti` rule. */
export const randomJti = (): string => randomBytes(32).toString("base64url");

export function signerFromKey(privateKey: KeyObject): Signer {
  if (privateKey.type !== "private" || privateKey.asymmetricKeyType !== "ec" ||
      privateKey.asymmetricKeyDetails?.namedCurve !== "prime256v1") {
    throw new ConfigError("the private key must be an EC P-256 key (ES256)");
  }
  const publicJwk = SdkPublicKeySchema.parse(createPublicKey(privateKey).export({ format: "jwk" }));
  return { privateKey, publicJwk, thumbprint: thumbprintOf(publicJwk) };
}

export function signerFromPem(pem: string): Signer {
  let privateKey: KeyObject;
  try {
    privateKey = createPrivateKey(pem);
  } catch {
    throw new ConfigError("the private key is not a valid PEM-encoded private key");
  }
  return signerFromKey(privateKey);
}

export function generateSigner(): { signer: Signer; pkcs8Pem: string } {
  const { privateKey } = generateKeyPairSync("ec", { namedCurve: "prime256v1" });
  return {
    signer: signerFromKey(privateKey),
    pkcs8Pem: privateKey.export({ type: "pkcs8", format: "pem" }).toString(),
  };
}

const encodePart = (value: object): string => Buffer.from(JSON.stringify(value), "utf8").toString("base64url");

/** ES256 compact JWS. Node's `ieee-p1363` encoding is the raw r||s form JOSE requires. */
export function signJwt(signer: Signer, header: object, claims: object): string {
  const signingInput = `${encodePart(header)}.${encodePart(claims)}`;
  const signature = sign("sha256", Buffer.from(signingInput), { key: signer.privateKey, dsaEncoding: "ieee-p1363" });
  return `${signingInput}.${signature.toString("base64url")}`;
}
