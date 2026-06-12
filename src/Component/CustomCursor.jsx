import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName?.toLowerCase() === "a" ||
        e.target.tagName?.toLowerCase() === "button" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const outerVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      backgroundColor: "transparent",
      borderColor: "rgba(253, 216, 53, 0.8)", // #FDD835
      borderWidth: "2px",
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.8,
      backgroundColor: "rgba(253, 216, 53, 0.5)", // Yellow fill with opacity
      borderColor: "transparent",
      borderWidth: "0px",
    }
  };

  const innerVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
      opacity: 1
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0,
      opacity: 0
    }
  };

  if (mousePosition.x === 0 && mousePosition.y === 0) return null;

  return (
    <>
      {/* Outer Glow / Glass Circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center backdrop-blur-sm"
        variants={outerVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.5
        }}
      >
        <AnimatePresence>
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[#0a231a] text-[9px] font-black tracking-widest uppercase"
            >
              Click
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-2 h-2 bg-[#FDD835] rounded-full pointer-events-none z-[10000] hidden md:block shadow-lg"
        variants={innerVariants}
        animate={isHovering ? "hover" : "default"}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
