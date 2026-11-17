import { ArrowUpRight } from "lucide-react";
import type { BestSellerProduct } from "../../data/bestSellersData";

interface ProductCardProps {
  product: BestSellerProduct;
  layout?: "horizontal" | "vertical";
}

const ProductCard = ({ product, layout = "vertical" }: ProductCardProps) => {
  const isHorizontal = layout === "horizontal";

  return (
    <article
      className={`
        group flex h-full overflow-hidden
        rounded-2xl border border-aepy-chocolate/5
        bg-white
        transition-all duration-500
        hover:-translate-y-1 cursor-pointer
        hover:shadow-xl hover:shadow-aepy-chocolate/10
        ${isHorizontal ? "flex-row" : "flex-col"}
      `}
    >
      {/* Product Image */}
      <div
        className={`
          relative shrink-0 overflow-hidden
          ${isHorizontal ? "w-2/5" : "aspect-video w-full"}
        `}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          draggable={false}
          className="
            h-full w-full object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Product Information */}
      <div
        className={`
          flex flex-1 flex-col
          ${
            isHorizontal
              ? "justify-center gap-2 p-3 sm:gap-3 sm:p-4"
              : "gap-2 p-3 sm:p-4"
          }
        `}
      >
        <h3
          className="
          font-heading font-bold
          text-aepy-chocolate
          text-lg sm:text-xl lg:text-2xl
        "
        >
          {product.name}
        </h3>

        <p
          className="
          text-xs leading-relaxed
          text-aepy-chocolate/70
          sm:text-sm
        "
        >
          {product.description}
        </p>

        <div
          className="
          mt-auto inline-flex w-fit items-center gap-2
          text-xs font-bold
          text-aepy-orange
          transition-colors duration-300
          group-hover:text-aepy-burnt
        "
        >
          <span>Discover More</span>

          <ArrowUpRight
            size={16}
            className="
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>
      </div>
    </article>
  );
};
export default ProductCard;
