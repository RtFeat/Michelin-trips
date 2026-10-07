import { X } from "lucide-react";
import { HOW_TO_READ } from "@/data/places";

type AboutPanelProps = {
  onClose: () => void;
};

export function AboutPanel({ onClose }: AboutPanelProps) {
  return (
    <aside
      className="panel-enter pointer-events-auto flex h-full max-h-[88dvh] w-full flex-col bg-bg-panel shadow-panel md:max-h-none md:w-[min(30rem,42vw)]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-title"
    >
      <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-8 md:py-5">
        <div>
          <p className="font-sans text-xxs font-medium tracking-display text-muted uppercase">
            О проекте
          </p>
          <h2
            id="about-title"
            className="mt-1 font-display text-2xl font-medium leading-tight text-fg"
          >
            {HOW_TO_READ.title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex size-11 shrink-0 items-center justify-center text-fg transition-opacity duration-150 hover:opacity-60"
          aria-label="Закрыть"
        >
          <X className="size-5" strokeWidth={1.25} />
        </button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-8">
        <p className="text-sm leading-normal text-fg">{HOW_TO_READ.body}</p>
        <ul className="mt-8 space-y-3">
          {HOW_TO_READ.stars.map((row) => (
            <li key={row.mark} className="flex items-baseline gap-4">
              <span className="w-12 font-display text-base tracking-display text-accent">
                {row.mark}
              </span>
              <span className="text-sm text-muted">{row.label}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs leading-snug text-subtle">{HOW_TO_READ.corpus}</p>
      </div>
    </aside>
  );
}
