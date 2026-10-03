#!/usr/bin/env bash
# Builds the SDK, strips the generator attribution from dist/, and packs the tarball to publish.
# Publish the tarball this script prints (npm publish ./<file>.tgz --access public), never the bare
# directory: only this path guarantees the stripped output is what ships.
# package.json carries no extra npm scripts on purpose: their order is nondeterministic across
# regenerations and conflicts with persistent edits.
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build
node ./scripts/strip-generator-wording.mjs
npm pack --ignore-scripts "$@"
