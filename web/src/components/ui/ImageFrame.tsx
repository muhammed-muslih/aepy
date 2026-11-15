interface ImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const ImageFrame = ({
  src,
  alt,
  className = "",
  imageClassName = "",
}: ImageFrameProps) => {
  return (
    <div
      className={`
        relative overflow-hidden
        rounded-2xl
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        decoding="async"
        className={`
          block h-full w-full
          object-cover
          select-none
          ${imageClassName}
        `}
      />
    </div>
  );
};

export default ImageFrame;
