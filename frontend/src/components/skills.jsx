import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { Meander } from "./ornaments";

const marqueeWords = [
  "Patience",
  "·",
  "Proportion",
  "·",
  "Persistence",
  "·",
  "Curiosity",
  "·",
  "Code",
  "·",
  "Craft",
  "·",
  "Clarity",
  "·",
  "Reverence",
  "·",
];

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-32 md:py-44 marble-bg overflow-hidden"
    >
      <Meander className="absolute top-0 left-0 right-0" />

      {/* Background marquee */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-8 opacity-[0.07]">
        <div className="whitespace-nowrap flex marquee-track font-display text-[15vw] leading-none text-[#1a1a1a]">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i} className="mx-8">
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-16 md:mb-24"
        >
          <p className="font-accent text-[11px] text-[#5c5c5c] mb-6">
            · III · INSTRUMENTS OF THE CRAFT
          </p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            The <em className="text-[#997a15]">Atelier</em>.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e5e0d8] border border-[#e5e0d8]"
          data-testid="skills-grid"
        >
          {skills.map((s) => (
            <motion.div
              key={s.group}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="group bg-[#f9f6f0] p-8 md:p-10 transition-colors duration-700 hover:bg-white"
              data-testid={`skill-card-${s.group.toLowerCase()}`}
            >
              <div className="flex items-center justify-between">
                <p className="font-accent text-[10px] tracking-[0.3em] text-[#5c5c5c]">
                  {s.group.toUpperCase()}
                </p>
                <span className="h-px w-10 bg-[#d4af37] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
              <ul className="mt-6 space-y-3">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="font-display text-2xl md:text-3xl text-[#1a1a1a]"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
