import Card from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";

export interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

const CategoryCard = ({
  name,
  description,
  image,
  featured = false,
}: CategoryCardProps) => {
  return (
    <Card
      variant="default"
      padding="none"
      radius="xl"
      className="group overflow-hidden border h-full border-aepy-chocolate/5 transition-all duration-500 ease-out hover:-translate-y-1
    hover:shadow-xl hover:shadow-aepy-chocolate/10"
    >
      {featured ? (
        <div className="group relative h-55 overflow-hidden rounded-3xl sm:h-60">
          {/* Full card image */}
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />

          {/* Dark gradient for text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-[#24150F]/90 via-[#24150F]/30 via-45% to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 sm:p-5 lg:p-6">
            <div className="min-w-0">
              <h3 className="font-heading text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
                {name}
              </h3>

              <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/85 sm:text-sm lg:text-base">
                {description}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-aepy-orange text-white 
            transition-all duration-1000 group-hover:translate-x-1 group-hover:bg-white group-hover:text-aepy-chocolate sm:h-10 sm:w-10"
            >
              <ArrowUpRight size={19} />
            </span>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={image}
                alt={name}
                loading="lazy"
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Bottom content */}
            <div className="flex flex-1 items-center justify-between gap-2 bg-linear-to-b from-[#F8F4E9] via-[#F8F4E9] to-[#E6C9A3]/50 p-3 sm:p-4">
              <div className="min-w-0">
                <h3 className="font-heading text-base font-semibold leading-tight text-aepy-chocolate sm:text-xl">
                  {name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-aepy-chocolate/75">
                  {description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aepy-orange text-white 
              transition-all duration-1000 group-hover:translate-x-1 group-hover:scale-110"
              >
                <ArrowUpRight size={17} />
              </span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CategoryCard;
