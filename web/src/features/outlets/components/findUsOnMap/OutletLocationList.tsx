import { MapPin, Navigation } from "lucide-react";
import type { Outlet } from "../../data/outlets";

interface OutletLocationListProps {
  outlets: Outlet[];
  selectedOutletId: string | null;
  onSelectOutlet: (id: string) => void;
}

const OutletLocationList = ({
  outlets,
  selectedOutletId,
  onSelectOutlet,
}: OutletLocationListProps) => {
  return (
    <div className="flex flex-col gap-3">
      {outlets.map((outlet) => {
        const isSelected = selectedOutletId === outlet.id;
        const isBliss = outlet.brand === "bliss";
        return (
          <button
            key={outlet.id}
            type="button"
            onClick={() => onSelectOutlet(outlet.id)}
            className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 ${
              isSelected
                ? "border-aepy-orange bg-aepy-orange/10 shadow-sm"
                : "border-aepy-caramel/50 bg-white hover:border-aepy-orange/60"
            }`}
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-aepy-orange/10 text-aepy-orange">
              <MapPin size={20} />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-aepy-chocolate">
                {isBliss ? "Bliss Bakes" : `Aepy Bakery – ${outlet.branchName}`}
              </span>

              <span className="mt-1 block text-sm leading-relaxed text-aepy-chocolate/65">
                {outlet.address}
              </span>
            </span>

            <Navigation
              size={18}
              className={`shrink-0 ${
                isSelected ? "text-aepy-orange" : "text-aepy-chocolate/40"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default OutletLocationList;
