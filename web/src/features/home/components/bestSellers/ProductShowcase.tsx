import FeaturedProductCard from "./FeaturedProductCard";
import ProductCard from "./ProductCard";
import Reveal from "@/components/animations/Reveal";

import {
  featuredProduct,
  supportingProducts,
} from "../../data/bestSellersData";

const ProductShowcase = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:items-stretch">
      {/* Featured Product */}
      <Reveal direction="up" className="h-full">
        <FeaturedProductCard product={featuredProduct} />
      </Reveal>

      {/* Supporting Products */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5">
        {/* Ghee Toast */}
        <Reveal direction="up" delay={0.12} className="h-full">
          <ProductCard product={supportingProducts[0]} layout="horizontal" />
        </Reveal>

        {/* Khari and Cookies */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <Reveal direction="up" delay={0.24} className="h-full">
            <ProductCard product={supportingProducts[1]} />
          </Reveal>

          <Reveal direction="up" delay={0.36} className="h-full">
            <ProductCard product={supportingProducts[2]} />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
