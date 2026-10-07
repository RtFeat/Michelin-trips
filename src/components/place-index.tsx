import { places } from "@/data/places";
import { formatStars } from "@/data/places";
import { cn } from "@/lib/utils";

type PlaceIndexProps = {
  selectedId: string | null;
  onSelect: (id: string) => void;
};

export function PlaceIndex({ selectedId, onSelect }: PlaceIndexProps) {
  return (
    <nav
      aria-label="Пять мест"
      className="pointer-events-auto hidden w-56 shrink-0 flex-col justify-center gap-1 md:flex"
    >
      {places.map((place) => {
        const active = selectedId === place.id;
        return (
          <button
            key={place.id}
            type="button"
            onClick={() => onSelect(place.id)}
            className={cn(
              "flex items-baseline justify-between gap-3 px-3 py-2.5 text-left transition-colors duration-150",
              active ? "text-fg" : "text-muted hover:text-fg",
            )}
          >
            <span className="flex min-w-0 items-baseline gap-3">
              <span className="font-sans text-xxs tabular-nums tracking-label text-subtle">
                {place.number}
              </span>
              <span className="truncate font-display text-lg leading-tight">
                {place.shortName}
              </span>
            </span>
            <span
              className={cn(
                "font-display text-xs tracking-label",
                active ? "text-accent" : "text-subtle",
              )}
            >
              {formatStars(place.averageStars)}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
