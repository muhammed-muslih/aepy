import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  headingColor?: string;
}

const SectionHeading = ({
  children,
  className = "",
  as: Tag = "h2",
  headingColor = "text-aepy-chocolate",
}: SectionHeadingProps) => {
  return (
    <Tag
      className={`
        font-heading
        text-3xl
        sm:text-4xl font-semibold
        leading-tight
        tracking-tight
        lg:text-5xl
        xl:text-6xl
        ${className}
        ${headingColor}
      `}
    >
      {children}
    </Tag>
  );
};

export default SectionHeading;
