import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AboutPanel } from "@/components/about-panel";
import { CityMap } from "@/components/city-map";
import { LoadingScreen } from "@/components/loading-screen";
import { PlaceIndex } from "@/components/place-index";
import { PlacePanel } from "@/components/place-panel";
import { placeById } from "@/data/places";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [booting, setBooting] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 200 : 1700;
    const leave = reduced ? 0 : 380;
    const start = window.setTimeout(() => setLeaving(true), hold);
    const done = window.setTimeout(() => setBooting(false), hold + leave);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(done);
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
        setAboutOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const selected = placeById(selectedId);
  const panelOpen = Boolean(selected) || aboutOpen;

  const closePanels = () => {
    setSelectedId(null);
    setAboutOpen(false);
  };

  const openPlace = (id: string) => {
    setAboutOpen(false);
    setSelectedId((current) => (current === id ? null : id));
  };

  const openAbout = () => {
    setSelectedId(null);
    setAboutOpen(true);
  };

  return (
    <main className="relative h-dvh overflow-hidden bg-bg">
      {booting ? <LoadingScreen leaving={leaving} /> : null}

      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 flex items-start justify-between px-4 pt-4 md:px-6 md:pt-5">
        <div className="pointer-events-auto max-w-sm">
          <p className="font-sans text-xxs font-medium tracking-display text-muted uppercase">
            Санкт-Петербург глазами иностранцев
          </p>
          <h1 className="mt-1 font-display text-xl font-medium leading-tight text-fg md:text-2xl">
            Мишленовские путешествия
          </h1>
        </div>
        {panelOpen ? null : (
          <button
            type="button"
            onClick={openAbout}
            className="pointer-events-auto px-2 py-3 font-sans text-xxs font-medium tracking-display text-muted uppercase transition-colors duration-150 hover:text-fg"
          >
            Как читать
          </button>
        )}
      </header>

      <div className="absolute inset-0 z-10">
        <CityMap
          selectedId={selectedId}
          onSelect={openPlace}
          onClose={closePanels}
          panelOpen={panelOpen}
        />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-72 items-center bg-linear-to-r from-bg from-40% to-transparent pl-3 md:flex lg:pl-5">
        <PlaceIndex selectedId={selectedId} onSelect={openPlace} />
      </div>

      <p className="pointer-events-none absolute bottom-6 left-4 z-20 max-w-48 font-sans text-xxs leading-snug tracking-label text-muted uppercase md:left-6">
        Пять мест · 1839–1859
      </p>

      {panelOpen ? (
        <div className="absolute inset-x-0 bottom-0 z-40 md:inset-x-auto md:top-0 md:right-0">
          {selected ? (
            <PlacePanel place={selected} onClose={() => setSelectedId(null)} />
          ) : null}
          {aboutOpen ? <AboutPanel onClose={() => setAboutOpen(false)} /> : null}
        </div>
      ) : null}
    </main>
  );
}
