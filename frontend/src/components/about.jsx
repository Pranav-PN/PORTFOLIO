import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile, stats } from "../data/portfolio";
import { GoldRule, Meander } from "./ornaments";

const STATUE_ALT =
  "https://images.unsplash.com/photo-1670813885725-e3c5391dcd31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxncmVlayUyMG1hcmJsZSUyMHN0YXR1ZXxlbnwwfHx8fDE3Nzg4NjQyMjN8MA&ixlib=rb-4.1.0&q=85";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"]);

  return (
    <section
      id="about"
      ref={ref}
      data-testid="about-section"
      className="relative py-32 md:py-44 marble-bg"
    >
      <Meander className="absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-[11px] text-[#5c5c5c] mb-6">
              · I · ABOUT THE AUTHOR
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Of stone,<br />
              and of <em className="text-[#997a15]">silicon</em>.
            </h2>
          </motion.div>

          <motion.div
            style={{ y: yImg }}
            className="mt-12 relative w-full max-w-md aspect-[3/4] overflow-hidden"
          >
            <img
              src={STATUE_ALT}
              alt="Classical bust"
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(35%) contrast(0.95)" }}
            />
            <div className="absolute inset-0 ring-1 ring-[#d4af37]/40 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d4af37]/60 -z-0" />
          </motion.div>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl leading-snug text-[#1a1a1a]"
            data-testid="about-bio"
          >
            “{profile.shortBio}”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-12 space-y-6 font-body text-base md:text-lg text-[#5c5c5c] leading-relaxed max-w-2xl"
          >
            <p>
              I see programming as a craft inherited from masons and
              mathematicians alike. Each function is a chiselled block; each
              architecture, a colonnade. I'm drawn to the rare projects that
              still feel hand-made, even at scale.
            </p>
            <p>
              When I'm not coding, you'll find me reading on systems design,
              tinkering with my keyboard layout, or debating tabs vs. spaces
              over filter coffee in Chennai.
            </p>
          </motion.div>

          {/* Stats / Tablet */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#e5e0d8] border border-[#e5e0d8]"
            data-testid="about-stats"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="bg-[#f9f6f0] p-6 md:p-8"
              >
                <p className="font-display text-4xl md:text-5xl text-[#1a1a1a]">
                  {s.value}
                </p>
                <p className="font-accent text-[10px] text-[#5c5c5c] mt-2">
                  {s.label.toUpperCase()}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16">
            <GoldRule />
          </div>
        </div>
      </div>
    </section>
  );
}
