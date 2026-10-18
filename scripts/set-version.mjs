// DRAFT — apply from a session in the SDK repo; untested here
// Destination: scripts/set-version.mjs
// Usage: node scripts/set-version.mjs <semver>   write the version into the three files, then verify
//        node scripts/set-version.mjs --check    only verify that the three files agree
// The three files are edited in place with a targeted replace so their existing formatting
// (jsr.json has irregular whitespace) is preserved.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)*)?$/;

// Each target: file, pattern whose group 1 is the text before the version and group 3 the text after.
// gen.yaml: the first "  version:" line under the top-level "typescript:" key.
const targets = {
  '.speakeasy/gen.yaml': /(^typescript:\n(?:(?!\S)[^\n]*\n)*?  version: )([^\n]+)()/m,
  'package.json': /^(  "version": ")([^"]+)(")/m,
  'jsr.json': /^(  "version": ")([^"]+)(")/m,
};

const read = (file) => readFileSync(join(root, file), 'utf8');

function currentVersion(file) {
  const match = read(file).match(targets[file]);
  if (!match) throw new Error(`${file}: version field not found`);
  return match[2].trim();
}

const arg = process.argv[2];
if (arg !== '--check') {
  if (!arg || !SEMVER.test(arg)) {
    console.error(`set-version: "${arg ?? ''}" is not a valid semver (X.Y.Z[-pre])`);
    process.exit(2);
  }
  for (const file of Object.keys(targets)) {
    const text = read(file);
    if (!targets[file].test(text)) throw new Error(`${file}: version field not found`);
    writeFileSync(join(root, file), text.replace(targets[file], `$1${arg}$3`));
  }
}

const versions = Object.fromEntries(Object.keys(targets).map((file) => [file, currentVersion(file)]));
const distinct = new Set(Object.values(versions));
if (distinct.size !== 1 || ![...distinct][0] || !SEMVER.test([...distinct][0]) || (arg !== '--check' && [...distinct][0] !== arg)) {
  console.error('set-version: files disagree or are not valid semver:', versions);
  process.exit(1);
}
console.log(`set-version: ${[...distinct][0]} in ${Object.keys(targets).join(', ')}`);
