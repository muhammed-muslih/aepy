import type { Ref } from "react";
interface StoryImageFrameProps {
  images: string[];
  className?: string;
  frameRef?: Ref<HTMLDivElement>;
}

const StoryImageFrame = ({
  images,
  className = "",
  frameRef,
}: StoryImageFrameProps) => {
  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          draggable={false}
          loading="eager"
          decoding="async"

          className={`
            absolute inset-0
            h-full w-full
            object-cover
            select-none
            ${index === 0 ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </div>
  );
};

export default StoryImageFrame;
