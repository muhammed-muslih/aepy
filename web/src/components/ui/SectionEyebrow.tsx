import type { ReactNode } from "react";

interface SectionEyebrowProps {
  children: ReactNode;
  className?: string;
  textColor?: string | undefined;
}

const SectionEyebrow = ({
  children,
  className = "",
  textColor = "text-aepy-burnt",
}: SectionEyebrowProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span
        aria-hidden="true"
        className="h-0.5 w-8 sm:w-10 md:w-12 lg:w-14 shrink-0 bg-aepy-orange"
      />
      <span
        className={`flex items-center gap-2 whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] md:text-base ${textColor}`}
      >
        {children}
      </span>
    </div>
  );
};
export default SectionEyebrow;
