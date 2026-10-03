import type {
  AfterErrorContext,
  AfterErrorHook,
  AfterSuccessContext,
  AfterSuccessHook,
  BeforeRequestContext,
  BeforeRequestHook,
} from "../hooks/types.js";
import { RedirectRefusedError } from "./errors.js";
import { Deadline } from "./http.js";
import type { Session } from "./session.js";

const isRedirect = (status: number): boolean => status >= 300 && status < 400 && status !== 304;

/**
 * Authenticates every request of a generated client with a DPoP-bound access token.
 *
 * beforeRequest runs once per attempt (retries included), so each attempt gets a fresh proof. A 401 that
 * asks for a nonce or reports an expired token is replayed exactly once from an unsigned copy of the
 * request that beforeRequest keeps; the replay response is final and never re-enters this hook.
 */
export class DpopHook implements BeforeRequestHook, AfterSuccessHook, AfterErrorHook {
  private readonly unsignedByAttempt = new WeakMap<Request, Request>();
  private readonly unsignedByResponse = new WeakMap<Response, Request>();

  constructor(
    private readonly session: Session,
    private readonly defaultTimeoutMs: number,
  ) {}

  /**
   * HTTPClient `response` hook (register with `httpClient.addHook("response", ...)`). afterError only sees
   * the Response, so this ties it back to the request that produced it.
   */
  readonly trackResponse = (response: Response, sent: Request): void => {
    const unsigned = this.unsignedByAttempt.get(sent);
    if (unsigned !== undefined) this.unsignedByResponse.set(response, unsigned);
  };

  async beforeRequest(context: BeforeRequestContext, request: Request): Promise<Request> {
    // Redirects are never followed: the token and proof must not reach another URL.
    const attempt = new Request(request, { redirect: "manual" });
    // ponytail: the clone tees the body, so a large upload is buffered until GC; skip it if that ever hurts.
    this.unsignedByAttempt.set(attempt, attempt.clone());
    await this.sign(attempt, context.timeoutMs);
    return attempt;
  }

  afterSuccess(_context: AfterSuccessContext, response: Response): Response {
    this.session.rememberResourceNonce(response.headers);
    if (isRedirect(response.status)) {
      void response.body?.cancel();
      throw new RedirectRefusedError(response.status);
    }
    return response;
  }

  async afterError(
    context: AfterErrorContext,
    response: Response | null,
    error: unknown,
  ): Promise<{ response: Response | null; error: unknown }> {
    if (response === null) return { response, error };
    this.session.rememberResourceNonce(response.headers);

    const unsigned = this.unsignedByResponse.get(response);
    const httpClient = context.options.httpClient;
    if (response.status !== 401 || unsigned === undefined || httpClient === undefined) return { response, error };

    // Rejected before any handler ran, so replaying with a fresh proof is safe for every method.
    const challenge = response.headers.get("www-authenticate") ?? "";
    const needsNonce = /use_dpop_nonce/i.test(challenge) && this.session.hasResourceNonce();
    const tokenRejected = !needsNonce && /invalid_token/i.test(challenge);
    if (!needsNonce && !tokenRejected) return { response, error };
    if (tokenRejected) this.session.invalidateToken();

    void response.body?.cancel();
    const replay = new Request(unsigned);
    await this.sign(replay, context.timeoutMs);
    const replayed = await httpClient.request(replay);
    this.session.rememberResourceNonce(replayed.headers);
    return { response: replayed, error: null };
  }

  private async sign(request: Request, timeoutMs: number | undefined): Promise<void> {
    const deadline = new Deadline(timeoutMs ?? this.defaultTimeoutMs);
    const auth = await this.session.authorize(request.method, new URL(request.url), deadline, request.signal);
    request.headers.set("Authorization", auth.Authorization);
    request.headers.set("DPoP", auth.DPoP);
  }
}
