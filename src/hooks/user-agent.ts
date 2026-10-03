import { SDK_METADATA, SDKOptions } from "../lib/config.js";
import type { SDKInitHook } from "./types.js";

/** Identifies the SDK as easyapi's own, unless the caller set a user agent. */
export class UserAgentHook implements SDKInitHook {
  sdkInit(opts: SDKOptions): SDKOptions {
    return { ...opts, userAgent: opts.userAgent ?? `easyapi-sdk-typescript/${SDK_METADATA.sdkVersion}` };
  }
}
