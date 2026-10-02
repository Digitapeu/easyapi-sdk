import { startMockGateway } from "./mock-gateway.js";

// Standalone entry for scripts/e2e-node.mjs: prints {origin, apiKey} on one line, then serves until killed.
const gateway = await startMockGateway();
process.stdout.write(`${JSON.stringify({ origin: gateway.origin, apiKey: gateway.createParentKey() })}\n`);
process.on("SIGTERM", () => void gateway.close().then(() => process.exit(0)));
setInterval(() => undefined, 1 << 30);
