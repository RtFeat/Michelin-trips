import { lazy, Suspense, useEffect, useState } from "react";

const CityMapInner = lazy(() => import("./city-map-inner"));

type CityMapProps = {
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
  panelOpen: boolean;
};

export function CityMap(props: CityMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full bg-map" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="h-full w-full bg-map" aria-hidden="true" />}>
      <CityMapInner {...props} />
    </Suspense>
  );
}
