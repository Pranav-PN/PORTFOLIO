import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { Meander } from "./ornaments";

function ProjectCard({ project, index }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      data-testid={`project-card-${project.id}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="group grid md:grid-cols-12 gap-8 md:gap-12 items-center"
    >
      <div
        className={`md:col-span-7 ${reverse ? "md:order-2" : ""} overflow-hidden`}
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(15%) contrast(0.96)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          <div className="absolute top-4 left-4 font-accent text-[10px] tracking-[0.3em] text-white/90 px-3 py-1 border border-white/40 backdrop-blur-sm">
            {project.year}
          </div>
        </motion.div>
      </div>

      <div
        className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-8" : "md:pl-8"}`}
      >
        <p className="font-accent text-[10px] text-[#5c5c5c]">
          NO. 0{index + 1}
        </p>
        <h3 className="mt-3 font-display text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 font-display italic text-xl text-[#997a15]">
          {project.subtitle}
        </p>
        <p className="mt-6 font-body text-base text-[#5c5c5c] leading-relaxed">
          {project.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li
              key={t}
              className="font-accent text-[9px] tracking-[0.25em] px-3 py-1 border border-[#d4af37]/50 text-[#997a15]"
            >
              {t.toUpperCase()}
            </li>
          ))}
        </ul>
        <a
          href={project.href}
          className="mt-8 inline-block gold-link font-accent text-[11px]"
          data-testid={`project-link-${project.id}`}
        >
          STUDY THE WORK →
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="relative py-32 md:py-44 bg-[#ffffff]"
    >
      <Meander className="absolute top-0 left-0 right-0" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-accent text-[11px] text-[#5c5c5c] mb-6">
              · II · SELECTED WORKS
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              The <em className="text-[#997a15]">Pantheon</em>.
            </h2>
          </div>
          <p className="font-body text-[#5c5c5c] max-w-md">
            A small collection of artefacts — each one carved during a different
            chapter of study. Click through to study the craft.
          </p>
        </motion.div>

        <div className="space-y-28 md:space-y-40">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
