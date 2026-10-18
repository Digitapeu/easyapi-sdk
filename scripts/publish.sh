#!/usr/bin/env bash
# One-command release: verifies the tree, rebuilds the stripped tarball and publishes it to npm.
# Usage: scripts/publish.sh [--otp=<code>]
#        scripts/publish.sh --ci
# --ci is for .github/workflows/release.yml: the workflow has already run check-regen and pack.sh, so
# this publishes the tarball they left in the working directory, with provenance, no prompt and no OTP
# (npm authenticates through OIDC trusted publishing). A version already on npm is a no-op, not an error.
# The publish always goes through scripts/pack.sh's tarball, never the bare directory.
set -euo pipefail
cd "$(dirname "$0")/.."

ci=0
if [ "${1:-}" = "--ci" ]; then
  ci=1
  shift
  if [ "$#" -ne 0 ]; then
    echo "publish: --ci takes no other arguments" >&2
    exit 2
  fi
fi

name=$(node -p "require('./package.json').name")
version=$(node -p "require('./package.json').version")

if [ "$ci" = 0 ]; then
  branch=$(git branch --show-current)
  if [ "$branch" != "main" ]; then
    echo "publish: run from main (on '$branch')" >&2
    exit 1
  fi
  if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
    echo "publish: commit or stash tracked changes first" >&2
    exit 1
  fi
  git fetch --quiet origin main
  if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
    echo "publish: main is not in sync with origin/main; push or pull first" >&2
    exit 1
  fi
fi
if npm view "$name@$version" version >/dev/null 2>&1; then
  if [ "$ci" = 1 ]; then
    echo "publish: $name@$version is already on npm; skipping"
    exit 0
  fi
  echo "publish: $name@$version is already on npm; bump the version in gen.yaml and regenerate" >&2
  exit 1
fi

if [ "$ci" = 1 ]; then
  # npm pack names the file <scope>-<name>-<version>.tgz.
  tarball="$(echo "${name#@}" | tr / -)-$version.tgz"
  if [ ! -f "$tarball" ]; then
    echo "publish: $tarball not found; run scripts/pack.sh first" >&2
    exit 1
  fi
  npm publish "./$tarball" --access public --provenance
  echo "publish: $name@$version published"
  exit 0
fi

scripts/check-regen.sh
# check-regen leaves per-run bookkeeping in gen.lock; it is not part of the release.
git checkout -- .speakeasy/gen.lock

tarball=$(scripts/pack.sh | tail -n 1)
echo "publish: about to publish $name@$version from $tarball"
tar -tzf "$tarball" | wc -l | xargs echo "publish: files in tarball:"
read -r -p "Publish $name@$version to npm? [y/N] " answer
if [ "$answer" != "y" ]; then
  rm -f "$tarball"
  echo "publish: aborted" >&2
  exit 1
fi

npm publish "./$tarball" --access public "$@"
rm -f "$tarball"
echo "publish: $name@$version published"
