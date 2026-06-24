import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Voices", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-[#f9f6f0]/85 backdrop-blur-md border-b border-[#e5e0d8]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          className="font-accent text-[11px] tracking-[0.4em] text-[#1a1a1a]"
        >
          {profile.initials} &nbsp; PRANAV · PN
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className="gold-link font-accent text-[11px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta"
          className="hidden md:inline-block btn-ghost"
        >
          Commission
        </a>

        <button
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-accent text-[11px] tracking-[0.3em]"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden border-t border-[#e5e0d8] bg-[#f9f6f0]"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-accent text-[12px] tracking-[0.3em]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
