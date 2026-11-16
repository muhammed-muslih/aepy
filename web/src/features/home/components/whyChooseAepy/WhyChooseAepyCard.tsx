import Card from "@/components/ui/Card";
import type { WhyChooseAepyItem } from "../../data/whyChooseAepyData";

interface WhyChooseAepyCardProps {
  item: WhyChooseAepyItem;
}

const WhyChooseAepyCard = ({ item }: WhyChooseAepyCardProps) => {
  const Icon = item.icon;

  return (
    <Card
      variant="default"
      padding="none"
      radius="2xl"
      className="
        group flex flex-col h-full overflow-hidden
        border border-aepy-chocolate/5
        cursor-default
        transition-all duration-500 ease-out
        hover:-translate-y-1
        hover:shadow-xl hover:shadow-aepy-chocolate/10
      "
    >
      {/* Image */}
      <div className="relative aspect-5/4 overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Card Content */}
      <div className="relative flex flex-1 flex-col items-center px-4 pb-6 pt-9 text-center sm:px-5 sm:pb-7">
        {/* Overlapping Icon */}
        <div
          className="
            absolute -top-7
            flex size-14 items-center justify-center
            rounded-full
            border-4 border-white
            bg-aepy-cream
            text-aepy-orange
            shadow-md shadow-aepy-chocolate/10
            transition-all duration-500
            group-hover:-translate-y-1
            group-hover:bg-aepy-orange
            group-hover:text-white
          "
        >
          <Icon size={24} strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3
          className="
            font-heading text-xl font-semibold
            leading-tight tracking-tight
            text-aepy-chocolate
            transition-colors duration-300
            group-hover:text-aepy-orange
            sm:text-2xl
          "
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3 max-w-xs
            text-sm leading-relaxed
            text-aepy-burnt/80
            sm:text-base
          "
        >
          {item.description}
        </p>

        {/* Decorative Accent */}
        <span
          className="
            mt-5 h-1 w-10 rounded-full
            bg-aepy-orange
            transition-all duration-500
            group-hover:w-16
          "
        />
      </div>
    </Card>
  );
};

export default WhyChooseAepyCard;
