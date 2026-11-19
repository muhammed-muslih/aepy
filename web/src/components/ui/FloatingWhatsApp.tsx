import { useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { AEPY_WHATSAPP_NUMBER } from "@/config/contact";

const BUTTON_SIZE = 48;
const EDGE_GAP = 16;

const FloatingWhatsApp = () => {
  const hasDragged = useRef(false);

  const x = useMotionValue(
    typeof window !== "undefined"
      ? window.innerWidth - BUTTON_SIZE - EDGE_GAP
      : 0,
  );

  const y = useMotionValue(
    typeof window !== "undefined" ? window.innerHeight - BUTTON_SIZE - 96 : 0,
  );

  const whatsappUrl = AEPY_WHATSAPP_NUMBER
    ? `https://wa.me/${AEPY_WHATSAPP_NUMBER}`
    : undefined;

  // Keep the button inside the viewport when the window is resized.
  useEffect(() => {
    const handleResize = () => {
      const maxX = window.innerWidth - BUTTON_SIZE - EDGE_GAP;
      const maxY = window.innerHeight - BUTTON_SIZE - EDGE_GAP;

      animate(x, Math.min(Math.max(x.get(), EDGE_GAP), maxX), {
        duration: 0.3,
      });

      animate(y, Math.min(Math.max(y.get(), EDGE_GAP), maxY), {
        duration: 0.3,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [x, y]);

  // Snap to the nearest horizontal edge after dragging.
  const handleDragEnd = () => {
    const maxX = window.innerWidth - BUTTON_SIZE - EDGE_GAP;
    const maxY = window.innerHeight - BUTTON_SIZE - EDGE_GAP;

    const currentX = x.get();
    const currentY = y.get();

    const snapX =
      currentX + BUTTON_SIZE / 2 < window.innerWidth / 2 ? EDGE_GAP : maxX;

    const snapY = Math.min(Math.max(currentY, EDGE_GAP), maxY);

    animate(x, snapX, {
      type: "spring",
      stiffness: 300,
      damping: 25,
    });

    animate(y, snapY, {
      type: "spring",
      stiffness: 300,
      damping: 25,
    });
  };
  return (
    <motion.a
      href={whatsappUrl}
      target={whatsappUrl ? "_blank" : undefined}
      rel={whatsappUrl ? "noopener noreferrer" : undefined}
      aria-label="Chat with Aepy Bakery on WhatsApp"
      onClick={(event) => {
        if (hasDragged.current || !whatsappUrl) {
          event.preventDefault();
          event.stopPropagation();
        }

        hasDragged.current = false;
      }}
      drag
      dragMomentum={false}
      dragElastic={0.05}

      onDragStart={() => {
        hasDragged.current = false;
      }}

      onDrag={(_event, info) => {
        if (Math.abs(info.offset.x) > 5 || Math.abs(info.offset.y) > 5) {
          hasDragged.current = true;
        }
      }}

      onDragEnd={handleDragEnd}
      style={{
        x,
        y,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 50,
        touchAction: "none",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}

      className="
        flex h-12 w-12 cursor-grab items-center justify-center
        rounded-full bg-[#25D366] text-white
        shadow-lg shadow-black/20
        transition-shadow hover:shadow-xl
        active:cursor-grabbing
      "
    >
      <FaWhatsapp size={29} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
