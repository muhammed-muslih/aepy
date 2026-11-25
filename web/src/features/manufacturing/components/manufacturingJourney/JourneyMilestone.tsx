import type { ManufacturingMilestone } from "../../data/manufacturingData";
import { MapPin } from "lucide-react";

interface JourneyMilestoneProps {
  milestone: ManufacturingMilestone;
  reverse?: boolean;
}

const JourneyMilestone = ({
  milestone,
  reverse = false,
}: JourneyMilestoneProps) => {
  return (
    <article
      className={`flex h-full flex-col items-center gap-6 lg:flex-row lg:gap-5 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Factory Illustration */}
      <div className="flex w-full shrink-0 items-center justify-center lg:w-[54%]">
        <div className="aspect-5/4 w-full max-w-110">
          <img
            src={milestone.image}
            alt={milestone.imageAlt}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="w-full min-w-0 flex-1">
        {/* Step Number */}
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-aepy-orange text-base font-bold text-white shadow-sm">
            {milestone.step}
          </span>

          <span className="h-px w-12 bg-aepy-orange/60" />
        </div>

        <h3 className="font-serif text-2xl font-semibold leading-tight text-aepy-chocolate sm:text-3xl">
          {milestone.title}
        </h3>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-aepy-orange/10 px-3 py-1.5 text-sm font-semibold text-aepy-burnt">
          <MapPin size={15} strokeWidth={2} />
          <span>{milestone.location}</span>
        </div>

        <p className="mt-4 text-sm font-semibold text-aepy-burnt">
          {milestone.location}
        </p>

        <p className="mt-4 text-sm leading-7 text-aepy-chocolate/75 sm:text-base">
          {milestone.description}
        </p>

        {/* Decorative Accent */}
        <div className="mt-6 h-1 w-14 rounded-full bg-aepy-orange" />
      </div>
    </article>
  );
};

export default JourneyMilestone;
