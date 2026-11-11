export interface HeroSlide {
  id: string;
  imageName: string;
  alt: string;
  label: string;
  productDescription: string;
}

export interface HeroProductVisualProps {
  imageName: string;
  alt: string;
  label: string;
  description: string;
  activeIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
}
