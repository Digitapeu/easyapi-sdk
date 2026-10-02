import { chmodSync, writeFileSync } from "node:fs";

// The CJS tree sits under a package whose "type" is "module"; this marker makes Node load it as CJS.
writeFileSync(new URL("../dist/cjs/package.json", import.meta.url), '{"type":"commonjs"}\n');
chmodSync(new URL("../dist/esm/src/cli/bin.js", import.meta.url), 0o755);
