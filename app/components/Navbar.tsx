"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre m\u00ed" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#ia", label: "IA" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "h-16 shadow-2xl bg-surface-container-lowest/80 backdrop-blur-xl"
          : "h-20 bg-surface-container-lowest/60 backdrop-blur-xl"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 lg:px-8 h-full">
        <a
          href="#inicio"
          className="text-2xl font-black tracking-tighter text-indigo-100 cabinet"
        >
          DS
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 font-medium tracking-tight text-sm font-[family-name:var(--font-headline)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="hidden sm:block bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold text-sm active:scale-90 transition-transform hover:opacity-90"
          >
            Hablemos
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass rounded-2xl mx-4 mt-2 p-6 space-y-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-300 hover:text-white text-lg font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="block bg-primary text-on-primary px-6 py-3 rounded-xl font-bold text-sm text-center mt-4"
          >
            Hablemos
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
