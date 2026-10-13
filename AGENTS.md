<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Scheme records live only in src/data/schemes.json and matching rules only in src/lib/matching.ts — so verified records can be added without UI changes and nothing is AI-invented.
- The AI assistant lives in src/components/assistant (UI) and src/routes/api/assistant.ts + src/lib/assistant-prompt.server.ts (server) — keeps the AI key server-side and the assistant independent of the homepage.
