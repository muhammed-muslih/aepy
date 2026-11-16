const StoryProduct = () => {
  return (
    <div
      className="pointer-events-none
        absolute inset-x-0 -bottom-2 z-40
        h-[34%]
        sm:h-[38%]
        lg:h-[40%]"
    >
      {/* Ghee Toast */}
      <img
        src="/images/original/story/toast-slices.png"
        alt="Aepy Ghee Toast"
        draggable={false}
        className="
          absolute bottom-0 left-0 z-20
          h-[65%] w-[34%]
          object-contain object-bottom
          select-none
          sm:left-[2%] sm:w-[32%]
          lg:left-[1%] lg:h-[75%] lg:w-[32%]
        "
      />

      {/* Khari */}
      <img
        src="/images/original/story/special-khari.png"
        alt="Aepy Khari"
        draggable={false}
        className="
          absolute bottom-0 right-0 z-20
          h-[65%] w-[30%]
          object-contain object-bottom
          select-none
          sm:right-[1%] sm:w-[29%]
          lg:right-[1%] lg:h-[75%] lg:w-[29%]
        "
      />

      {/* Ghee Cake */}
      <img
        src="/images/original/story/ghee-cake-slice.png"
        alt="Aepy Ghee Cake"
        draggable={false}
        className="
          absolute bottom-0 left-1/2 z-30
          h-full w-[48%]
          -translate-x-1/2
          object-contain object-bottom
          select-none
          sm:w-[45%]
          lg:w-[43%]
        "
      />
    </div>
  );
};
export default StoryProduct;
