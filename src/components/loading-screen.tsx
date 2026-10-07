import { cn } from "@/lib/utils";

type LoadingScreenProps = {
  leaving: boolean;
};

export function LoadingScreen({ leaving }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg px-6",
        leaving && "is-leaving loading-screen pointer-events-none",
        !leaving && "loading-screen",
      )}
      role="status"
      aria-live="polite"
    >
      <p className="font-sans text-xxs font-medium uppercase tracking-display text-muted">
        Санкт-Петербург · XIX век
      </p>
      <div className="loading-rule my-6 h-px w-40 bg-accent" />
      <h1 className="max-w-xl text-center font-display text-xl font-medium leading-tight tracking-display text-fg uppercase sm:text-2xl">
        Мишленовские путешествия
      </h1>
    </div>
  );
}
