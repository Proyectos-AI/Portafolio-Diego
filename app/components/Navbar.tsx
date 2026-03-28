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
    <>
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
      </motion.header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 z-[60] flex flex-col"
          style={{ background: "#090e1a" }}
        >
          {/* Menu header with close button */}
          <div className={`flex justify-between items-center px-6 ${scrolled ? "h-16" : "h-20"}`}>
            <a
              href="#inicio"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-black tracking-tighter text-indigo-100 cabinet"
            >
              DS
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Cerrar menú"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2" />
              <span className="block w-6 h-0.5 bg-white opacity-0" />
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2" />
            </button>
          </div>

          {/* Menu links */}
          <div className="flex-1 flex flex-col justify-center px-8 space-y-6">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                className="text-3xl font-bold text-slate-200 hover:text-primary cabinet transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-primary text-on-primary px-6 py-4 rounded-xl font-bold text-center mt-4 text-lg"
            >
              Hablemos
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
