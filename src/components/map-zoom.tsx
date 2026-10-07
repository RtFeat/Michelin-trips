import { Minus, Plus } from "lucide-react";

type MapZoomProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
};

export function MapZoom({ onZoomIn, onZoomOut }: MapZoomProps) {
  return (
    <div className="pointer-events-auto flex flex-col overflow-hidden rounded-sm shadow-soft">
      <button
        type="button"
        onClick={onZoomIn}
        className="flex size-11 items-center justify-center bg-bg-elevated text-fg transition-colors duration-150 hover:bg-bg"
        aria-label="Приблизить"
      >
        <Plus className="size-3.5" strokeWidth={1.5} />
      </button>
      <div className="h-px bg-line" />
      <button
        type="button"
        onClick={onZoomOut}
        className="flex size-11 items-center justify-center bg-bg-elevated text-fg transition-colors duration-150 hover:bg-bg"
        aria-label="Отдалить"
      >
        <Minus className="size-3.5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
