import { i as __toESM } from "../_runtime.mjs";
import { d as require_react } from "../_libs/@react-leaflet/core+[...].mjs";
import { G as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Minus, r as Plus } from "../_libs/lucide-react.mjs";
import { n as places } from "./routes-CXx76OU5.mjs";
import { t as require_leaflet_src } from "../_libs/leaflet.mjs";
import { i as useMap, n as Marker, r as MapContainer, t as TileLayer } from "../_libs/react-leaflet.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/city-map-inner-Df3eW-8h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_leaflet_src = /* @__PURE__ */ __toESM(require_leaflet_src());
function MapZoom({ onZoomIn, onZoomOut }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-auto flex flex-col overflow-hidden rounded-sm shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onZoomIn,
				className: "flex size-11 items-center justify-center bg-bg-elevated text-fg transition-colors duration-150 hover:bg-bg",
				"aria-label": "Приблизить",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "size-3.5",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onZoomOut,
				className: "flex size-11 items-center justify-center bg-bg-elevated text-fg transition-colors duration-150 hover:bg-bg",
				"aria-label": "Отдалить",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					className: "size-3.5",
					strokeWidth: 1.5
				})
			})
		]
	});
}
var BOUNDS = import_leaflet_src.default.latLngBounds(import_leaflet_src.default.latLng(59.926, 30.278), import_leaflet_src.default.latLng(59.951, 30.358));
var CENTER = [59.9374, 30.319];
function markerIcon(place, active) {
	return import_leaflet_src.default.divIcon({
		className: `place-marker${active ? " is-active" : ""}`,
		html: `<div class="place-marker-inner" aria-hidden="true">
      <span class="place-marker-pulse"></span>
      <span class="place-marker-dot"></span>
      <span class="place-label">${place.shortName}</span>
    </div>`,
		iconSize: [18, 18],
		iconAnchor: [9, 9]
	});
}
function MapController({ selectedId, panelOpen }) {
	const map = useMap();
	(0, import_react.useEffect)(() => {
		const place = places.find((item) => item.id === selectedId);
		if (!place) return;
		const wide = window.innerWidth >= 768;
		map.flyToBounds(import_leaflet_src.default.latLng(place.coords).toBounds(220), {
			duration: .75,
			paddingTopLeft: [32, 88],
			paddingBottomRight: panelOpen && wide ? [400, 48] : [32, 80],
			maxZoom: 15.4
		});
	}, [
		map,
		selectedId,
		panelOpen
	]);
	return null;
}
function ZoomControl() {
	const map = useMap();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "map-zoom-wrap absolute right-4 bottom-6 md:right-5 md:bottom-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapZoom, {
			onZoomIn: () => map.zoomIn(),
			onZoomOut: () => map.zoomOut()
		})
	});
}
function CityMapInner({ selectedId, onSelect, panelOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MapContainer, {
		center: CENTER,
		zoom: 14.35,
		minZoom: 13.5,
		maxZoom: 16.25,
		maxBounds: BOUNDS,
		maxBoundsViscosity: .9,
		zoomControl: false,
		scrollWheelZoom: true,
		attributionControl: true,
		className: "h-full w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TileLayer, {
				attribution: "© <a href=\"https://www.openstreetmap.org/copyright\">OSM</a> · CARTO",
				url: "https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png",
				subdomains: "abcd"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapController, {
				selectedId,
				panelOpen
			}),
			places.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marker, {
				position: place.coords,
				icon: markerIcon(place, selectedId === place.id),
				eventHandlers: { click: () => onSelect(place.id) },
				keyboard: true,
				title: place.name
			}, place.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomControl, {})
		]
	});
}
//#endregion
export { CityMapInner as default };
