import { useEffect } from "react";
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { places, type Place } from "@/data/places";
import { MapZoom } from "@/components/map-zoom";

type CityMapInnerProps = {
  selectedId: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
  panelOpen: boolean;
};

const BOUNDS = L.latLngBounds(
  L.latLng(59.926, 30.278),
  L.latLng(59.951, 30.358),
);

const CENTER: [number, number] = [59.9374, 30.319];

function markerIcon(place: Place, active: boolean) {
  return L.divIcon({
    className: `place-marker${active ? " is-active" : ""}`,
    html: `<div class="place-marker-inner" aria-hidden="true">
      <span class="place-marker-pulse"></span>
      <span class="place-marker-dot"></span>
      <span class="place-label">${place.shortName}</span>
    </div>`,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
  });
}

function MapController({
  selectedId,
  panelOpen,
}: {
  selectedId: string | null;
  panelOpen: boolean;
}) {
  const map = useMap();

  useEffect(() => {
    const place = places.find((item) => item.id === selectedId);
    if (!place) return;
    const wide = window.innerWidth >= 768;
    map.flyToBounds(L.latLng(place.coords).toBounds(220), {
      duration: 0.75,
      paddingTopLeft: [32, 88],
      paddingBottomRight: panelOpen && wide ? [400, 48] : [32, 80],
      maxZoom: 15.4,
    });
  }, [map, selectedId, panelOpen]);

  return null;
}

function MapClickCloser({ onClose }: { onClose: () => void }) {
  useMapEvents({
    click: () => onClose(),
  });
  return null;
}

function ZoomControl() {
  const map = useMap();
  return (
    <div className="map-zoom-wrap absolute right-4 bottom-14 md:right-5 md:bottom-8">
      <MapZoom onZoomIn={() => map.zoomIn()} onZoomOut={() => map.zoomOut()} />
    </div>
  );
}

export default function CityMapInner({
  selectedId,
  onSelect,
  onClose,
  panelOpen,
}: CityMapInnerProps) {
  return (
    <MapContainer
      center={CENTER}
      zoom={14.35}
      minZoom={13.5}
      maxZoom={16.25}
      maxBounds={BOUNDS}
      maxBoundsViscosity={0.9}
      zoomControl={false}
      scrollWheelZoom
      attributionControl
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> · CARTO'
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png?key=cb1_4cwp_1_4a9467ddd1df52efad63305e"
        subdomains="abcd"
      />
      <MapController selectedId={selectedId} panelOpen={panelOpen} />
      <MapClickCloser onClose={onClose} />
      {places.map((place) => (
        <Marker
          key={place.id}
          position={place.coords}
          icon={markerIcon(place, selectedId === place.id)}
          eventHandlers={{
            click: () => onSelect(place.id),
          }}
          keyboard
          title={place.name}
        />
      ))}
      <ZoomControl />
    </MapContainer>
  );
}
