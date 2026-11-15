import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const SectionHeading = ({
  children,
  className = "",
  as: Tag = "h2",
}: SectionHeadingProps) => {
  return (
    <Tag
      className={`
        font-heading
        text-4xl font-semibold
        leading-[1.1]
        tracking-tight
        text-aepy-chocolate
        sm:text-5xl
        lg:text-6xl
        xl:text-7xl
        ${className}
      `}
    >
      {children}
    </Tag>
  );
};

export default SectionHeading;
