#!/usr/bin/env bash
# Fails when regenerating the SDK changes any tracked file, i.e. when the committed tree has drifted from
# what the spec, overlay and gen.yaml produce. Run it on a committed tree: persistent edits to generated
# files are merged against the last commit, so uncommitted edits would be reported as drift.
set -euo pipefail
cd "$(dirname "$0")/.."

# gen.lock holds per-run bookkeeping (generation id, pristine hashes, write checksums) that changes on
# every run even when no generated file does, so it is not drift.
tracked_changes() { git status --porcelain --untracked-files=no -- . ':!.speakeasy/gen.lock'; }

if [ -n "$(tracked_changes)" ]; then
  echo "check-regen: commit or stash tracked changes first" >&2
  exit 2
fi

speakeasy run -y --skip-versioning >/dev/null

if [ -n "$(tracked_changes)" ]; then
  echo "check-regen: regeneration changed tracked files:" >&2
  tracked_changes >&2
  exit 1
fi
echo "check-regen: ok, regeneration is a no-op"
