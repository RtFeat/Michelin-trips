import { X } from "lucide-react";
import type { Place } from "@/data/places";
import { ImageGallery } from "@/components/image-gallery";
import { StarRating } from "@/components/star-rating";
import { TravelerBlock } from "@/components/traveler-block";

type PlacePanelProps = {
  place: Place;
  onClose: () => void;
};

export function PlacePanel({ place, onClose }: PlacePanelProps) {
  return (
    <aside
      className="panel-enter pointer-events-auto flex h-full max-h-[88dvh] w-full flex-col bg-bg-panel shadow-panel md:max-h-none md:w-[min(34rem,46vw)]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-title"
    >
      <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 md:px-8 md:py-5">
        <div>
          <p className="font-sans text-xxs font-medium tracking-display text-muted uppercase">
            Место {place.number}
          </p>
          <h2
            id="place-title"
            className="mt-1 font-display text-2xl font-medium leading-tight text-fg md:text-3xl"
          >
            {place.name}
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
        <div className="flex items-end justify-between gap-4">
          <StarRating value={place.averageStars} size="lg" />
          <p className="text-xxs tracking-label text-subtle uppercase">
            {place.travelers.length === 1 ? "1 отзыв" : `${place.travelers.length} отзыва`}
          </p>
        </div>

        <p className="mt-5 text-sm leading-normal text-fg">{place.why}</p>
        {place.context ? (
          <p className="mt-4 border-l border-accent/40 pl-4 text-sm leading-normal text-muted">
            {place.context}
          </p>
        ) : null}

        <div className="mt-8">
          <ImageGallery images={place.images} placeName={place.name} />
        </div>

        <div className="mt-10 space-y-10">
          {place.travelers.map((traveler) => (
            <TravelerBlock key={`${place.id}-${traveler.id}`} traveler={traveler} />
          ))}
        </div>
      </div>
    </aside>
  );
}
