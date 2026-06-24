import React from "react";
import { profile } from "../data/portfolio";
import { Meander } from "./ornaments";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative bg-[#1a1a1a] text-[#f9f6f0] overflow-hidden"
    >
      <Meander className="opacity-80" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <p className="font-accent text-[10px] tracking-[0.35em] text-[#e8ce8a] mb-4">
            COLOPHON
          </p>
          <h3 className="font-display text-3xl md:text-4xl leading-tight">
            {profile.name} — sculpted in marble, coded in calm.
          </h3>
          <p className="mt-4 font-body text-sm text-[#a6a6a6] max-w-md">
            Designed and built end-to-end. Typography in Cormorant Garamond,
            Cinzel and Outfit. Imagery sourced from Unsplash photographers.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="font-accent text-[10px] tracking-[0.35em] text-[#e8ce8a] mb-4">
            NAVIGATE
          </p>
          <ul className="space-y-2 font-body text-sm">
            <li>
              <a href="#about" className="gold-link text-[#f9f6f0]">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="gold-link text-[#f9f6f0]">
                Work
              </a>
            </li>
            <li>
              <a href="#experience" className="gold-link text-[#f9f6f0]">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="gold-link text-[#f9f6f0]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-accent text-[10px] tracking-[0.35em] text-[#e8ce8a] mb-4">
            ELSEWHERE
          </p>
          <ul className="space-y-2 font-body text-sm">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-link text-[#f9f6f0]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-accent text-[10px] tracking-[0.3em] text-[#a6a6a6]">
            © {new Date().getFullYear()} · PRANAV PN · VIT CHENNAI
          </p>
          <p className="font-accent text-[10px] tracking-[0.3em] text-[#a6a6a6]">
            EX MARMORE · AD CODICEM
          </p>
        </div>
      </div>
    </footer>
  );
}
