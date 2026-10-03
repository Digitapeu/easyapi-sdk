import type { EasyApi } from "../sdk/sdk.js";
import type { MachineClientOptions } from "./client.js";

/**
 * Builds an `EasyApi` client from the DPoP machine credential saved by `easyapi setup`. The machine-auth
 * code needs node:fs and node:crypto, so it loads here on first use and the package entry stays free of
 * Node-only imports for API-key users.
 */
export async function fromMachineCredential(options: MachineClientOptions = {}): Promise<EasyApi> {
  const { createMachineClient } = await import("./client.js");
  return createMachineClient(options);
}
