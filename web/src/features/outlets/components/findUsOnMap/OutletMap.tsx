import { useEffect } from "react";
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import type { Outlet } from "../../data/outlets";

interface OutletMapProps {
  outlets: Outlet[];
  selectedOutletId: string | null;
  onSelectOutlet: (id: string) => void;
}

const OutletMap = ({
  outlets,
  selectedOutletId,
  onSelectOutlet,
}: OutletMapProps) => {
  // Keep only outlets that have coordinates.
  const mappedOutlets = outlets.filter((outlet) => outlet.coordinates);

  // Group outlets that share the same physical coordinates.
  const locations = Object.values(
    mappedOutlets.reduce<Record<string, Outlet[]>>((groups, outlet) => {
      const { lat, lng } = outlet.coordinates!;
      const key = `${lat.toFixed(5)},${lng.toFixed(5)}`;

      if (!groups[key]) groups[key] = [];
      groups[key].push(outlet);

      return groups;
    }, {}),
  );

  return (
    <div className="h-full min-h-95 overflow-hidden rounded-2xl border border-aepy-caramel/50">
      <MapContainer
        center={[16.835, 74.635]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapViewport
          locations={locations}
          selectedOutletId={selectedOutletId}
        />

        {locations.map((group) => {
          const firstOutlet = group[0];
          const coordinates = firstOutlet.coordinates!;

          const isSelected = group.some(
            (outlet) => outlet.id === selectedOutletId,
          );

          return (
            <CircleMarker
              key={firstOutlet.id}
              center={[coordinates.lat, coordinates.lng]}
              radius={isSelected ? 11 : 8}
              pathOptions={{
                color: "#FFFFFF",
                weight: 3,
                fillColor: "#FF8A00",
                fillOpacity: 1,
              }}
              eventHandlers={{
                click: () => onSelectOutlet(firstOutlet.id),
              }}
            >
              <Popup>
                <div className="min-w-36">
                  {group.map((outlet) => (
                    <div key={outlet.id} className="mb-2 last:mb-0">
                      <p className="font-semibold">
                        {outlet.brand === "bliss"
                          ? "Bliss Bakes"
                          : `Aepy Bakery – ${outlet.branchName}`}
                      </p>

                      <p className="text-sm">{outlet.address}</p>

                      {outlet.googleMapsUrl && (
                        <a
                          href={outlet.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-sm font-medium text-orange-600"
                        >
                          Get directions
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

// This component controls the map from inside MapContainer.
interface MapViewportProps {
  locations: Outlet[][];
  selectedOutletId: string | null;
}

const MapViewport = ({ locations, selectedOutletId }: MapViewportProps) => {
  const map = useMap();

  useEffect(() => {
    const selectedOutlet = locations
      .flat()
      .find((outlet) => outlet.id === selectedOutletId);

    if (selectedOutlet?.coordinates) {
      map.flyTo(
        [selectedOutlet.coordinates.lat, selectedOutlet.coordinates.lng],
        16,
        { duration: 0.8 },
      );
      return;
    }

    const bounds = locations
      .flat()
      .filter((outlet) => outlet.coordinates)
      .map(
        (outlet) =>
          [outlet.coordinates!.lat, outlet.coordinates!.lng] as [
            number,
            number,
          ],
      );

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [35, 35] });
    }
  }, [map, locations, selectedOutletId]);

  return null;
};

export default OutletMap;
