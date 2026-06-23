import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/portfolio";
import { Laurel, GoldRule } from "./ornaments";

const STATUE =
  "https://images.unsplash.com/photo-1571033690858-b336bfa1dd0f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxncmVlayUyMG1hcmJsZSUyMHN0YXR1ZXxlbnwwfHx8fDE3Nzg4NjQyMjN8MA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yStatue = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opTitle = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden marble-bg grain"
    >
      {/* Decorative side rails */}
      <div className="hidden md:flex absolute left-6 top-0 bottom-0 items-center pointer-events-none">
        <span className="vertical font-accent text-[10px] text-[#5c5c5c]">
          ANNO · MMXXV — VIT CHENNAI
        </span>
      </div>
      <div className="hidden md:flex absolute right-6 top-0 bottom-0 items-center pointer-events-none">
        <span className="vertical font-accent text-[10px] text-[#5c5c5c]">
          OPVS · IN · PROGRESSV
        </span>
      </div>

      {/* Statue image, parallax */}
      <motion.div
        style={{ y: yStatue }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <div className="relative h-[88vh] w-[60vw] max-w-[700px] -mb-12 opacity-90">
          <img
            src={STATUE}
            alt="Classical Greek statue"
            className="h-full w-full object-cover object-top"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              filter: "grayscale(20%) contrast(0.95)",
            }}
          />
          <div className="absolute inset-0 bg-[#f9f6f0] mix-blend-soft-light opacity-40" />
        </div>
      </motion.div>

      {/* Floating laurels */}
      <Laurel className="absolute top-32 left-10 w-40 opacity-60 drift" />
      <Laurel
        flip
        className="absolute bottom-40 right-10 w-44 opacity-60 drift"
      />

      {/* Centerpiece title */}
      <motion.div
        style={{ y: yTitle, opacity: opTitle }}
        className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-40 md:pt-44 pb-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-accent text-[11px] text-[#5c5c5c] mb-8"
          data-testid="hero-overline"
        >
          PORTFOLIVM · I
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hero-title text-center md:text-left"
          data-testid="hero-title"
        >
          PRANAV
          <span className="block italic font-light text-[#997a15] -mt-3">
            &nbsp;Pn.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end"
        >
          <div className="md:col-span-7">
            <p
              data-testid="hero-tagline"
              className="font-display text-2xl md:text-3xl leading-snug text-[#1a1a1a] max-w-2xl"
            >
              {profile.tagline}
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="font-accent text-[10px] text-[#5c5c5c] mb-3">
              · CHAPTER ·
            </p>
            <p className="font-display text-xl text-[#1a1a1a]">
              {profile.role}
            </p>
            <p className="font-body text-sm text-[#5c5c5c] mt-1">
              {profile.location}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 1 }}
          className="mt-14 flex flex-wrap gap-4"
        >
          <a href="#work" className="btn-ink" data-testid="hero-cta-work">
            View Works
          </a>
          <a href="#contact" className="btn-ghost" data-testid="hero-cta-contact">
            Make Contact
          </a>
        </motion.div>

        <div className="mt-20">
          <GoldRule />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="font-accent text-[10px] text-[#5c5c5c]">DESCEND</span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#d4af37] to-transparent"
        />
      </motion.div>
    </section>
  );
}
