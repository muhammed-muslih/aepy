export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: "dry-cakes",
    name: "Dry Cakes",
    description:
      "Soft, rich and delightful cakes baked for everyday indulgence and sweet moments.",
    image: "/images/original/categories/dry-cakes.png",
    featured: true,
  },
  {
    id: "fc-cakes",
    name: "FC Cakes",
    description:
      "Beautifully crafted fresh cream cakes and pastries, made for celebrations and special occasions.",
    image: "/images/original/categories/fc-cakes.png",
    featured: true,
  },
  {
    id: "kadak",
    name: "Kadak",
    description:
      "Golden, crispy and full of flavour — perfect companions for your tea and coffee moments.",
    image: "/images/original/categories/namkeen.png",
  },
  {
    id: "fresh-bakes",
    name: "Fresh Bakes",
    description:
      "Freshly baked everyday essentials, bringing softness and goodness to every bite.",
    image: "/images/original/categories/fresh-bakes.png",
  },
  {
    id: "cookies",
    name: "Cookies",
    description:
      "Delightfully crisp and delicious treats for your little moments of happiness.",
    image: "/images/original/categories/cookies.png",
  },
  {
    id: "sweets",
    name: "Sweets",
    description:
      "Traditional sweetness and delightful flavours, made to be shared with loved ones.",
    image: "/images/original/categories/sweets.png",
  },
  {
    id: "desserts",
    name: "Desserts",
    description:
      "Indulgent creations with delightful textures and flavours to satisfy every sweet craving.",
    image: "/images/original/categories/desserts.png",
  },
  {
    id: "namkeen",
    name: "Namkeen",
    description:
      "A savoury collection of crunchy mixtures and traditional favourites, perfect for every snack break.",
    image: "/images/original/categories/namkeen.png",
  },
  {
    id: "buttercream-cakes",
    name: "Butter Cakes",
    description:
      "Beautiful cakes finished with smooth, rich and delicious buttercream.",
    image: "/images/original/categories/buttercream-cakes.png",
  },
  {
    id: "fast-food",
    name: "Fast Food",
    description:
      "Delicious savoury favourites, filled with flavour and perfect for any time of the day.",
    image: "/images/original/categories/fast-food.png",
  },
];
