import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "../data/portfolio";
import { Meander } from "./ornaments";

const COLUMN =
  "https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZ3JlZWslMjBhcmNoaXRlY3R1cmUlMjBjb2x1bW58ZW58MHx8fHwxNzc4ODY0MjIzfDA&ixlib=rb-4.1.0&q=85";

function Node({ item, index }) {
  return (
    <motion.li
      data-testid={`exp-item-${index}`}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-16 pb-16 last:pb-0"
    >
      {/* Gold diamond node */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 w-3 h-3 bg-[#d4af37] rotate-45 shadow-[0_0_0_4px_#f9f6f0]"
      />
      {/* Vertical line connector */}
      <span
        aria-hidden="true"
        className="absolute left-[5px] top-5 bottom-0 w-px bg-[#e5e0d8]"
      />
      <p className="font-accent text-[10px] tracking-[0.3em] text-[#997a15]">
        {item.year}
      </p>
      <h3 className="mt-2 font-display text-2xl md:text-3xl text-[#1a1a1a]">
        {item.title}
      </h3>
      <p className="font-body text-sm text-[#5c5c5c] italic mt-1">
        {item.place}
      </p>
      <p className="mt-4 font-body text-base text-[#5c5c5c] leading-relaxed max-w-xl">
        {item.body}
      </p>
    </motion.li>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yCol = useTransform(scrollYProgress, [0, 1], ["-15%", "20%"]);

  return (
    <section
      id="experience"
      ref={ref}
      data-testid="experience-section"
      className="relative py-32 md:py-44 bg-[#fafaf6] overflow-hidden"
    >
      <Meander className="absolute top-0 left-0 right-0" />

      <motion.div
        style={{ y: yCol }}
        className="absolute right-0 top-0 bottom-0 w-[34%] hidden md:block pointer-events-none"
      >
        <img
          src={COLUMN}
          alt="Greek columns"
          className="w-full h-full object-cover opacity-70"
          style={{
            filter: "grayscale(40%) contrast(0.95)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
          }}
        />
      </motion.div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="font-accent text-[11px] text-[#5c5c5c] mb-6">
              · IV · A CURRICULUM IN STONE
            </p>
            <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
              Each year,<br />
              a new <em className="text-[#997a15]">column</em>.
            </h2>
            <p className="mt-8 font-body text-[#5c5c5c] max-w-md leading-relaxed">
              A chronological tablet of study, work, and small triumphs. Read
              from the bottom up if you prefer your stories like the ancients
              did.
            </p>
          </motion.div>
        </div>

        <div className="md:col-span-7">
          <ul className="relative" data-testid="experience-timeline">
            {experience.map((e, i) => (
              <Node key={e.year + i} item={e} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
