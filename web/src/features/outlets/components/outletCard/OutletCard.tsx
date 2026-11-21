import { MapPin, Store, ChevronRight } from "lucide-react";
import type { Outlet } from "../../data/outlets";

interface OutletCardProps {
  outlet: Outlet;
}

const OutletCard = ({ outlet }: OutletCardProps) => {
  const isBliss = outlet.brand === "bliss";
  const brandName = isBliss ? "Bliss Bakes" : "Aepy Bakery";

  const mapsUrl =
    outlet.googleMapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${outlet.address}, ${outlet.city}, ${outlet.district}, ${outlet.state}, India`,
    )}`;

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isBliss
          ? "border-aepy-chocolate bg-aepy-chocolate"
          : "border-aepy-caramel/60 bg-aepy-cream shadow-sm"
      }`}
    >
      {/* Image */}
      <div className="relative aspect-16/10 overflow-hidden">
        {outlet.image ? (
          <img
            src={outlet.image}
            alt={`${brandName} ${outlet.branchName} storefront`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-aepy-caramel/30">
            <Store size={40} className="text-aepy-chocolate/40" />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div
        className={`relative -mt-5 flex flex-1 flex-col rounded-t-[1.75rem] px-5 pb-4 pt-4 sm:px-6 ${
          isBliss ? "bg-aepy-chocolate" : "bg-aepy-cream"
        }`}
      >
        {/* Brand Name */}
        <h3
          className={`font-serif text-xl font-semibold sm:text-2xl ${
            isBliss ? "text-aepy-cream" : "text-aepy-chocolate"
          }`}
        >
          {brandName}
        </h3>

        {/* Address and Directions */}
        <div className="mt-3 flex items-center gap-3">
          <MapPin
            size={22}
            strokeWidth={2.3}
            className="shrink-0 text-aepy-orange"
          />

          <p
            className={`min-w-0 flex-1 text-sm leading-relaxed ${
              isBliss ? "text-aepy-cream/85" : "text-aepy-chocolate/80"
            }`}
          >
            {outlet.address}
          </p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Get directions to ${brandName} - ${outlet.branchName}`}
            className={`flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isBliss
                ? "bg-aepy-cream text-aepy-chocolate hover:bg-aepy-orange hover:text-white"
                : "bg-aepy-orange text-white hover:bg-aepy-chocolate"
            }`}
          >
            <ChevronRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default OutletCard;
