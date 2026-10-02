import {
  closeSync,
  constants,
  fstatSync,
  fsyncSync,
  linkSync,
  lstatSync,
  mkdirSync,
  openSync,
  readFileSync,
  renameSync,
  statSync,
  unlinkSync,
  writeSync,
  type Stats,
} from "node:fs";
import { hostname } from "node:os";
import { basename, dirname, join, sep } from "node:path";
import { randomBytes } from "node:crypto";
import { ConfigError } from "./errors.js";

// POSIX-only by contract: Windows stays unadvertised until it has real ACL tests.
const currentUid = (): number => {
  if (typeof process.getuid !== "function") throw new ConfigError("this platform is not supported (POSIX only)");
  return process.getuid();
};

const errnoOf = (error: unknown): string | undefined => (error as NodeJS.ErrnoException | undefined)?.code;
const OWNER_ONLY_MASK = 0o077;
const MAX_FILE_BYTES = 64 * 1024;

/**
 * Every existing ancestor must be a directory owned by this user or root and not writable by others
 * (sticky directories excepted): checking only the leaf would let another user swap a parent.
 * A symlink component is tolerated only when root- or user-owned, since system paths such as macOS
 * /var are symlinks.
 */
function assertAncestorsSafe(target: string): void {
  const uid = currentUid();
  let current: string = sep;
  for (const part of target.split(sep).filter(Boolean)) {
    current = join(current, part);
    let stat: Stats;
    try {
      stat = lstatSync(current);
      if (stat.isSymbolicLink()) {
        if (stat.uid !== 0 && stat.uid !== uid) throw new ConfigError(`${current} is a symlink owned by another user`);
        stat = statSync(current);
      }
    } catch (error) {
      if (errnoOf(error) === "ENOENT") return;
      throw error;
    }
    if (!stat.isDirectory()) throw new ConfigError(`${current} is not a directory`);
    if (stat.uid !== 0 && stat.uid !== uid) throw new ConfigError(`${current} is owned by another user`);
    if ((stat.mode & 0o022) !== 0 && (stat.mode & 0o1000) === 0) {
      throw new ConfigError(`${current} is writable by other users; fix its permissions first`);
    }
  }
}

/** Creates `dir` (0700) and verifies it is a real directory, owned by this user, closed to group/other. */
export function ensurePrivateDir(dir: string): void {
  assertAncestorsSafe(dirname(dir));
  mkdirSync(dir, { recursive: true, mode: 0o700 });
  const stat = lstatSync(dir);
  if (stat.isSymbolicLink() || !stat.isDirectory()) throw new ConfigError(`${dir} must be a real directory, not a symlink`);
  if (stat.uid !== currentUid()) throw new ConfigError(`${dir} is not owned by the current user`);
  if ((stat.mode & OWNER_ONLY_MASK) !== 0) {
    throw new ConfigError(`${dir} must be mode 0700 (found ${(stat.mode & 0o777).toString(8)}); run: chmod 700 "${dir}"`);
  }
}

/** Returns null when the file does not exist. Refuses symlinks, foreign owners and group/other access. */
export function readPrivateFile(path: string): string | null {
  assertAncestorsSafe(dirname(path));
  let fd: number;
  try {
    fd = openSync(path, constants.O_RDONLY | constants.O_NOFOLLOW);
  } catch (error) {
    if (errnoOf(error) === "ENOENT") return null;
    if (errnoOf(error) === "ELOOP") throw new ConfigError(`${path} is a symlink; refusing to follow it`);
    throw error;
  }
  try {
    const stat = fstatSync(fd);
    if (!stat.isFile()) throw new ConfigError(`${path} is not a regular file`);
    if (stat.uid !== currentUid()) throw new ConfigError(`${path} is not owned by the current user`);
    if ((stat.mode & OWNER_ONLY_MASK) !== 0) {
      throw new ConfigError(`${path} must be mode 0600 (found ${(stat.mode & 0o777).toString(8)}); run: chmod 600 "${path}"`);
    }
    if (stat.size > MAX_FILE_BYTES) throw new ConfigError(`${path} is unexpectedly large`);
    return readFileSync(fd, "utf8");
  } finally {
    closeSync(fd);
  }
}

function fsyncDir(dir: string): void {
  const fd = openSync(dir, constants.O_RDONLY);
  try {
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
}

/**
 * Temp file + fsync + rename, so readers see the old or the new content, never a torn write.
 * `exclusive` refuses to replace an existing file (used for private keys, which must never be overwritten).
 */
export function writePrivateFile(path: string, content: string, options: { exclusive?: boolean } = {}): void {
  const dir = dirname(path);
  const temp = join(dir, `.${basename(path)}.${randomBytes(6).toString("hex")}.tmp`);
  const fd = openSync(temp, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600);
  try {
    try {
      writeSync(fd, content);
      fsyncSync(fd);
    } finally {
      closeSync(fd);
    }
    if (options.exclusive) {
      try {
        linkSync(temp, path);
      } catch (error) {
        if (errnoOf(error) === "EEXIST") throw new ConfigError(`${path} already exists; refusing to overwrite it`);
        throw error;
      }
    } else {
      assertReplaceable(path);
      renameSync(temp, path);
    }
    fsyncDir(dir);
  } finally {
    try {
      unlinkSync(temp);
    } catch {
      // Already renamed away, or never created.
    }
  }
}

function assertReplaceable(path: string): void {
  let stat: Stats;
  try {
    stat = lstatSync(path);
  } catch (error) {
    if (errnoOf(error) === "ENOENT") return;
    throw error;
  }
  if (!stat.isFile() || stat.uid !== currentUid()) throw new ConfigError(`${path} is not a regular file owned by the current user`);
}

export function removePrivateFile(path: string): void {
  try {
    unlinkSync(path);
  } catch (error) {
    if (errnoOf(error) !== "ENOENT") throw error;
  }
}

export interface FileLock {
  release(): void;
}

interface LockOwner {
  ownerId: string;
  pid: number;
  host: string;
}

function isProcessAlive(pid: number): boolean {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    return errnoOf(error) !== "ESRCH";
  }
}

function parseOwner(raw: string | null): LockOwner | null {
  if (raw === null) return null;
  try {
    const value = JSON.parse(raw) as Partial<LockOwner>;
    return typeof value.ownerId === "string" && Number.isInteger(value.pid) && typeof value.host === "string"
      ? (value as LockOwner)
      : null;
  } catch {
    return null;
  }
}

/**
 * Exclusive-create lock holding a random owner id and the pid. A lock is never stolen because of its age;
 * it is reclaimed only when its same-host owner is conclusively dead, via an atomic rename that is then
 * compared against what was read. Anything uncertain is reported for the operator to resolve.
 */
export function acquireLock(lockPath: string, what: string): FileLock {
  const me: LockOwner = { ownerId: randomBytes(16).toString("hex"), pid: process.pid, host: hostname() };
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      writePrivateFileExclusiveInPlace(lockPath, JSON.stringify(me));
      return {
        release() {
          if (parseOwner(readPrivateFile(lockPath))?.ownerId === me.ownerId) removePrivateFile(lockPath);
        },
      };
    } catch (error) {
      if (errnoOf(error) !== "EEXIST") throw error;
    }
    const raw = readPrivateFile(lockPath);
    const owner = parseOwner(raw);
    if (raw === null) continue;
    if (owner === null || owner.host !== hostname() || isProcessAlive(owner.pid)) {
      throw new ConfigError(
        `another ${what} holds ${lockPath}${owner ? ` (pid ${owner.pid})` : ""}; wait for it to finish, ` +
          "or remove the lock file only after confirming no easyapi process is running",
      );
    }
    reclaimDeadLock(lockPath, raw, me.ownerId);
  }
  throw new ConfigError(`could not acquire ${lockPath}; retry the command`);
}

function writePrivateFileExclusiveInPlace(path: string, content: string): void {
  const fd = openSync(path, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600);
  try {
    writeSync(fd, content);
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
}

function reclaimDeadLock(lockPath: string, expectedRaw: string, claimId: string): void {
  const claimed = `${lockPath}.reclaim-${claimId}`;
  try {
    renameSync(lockPath, claimed);
  } catch (error) {
    if (errnoOf(error) === "ENOENT") return;
    throw error;
  }
  if (readPrivateFile(claimed) === expectedRaw) {
    removePrivateFile(claimed);
    return;
  }
  // Someone replaced the lock between our read and the rename: put theirs back if the slot is free.
  try {
    linkSync(claimed, lockPath);
  } catch {
    // The slot was taken again; the claimed copy is discarded below.
  }
  removePrivateFile(claimed);
  throw new ConfigError(`lock ownership of ${lockPath} is uncertain; retry the command after checking for running easyapi processes`);
}
