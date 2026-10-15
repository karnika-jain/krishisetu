import { createFileRoute } from "@tanstack/react-router";

type Msg = { role: "user" | "assistant"; content: string };

function bad(status: number, message: string) {
  return new Response(JSON.stringify({ error: message }), { status, headers: { "Content-Type": "application/json" } });
}

export const Route = createFileRoute("/api/assistant")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env["LOVABLE_API_KEY"];
        if (!key) return bad(500, "The assistant is not configured yet.");

        let messages: Msg[];
        try {
          const body = (await request.json()) as { messages?: unknown };
          if (!Array.isArray(body.messages)) throw new Error();
          messages = body.messages
            .filter((m): m is Msg => !!m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
            .slice(-12)
            .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
          if (!messages.length || messages[messages.length - 1]?.role !== "user") throw new Error();
        } catch {
          return bad(400, "Please type a question.");
        }

        const { ASSISTANT_INSTRUCTIONS } = await import("@/lib/assistant-prompt.server");
        const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
          method: "POST",
          signal: request.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
            "Lovable-API-Key": key,
            "X-Lovable-AIG-SDK": "fetch",
          },
          body: JSON.stringify({
            model: "openai/gpt-6-astra",
            instructions: ASSISTANT_INSTRUCTIONS,
            input: messages.map((m) => ({ role: m.role, content: m.content })),
            reasoning: { effort: "low" },
            store: false,
            stream: true,
          }),
        });

        if (!upstream.ok || !upstream.body) {
          const text = await upstream.text().catch(() => "");
          console.error(`Assistant gateway error [${upstream.status}]: ${text}`);
          const msg =
            upstream.status === 429 ? "The assistant is busy right now. Please try again in a minute."
            : upstream.status === 402 ? "The assistant has run out of AI credits for now."
            : upstream.status === 403 ? "The assistant is not available for this workspace right now."
            : "The assistant could not answer right now. Please try again later.";
          return bad(upstream.status, msg);
        }

        const reader = upstream.body.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            let buf = "";
            try {
              for (;;) {
                const { done, value } = await reader.read();
                if (done) break;
                buf += decoder.decode(value, { stream: true });
                const lines = buf.split("\n");
                buf = lines.pop() ?? "";
                for (const line of lines) {
                  if (!line.startsWith("data:")) continue;
                  const data = line.slice(5).trim();
                  if (!data || data === "[DONE]") continue;
                  try {
                    const ev = JSON.parse(data);
                    if (ev.type === "response.output_text.delta" && typeof ev.delta === "string") controller.enqueue(encoder.encode(ev.delta));
                    if (ev.type === "response.failed" || ev.type === "error") controller.enqueue(encoder.encode("\n\n[The answer was interrupted. Please try again.]"));
                  } catch { /* ignore partial */ }
                }
              }
            } catch {
              /* client aborted */
            } finally {
              controller.close();
            }
          },
          cancel() { reader.cancel().catch(() => {}); },
        });
        const headers = new Headers({ "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-cache" });
        const runId = upstream.headers.get("X-Lovable-AIG-Run-ID");
        if (runId) headers.set("X-Lovable-AIG-Run-ID", runId);
        return new Response(stream, { headers });
      },
    },
  },
});
