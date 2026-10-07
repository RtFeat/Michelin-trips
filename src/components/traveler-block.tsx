import { useState } from "react";
import type { TravelerReview } from "@/data/places";
import { StarRating } from "@/components/star-rating";
import { LazyImage } from "@/components/lazy-image";

type TravelerBlockProps = {
  traveler: TravelerReview;
};

export function TravelerBlock({ traveler }: TravelerBlockProps) {
  const [expanded, setExpanded] = useState(false);
  const text = expanded ? traveler.full : traveler.brief;

  return (
    <article className="border-t border-line pt-8">
      <div className="flex items-start gap-4">
        <LazyImage
          src={traveler.portrait}
          alt={traveler.portraitAlt}
          className="portrait size-16 shrink-0 rounded-sm object-cover object-top outline outline-1 -outline-offset-1 outline-fg/10"
        />
        <div className="min-w-0 flex-1">
          <p className="font-sans text-xxs font-medium tracking-label text-muted uppercase">
            {traveler.country} · {traveler.year}
          </p>
          <h3 className="mt-1 font-display text-xl font-medium leading-tight text-fg">
            {traveler.name}
          </h3>
          <p className="mt-0.5 text-sm text-muted">
            {traveler.nameOriginal}
            <span className="text-subtle"> · {traveler.role}</span>
          </p>
        </div>
        <StarRating value={traveler.stars} size="sm" className="pt-1" />
      </div>

      <p className="mt-5 font-display text-lg leading-snug text-fg italic">
        {traveler.impression}
      </p>
      <p className="mt-4 text-sm leading-normal text-fg/90">{text}</p>
      {traveler.yearNote ? (
        <p className="mt-3 text-xs leading-snug text-subtle">{traveler.yearNote}</p>
      ) : null}

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        className="mt-4 text-xs font-medium text-accent transition-opacity duration-150 hover:opacity-70"
      >
        {expanded ? "Свернуть" : "Читать полностью"}
      </button>

      <div className="mt-6 space-y-1 text-xxs leading-snug text-subtle">
        <p>
          {traveler.source.work}. {traveler.source.detail}.
        </p>
        <p>{traveler.source.quality}</p>
        <a
          href={traveler.source.url}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-muted underline decoration-line underline-offset-4 transition-colors duration-150 hover:text-fg"
        >
          Сверить источник
        </a>
      </div>
    </article>
  );
}
