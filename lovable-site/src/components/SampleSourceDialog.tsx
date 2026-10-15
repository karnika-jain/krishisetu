import { useState } from "react";

export function SampleSourceButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="btn-ghost px-4 py-2 text-sm" onClick={() => setOpen(true)}>
        Open official source (sample)
      </button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4" onClick={() => setOpen(false)}>
          <div className="card max-w-md" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl">This is a demonstration record</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              This entry is fictional sample data created to preview the design. It has no official website, and
              KrishiSetu will not link you to an invented government page. Please check real programmes through
              official government sources.
            </p>
            <button className="btn-primary mt-4" onClick={() => setOpen(false)}>I understand</button>
          </div>
        </div>
      )}
    </>
  );
}
