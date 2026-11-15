import type { CSSProperties } from "react";
import type { Ref } from "react";

interface BadgeProps {
  className?: string;
  year?: string;
  topText?: string;
  badgeRef?: Ref<HTMLDivElement>;
}

const createScallopPath = (
  center: number,
  radius: number,
  amplitude: number,
  lobes: number,
  steps = 240,
) => {
  return (
    Array.from({ length: steps }, (_, i) => {
      const angle = (i / steps) * Math.PI * 2;
      const r = radius + amplitude * Math.cos(lobes * angle);

      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);

      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    }).join(" ") + " Z"
  );
};

const Wheat = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 100"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M8 90 Q30 55 45 10"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {[
      "M14 76 Q-1 73 2 59 Q16 60 14 76Z",
      "M18 65 Q35 68 35 52 Q21 51 18 65Z",
      "M25 48 Q9 46 12 32 Q27 34 25 48Z",
      "M30 37 Q46 39 48 23 Q33 23 30 37Z",
      "M38 23 Q25 18 30 5 Q43 10 38 23Z",
    ].map((path, index) => (
      <path key={index} d={path} fill="currentColor" />
    ))}
  </svg>
);

const Badge = ({
  className = "",
  year = "1965",
  topText = "Serving Happiness Since",
  badgeRef,
}: BadgeProps) => {
  const outerPath = createScallopPath(150, 137, 5, 20);
  const innerPath = createScallopPath(150, 128, 4, 20);

  const style = {
    "--badge-brown": "#4b2e22",
    "--badge-orange": "#f08c00",
    "--badge-ivory": "#e3dfd4",
  } as CSSProperties;

  return (
    <div
      ref={badgeRef}
      style={style}
      role="img"
      aria-label={`${topText} ${year}`}
      className={`
       isolate aspect-square shrink-0
        ${className}
      `}
    >
      {/* Badge background */}
      <svg
        viewBox="0 0 300 300"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <path
          d={outerPath}
          fill="var(--badge-brown)"
          stroke="var(--badge-orange)"
          strokeWidth="7"
          strokeLinejoin="round"
        />

        <path
          d={innerPath}
          fill="none"
          stroke="var(--badge-orange)"
          strokeWidth="1.5"
          opacity="0.65"
        />
      </svg>

      {/* Badge content */}
      <div
        className="
        absolute inset-[12%]
        flex flex-col
        items-center justify-center
        text-center
      "
      >
        <span
          className="
          max-w-[90%]
          font-serif font-semibold
          text-[8px]
          leading-tight
          sm:text-[10px]
          lg:text-[12px]
          text-aepy-ivory
        "
        >
          {topText}
        </span>

        <div
          className="
          relative mt-[3%]
          flex w-full items-center justify-center
        "
        >
          <Wheat
            className="
            absolute left-[1%] top-1/2
            h-[70%] w-[18%]
            -translate-y-1/2
            rotate-[-18deg]
            text-aepy-orange
          "
          />

          <span
            className="
            font-serif font-bold
            text-[30px]
            leading-none
            tracking-tight
            sm:text-[36px]
            lg:text-[48px]
            text-aepy-orange"
          >
            {year}
          </span>

          <Wheat
            className="
            absolute right-[1%] top-1/2
            h-[70%] w-[18%]
            -translate-y-1/2
            rotate-18
            scale-x-[-1]
           text-aepy-orange
          "
          />
        </div>

        <svg
          viewBox="0 0 120 15"
          className="mt-[4%] w-[45%]"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 11 Q60 -5 117 7"
            stroke="var(--badge-orange)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Badge;
