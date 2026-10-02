import { SetupError } from "../errors.js";

/** Reads one line from the terminal without echoing it. Refuses to run without a TTY. */
export function readSecretFromTty(prompt: string): Promise<string> {
  const { stdin, stderr } = process;
  if (!stdin.isTTY || typeof stdin.setRawMode !== "function") {
    return Promise.reject(new SetupError("no terminal is available for a hidden prompt; set EASYAPI_API_KEY in the environment instead"));
  }
  return new Promise((resolve, reject) => {
    let value = "";
    const finish = (settle: () => void): void => {
      stdin.removeListener("data", onData);
      stdin.setRawMode(false);
      stdin.pause();
      stderr.write("\n");
      settle();
    };
    const onData = (chunk: string): void => {
      for (const character of chunk) {
        if (character === "\r" || character === "\n") return finish(() => resolve(value));
        if (character === "\u0003") return finish(() => reject(new SetupError("cancelled")));
        if (character === "\u007f" || character === "\b") value = value.slice(0, -1);
        else if (character >= " ") value += character;
      }
    };
    stderr.write(prompt);
    stdin.setEncoding("utf8");
    stdin.setRawMode(true);
    stdin.resume();
    stdin.on("data", onData);
  });
}
