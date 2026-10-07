import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PlaceImage } from "@/data/places";
import { cn } from "@/lib/utils";
import { LazyImage } from "@/components/lazy-image";

type ImageGalleryProps = {
  images: PlaceImage[];
  placeName: string;
};

export function ImageGallery({ images, placeName }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const current = images[index];
  if (!current) return null;

  const go = (direction: -1 | 1) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((value) => (value + direction + images.length) % images.length);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <figure className="space-y-3">
      <div className="relative overflow-hidden rounded-lg bg-map">
        <div
          key={index}
          className={cn(
            "transition-opacity duration-300",
            isTransitioning ? "opacity-0" : "opacity-100",
          )}
        >
          <LazyImage
            src={current.src}
            alt={current.alt}
            className="aspect-4/3 h-auto w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
            priority={index === 0}
          />
        </div>
        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated/80 text-fg transition-opacity duration-150 hover:bg-bg-elevated"
              aria-label="Предыдущее изображение"
            >
              <ChevronLeft className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg-elevated/80 text-fg transition-opacity duration-150 hover:bg-bg-elevated"
              aria-label="Следующее изображение"
            >
              <ChevronRight className="size-4" strokeWidth={1.5} />
            </button>
          </>
        ) : null}
      </div>
      <figcaption className="flex items-start justify-between gap-4">
        <p className="text-xs leading-snug text-muted">{current.caption}</p>
        <p className="shrink-0 font-sans text-xxs tabular-nums tracking-label text-subtle uppercase">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          <span className="sr-only"> — {placeName}</span>
        </p>
      </figcaption>
      {images.length > 1 ? (
        <div className="flex gap-2">
          {images.map((image, imageIndex) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(imageIndex)}
              className={cn(
                "h-px flex-1 transition-colors duration-150",
                imageIndex === index ? "bg-accent" : "bg-line",
              )}
              aria-label={`Изображение ${imageIndex + 1}`}
              aria-current={imageIndex === index}
            />
          ))}
        </div>
      ) : null}
    </figure>
  );
}
