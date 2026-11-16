import { Award, CakeSlice, Leaf, Gift, type LucideIcon } from "lucide-react";

export interface WhyChooseAepyItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}

export const whyChooseAepyData: WhyChooseAepyItem[] = [
  {
    id: 1,
    title: "A Tradition Since 1965",
    description:
      "Decades of baking heritage, bringing generations together through taste and tradition.",
    icon: Award,
    image: "/images/original/why-choose-aepy/heritage.png",
    imageAlt: "Aepy Bakery's baking heritage and tradition",
  },
  {
    id: 2,
    title: "Freshly Crafted Goodness",
    description:
      "Every creation is made with care to deliver delightful flavours and memorable moments.",
    icon: CakeSlice,
    image: "/images/original/why-choose-aepy/freshly-crafted.png",
    imageAlt: "Freshly baked bakery products",
  },
  {
    id: 3,
    title: "Quality in Every Bite",
    description:
      "Thoughtfully selected ingredients come together to create goodness in every bite.",
    icon: Leaf,
    image: "/images/original/why-choose-aepy/quality-ingredients.png",
    imageAlt: "Quality ingredients used in bakery products",
  },
  {
    id: 4,
    title: "Moments Worth Celebrating",
    description:
      "From everyday cravings to life's special celebrations, there's something for every moment.",
    icon: Gift,
    image: "/images/original/why-choose-aepy/every-occasion.png",
    imageAlt: "Bakery treats prepared for special occasions",
  },
];
