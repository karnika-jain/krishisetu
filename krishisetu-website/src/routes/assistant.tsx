import { createFileRoute } from "@tanstack/react-router";
import { Assistant } from "@/components/assistant/Assistant";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "AI Assistant — KrishiSetu" },
      { name: "description", content: "Ask simple questions about Indian agricultural schemes in English, Hindi or Kannada." },
      { property: "og:title", content: "KrishiSetu AI Assistant" },
      { property: "og:description", content: "Ask about scheme eligibility, documents and application steps." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-[32px] md:text-[36px]">KrishiSetu AI Assistant</h1>
      <p className="mt-2 text-muted-foreground">AI answers can be wrong or out of date. They are not an official decision — always confirm on the official government portal.</p>
      <div className="mt-6"><Assistant /></div>
    </div>
  ),
});
