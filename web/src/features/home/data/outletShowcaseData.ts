export interface OutletShowcase {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  logo: string;
  badge: string;
  ctaLabel: string;
  ctaHref: string;
}

export const aepyOutletData: OutletShowcase = {
  id: "aepy-bakery",
  name: "Aepy Is Closer Than Ever.",
  description:
    "Five places, one familiar taste. Visit an Aepy outlet and experience the goodness of our bakery favourites.",
  image: "/images/original/outlets/aepy-store-placeholder.png",
  imageAlt: "Aepy Bakery storefront with warm interior lighting",
  logo: "/images/original/logo/aepy_logo_transparent.png",
  badge: "5 Outlets",
  ctaLabel: "Explore Our Outlets",
  ctaHref: "/outlets",
};

export const blissShowcaseData: OutletShowcase = {
  id: "bliss-bakes",
  name: "Bliss Bakes",
  description:
    "Discover specialty bakes, fine treats and a delightful selection of premium dry fruits.",
  image: "/images/original/outlets/bliss-showcase.png",
  imageAlt: "Premium chocolate cake, truffles and assorted dry fruits",
  logo: "/images/original/logo/bliss-bakes-logo.png",
  badge: "Premium Shop",
  ctaLabel: "Discover Bliss",
  ctaHref: "/bliss",
};
