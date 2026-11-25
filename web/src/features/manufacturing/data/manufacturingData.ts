import { ShieldCheck, Sparkles, BadgeCheck, Leaf } from "lucide-react";

export interface ManufacturingMilestone {
  id: number;
  step: string;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const manufacturingMilestones: ManufacturingMilestone[] = [
  {
    id: 1,
    step: "01",
    title: "Our Beginnings",
    location: "Station Road, Miraj",
    description:
      "Aepy Bakery's production journey began at Station Road, Miraj, where products were prepared for its growing customer base.",
    image: "/images/original/manufacturing/stationroad-factory-placeholder.png",
    imageAlt: "Illustration of a traditional bakery production facility",
  },
  {
    id: 2,
    step: "02",
    title: "Growing with Demand",
    location: "MIDC, Miraj",
    description:
      "As demand for Aepy's products increased, production expanded with a larger manufacturing facility at MIDC, Miraj.",
    image: "/images/original/manufacturing/midc-factory-placeholder.png",
    imageAlt: "Illustration of a larger modern bakery manufacturing facility",
  },
];

export const qualityHighlights = [
  {
    title: "Food Safety",
    description: "Careful handling throughout production.",
    icon: ShieldCheck,
  },
  {
    title: "Hygienic Production",
    description: "A clean and organized production environment.",
    icon: Sparkles,
  },
  {
    title: "Quality Checks",
    description: "Attention to quality at every stage.",
    icon: BadgeCheck,
  },
  {
    title: "Ingredient Care",
    description: "Thoughtful selection and handling of ingredients.",
    icon: Leaf,
  },
];
