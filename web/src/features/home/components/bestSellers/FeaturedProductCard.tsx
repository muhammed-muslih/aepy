import { ArrowRight, Sparkles } from "lucide-react";
import { type BestSellerProduct } from "../../data/bestSellersData";

interface FeaturedProductCardProps {
  product: BestSellerProduct;
}

const FeaturedProductCard = ({ product }: FeaturedProductCardProps) => {
  return (
    <article
      className="group flex h-full min-h-0 flex-col overflow-hidden rounded-3xl bg-aepy-chocolate 
    transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-aepy-chocolate/15 cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative min-h-0 flex-1 overflow-hidden ">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          draggable={false}
          className="
            h-64 sm:h-72 lg:h-80 w-full object-cover
            transition-transform duration-1000 ease-out
            group-hover:scale-105
          "
        />

        {/* Subtle Image Overlay */}
        <div
          className="
          absolute inset-0
          bg-linear-to-t
          from-aepy-chocolate/30
          via-transparent to-transparent
        "
        />
      </div>

      {/* Product Information */}
      <div
        className="
        flex flex-none flex-col items-start
          gap-3 p-5 sm:gap-3 sm:p-6 lg:gap-3 lg:p-6"
      >
        {/* Product Label */}
        {product.label && (
          <span
            className="
            inline-flex items-center gap-2
            rounded-full
            bg-aepy-orange/15
            px-3 py-2
            text-[10px] font-bold uppercase
            tracking-[0.16em]
            text-aepy-orange
            sm:text-xs"
          >
            <Sparkles size={14} />
            {product.label}
          </span>
        )}

        {/* Product Name */}
        <h3
          className="
          font-heading
          text-3xl font-bold leading-tight
          text-aepy-cream
          sm:text-4xl
          lg:text-5xl"
        >
          {product.name}
        </h3>

        {/* Product Description */}
        <p
          className="
          max-w-md
          text-sm leading-relaxed
          text-aepy-cream/75
          sm:text-base"
        >
          {product.description}
        </p>

        {/* Discover More */}
        <div
          className="
          mt-3 inline-flex items-center gap-3
          text-sm font-bold text-aepy-orange
          transition-colors duration-300
          group-hover:text-aepy-cream"
        >
          <span>Discover More</span>

          <ArrowRight
            size={19}
            className="
              transition-transform duration-300
              group-hover:translate-x-2
            "
          />
        </div>
      </div>
    </article>
  );
};

export default FeaturedProductCard;
