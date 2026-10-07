import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PlaceImage } from "@/data/places";
import { cn } from "@/lib/utils";

type ImageGalleryProps = {
  images: PlaceImage[];
  placeName: string;
};

export function ImageGallery({ images, placeName }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  
  const current = images[index];
  if (!current) return null;

  const go = (direction: -1 | 1) => {
    const newIndex = (index + direction + images.length) % images.length;
    setIndex(newIndex);
  };

  // Предзагружаем соседние изображения
  useEffect(() => {
    const toLoad = new Set(loadedImages);
    // Текущее + следующее + предыдущее
    toLoad.add(index);
    toLoad.add((index + 1) % images.length);
    toLoad.add((index - 1 + images.length) % images.length);
    setLoadedImages(toLoad);
  }, [index, images.length]);

  return (
    <figure className="space-y-3">
      <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-map">
        {/* Рендерим все изображения с абсолютным позиционированием */}
        {images.map((image, imageIndex) => {
          const isActive = imageIndex === index;
          const shouldLoad = loadedImages.has(imageIndex);
          
          return (
            <div
              key={image.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-out",
                isActive ? "opacity-100 z-10" : "opacity-0 z-0",
              )}
            >
              {shouldLoad && (
                <picture>
                  <source 
                    srcSet={image.src.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 
                    type="image/webp" 
                  />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={imageIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10"
                  />
                </picture>
              )}
            </div>
          );
        })}
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
