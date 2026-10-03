import { parseArgs } from "node:util";
import { MachineAuthError } from "../machine-auth/errors.js";
import { SDK_VERSION } from "../machine-auth/defaults.js";
import type { ResolveOptions } from "../machine-auth/resolve.js";
import { defaultContext, type CliContext } from "./context.js";
import { runRotate } from "./rotate.js";
import { runSetup } from "./setup.js";
import { runStatus } from "./status.js";

const HELP = `easyapi ${SDK_VERSION}

Usage: easyapi <command> [options]

Commands:
  setup     Generate a signing key, register it, and verify access (resumes after an interruption)
  rotate    Replace the signing key of the saved credential
  status    Call /v1/me with the saved credential and print what the server reports
  help      Show this text

Options:
  --profile <name>            Profile to use (default: default)
  --config-dir <dir>          Configuration directory
  --base-url <origin>         API origin, e.g. https://host (no trailing slash)
  --credential-id <uuid>      status only: use this credential instead of the profile
  --private-key-path <file>   status only: key file for --credential-id

Environment:
  EASYAPI_API_KEY             Bootstrap API key for setup (otherwise a hidden prompt is shown).
                              It is never accepted as a command-line argument and never saved.
  EASYAPI_PROFILE, EASYAPI_CONFIG_DIR, EASYAPI_CREDENTIAL_ID, EASYAPI_PRIVATE_KEY_PATH, EASYAPI_BASE_URL
                              Same meaning as the options above; options win over environment variables,
                              which win over the saved profile.
`;

const OPTIONS = {
  profile: { type: "string" },
  "config-dir": { type: "string" },
  "base-url": { type: "string" },
  "credential-id": { type: "string" },
  "private-key-path": { type: "string" },
  help: { type: "boolean", short: "h" },
  version: { type: "boolean" },
} as const;

class UsageError extends Error {}

function parse(argv: readonly string[]): { command: string; options: ResolveOptions; extra: string[] } {
  // A secret on argv lands in shell history and process listings, so it is refused rather than ignored.
  if (argv.some((arg) => /^--(?:api-?key|key|token|secret)\b/i.test(arg))) {
    throw new UsageError("the API key is never accepted as an argument; set EASYAPI_API_KEY or use the hidden prompt");
  }
  let parsed: ReturnType<typeof parseArgs<{ options: typeof OPTIONS; allowPositionals: true }>>;
  try {
    parsed = parseArgs({ args: [...argv], options: OPTIONS, allowPositionals: true, strict: true });
  } catch (error) {
    throw new UsageError(error instanceof Error ? error.message.split("\n")[0] ?? "invalid arguments" : "invalid arguments");
  }
  const { values, positionals } = parsed;
  const [command = "help", ...extra] = values.help === true ? ["help"] : positionals;
  const options: ResolveOptions = {
    ...(values.profile === undefined ? {} : { profile: values.profile }),
    ...(values["config-dir"] === undefined ? {} : { configDir: values["config-dir"] }),
    ...(values["base-url"] === undefined ? {} : { baseUrl: values["base-url"] }),
    ...(values["credential-id"] === undefined ? {} : { credentialId: values["credential-id"] }),
    ...(values["private-key-path"] === undefined ? {} : { privateKeyPath: values["private-key-path"] }),
  };
  if (values.version === true) return { command: "version", options, extra };
  return { command, options, extra };
}

/** Returns the process exit code: 0 success, 1 failure, 2 usage error. */
export async function runCli(argv: readonly string[], ctx: CliContext = defaultContext()): Promise<number> {
  try {
    const { command, options, extra } = parse(argv);
    if (extra.length > 0) throw new UsageError(`unexpected argument "${extra[0]}"`);
    const pinned = options.credentialId !== undefined || options.privateKeyPath !== undefined;
    switch (command) {
      case "help":
        ctx.io.out(HELP);
        return 0;
      case "version":
        ctx.io.out(SDK_VERSION);
        return 0;
      case "setup":
      case "rotate":
        if (pinned) throw new UsageError(`${command} works on the saved profile; --credential-id and --private-key-path are for status`);
        await (command === "setup" ? runSetup(ctx, options) : runRotate(ctx, options));
        return 0;
      case "status":
        await runStatus(ctx, options);
        return 0;
      default:
        throw new UsageError(`unknown command "${command}"`);
    }
  } catch (error) {
    if (error instanceof UsageError) {
      ctx.io.err(`error: ${error.message}\nRun \`easyapi help\` for usage.`);
      return 2;
    }
    ctx.io.err(`error: ${error instanceof MachineAuthError ? error.message : "unexpected failure"}`);
    return 1;
  }
}
