import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/portfolio";
import { Meander, GoldRule } from "./ornaments";

export default function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setI((v) => (v + 1) % testimonials.length),
      7000,
    );
    return () => clearInterval(t);
  }, []);

  const current = testimonials[i];

  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="relative py-32 md:py-44 bg-[#1a1a1a] text-[#f9f6f0] overflow-hidden"
    >
      <Meander className="absolute top-0 left-0 right-0 opacity-90" />

      {/* Soft gold radial */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px 400px at 50% 30%, rgba(212,175,55,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
        <p className="font-accent text-[11px] tracking-[0.35em] text-[#e8ce8a] mb-8">
          · V · VOICES FROM THE FORVM
        </p>

        <div className="relative min-h-[260px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              data-testid={`testimonial-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display italic text-3xl md:text-5xl leading-[1.15]"
            >
              <span className="text-[#d4af37] font-display not-italic">“</span>
              {current.quote}
              <span className="text-[#d4af37] font-display not-italic">”</span>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10">
          <GoldRule />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`a-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <p className="font-display text-xl">{current.name}</p>
            <p className="font-accent text-[10px] tracking-[0.3em] text-[#e8ce8a]/80 mt-2">
              {current.role.toUpperCase()}
            </p>
          </motion.div>
        </AnimatePresence>

        <div
          className="mt-12 flex items-center justify-center gap-3"
          data-testid="testimonial-dots"
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              data-testid={`testimonial-dot-${idx}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-[#d4af37]" : "w-6 bg-[#5c5c5c]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
