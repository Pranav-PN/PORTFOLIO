import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/** Thin gold progress bar at the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#997a15] via-[#d4af37] to-[#997a15] origin-left z-[60]"
    />
  );
}
