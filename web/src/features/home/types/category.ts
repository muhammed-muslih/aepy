export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: "light" | "dark";
  size: "featured" | "standard";
  href?: string;
}
