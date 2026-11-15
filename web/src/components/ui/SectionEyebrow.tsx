import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
}

const SectionEyebrow = ({ children, className = "" }: SectionEyebrowProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        aria-hidden="true"
        className="h-0.5 w-10 lg:w-14 shrink-0 bg-aepy-orange"
      />
      <span className="text-sm font-bold uppercase tracking-[0.3em] text-aepy-burnt sm:text-base">
        {children}
      </span>
    </div>
  );
};
export default SectionEyebrow;
