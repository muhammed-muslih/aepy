export interface BestSellerProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  label?: string;
}

export const featuredProduct: BestSellerProduct = {
  id: "ghee-cake",
  name: "Ghee Cake",
  description:
    "Rich, soft and beautifully golden, our Ghee Cake brings a comforting taste of traditional bakery goodness.",
  image: "/images/original/best-sellers/ghee-cake.png",
  imageAlt: "Golden sliced Ghee Cake from Aepy Bakery",
  label: "A Signature Favourite",
};

export const supportingProducts: BestSellerProduct[] = [
  {
    id: "ghee-toast",
    name: "Ghee Toast",
    description:
      "Golden, crisp and full of flavour, a delightful companion for your everyday tea-time moments.",
    image: "/images/original/best-sellers/ghee-toast.png",
    imageAlt: "Golden crispy Ghee Toast slices",
  },
  {
    id: "khari",
    name: "Khari",
    description:
      "Light, flaky and wonderfully crisp, bringing a satisfying crunch to every tea-time break.",
    image: "/images/original/best-sellers/khari.png",
    imageAlt: "Golden flaky flower-shaped Khari pastries",
  },
  {
    id: "cookies",
    name: "Cookies",
    description:
      "Delightfully crisp and buttery treats, made to add a little sweetness to your everyday moments.",
    image: "/images/original/best-sellers/cookies.png",
    imageAlt: "Assorted butter swirl and chocolate chip cookies",
  },
];
