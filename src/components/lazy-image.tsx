import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function LazyImage({ src, alt, className, priority = false }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Генерируем WebP версию пути
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const shouldLoad = inView || priority;

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // Загружаем заранее
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden bg-map", className)}>
      {shouldLoad ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={cn(
              "h-full w-full transition-opacity duration-300",
              loaded ? "opacity-100" : "opacity-0",
              className,
            )}
          />
        </picture>
      ) : (
        <div className="aspect-4/3 w-full" />
      )}
      {shouldLoad && !loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-map to-map/50">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] animate-shimmer" />
        </div>
      )}
    </div>
  );
}
