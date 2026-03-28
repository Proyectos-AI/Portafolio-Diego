"use client";

import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre m\u00ed" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#ia", label: "IA" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 lg:py-20 border-t border-slate-800/30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-4">
          <div className="text-xl font-bold text-indigo-100 mb-4 cabinet">
            Diego Soto
          </div>
          <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
            Ingeniero de Software y Entusiasta de la IA. Construyendo el futuro
            bit a bit desde Lima, Per&uacute;.
          </p>
          <div className="pt-4 text-indigo-400 font-bold text-xs uppercase tracking-[0.2em]">
            Open to Work
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Navegaci&oacute;n
            </h5>
            <ul className="space-y-2">
              {navLinks.slice(0, 3).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-indigo-300 hover:translate-x-1 transition-all duration-200 block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 pt-10">
            <ul className="space-y-2">
              {navLinks.slice(3).map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-indigo-300 hover:translate-x-1 transition-all duration-200 block"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
            Newsletter Tech
          </h5>
          <p className="text-slate-400 text-sm">
            Recibe mis art&iacute;culos sobre IA y Desarrollo una vez al mes.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Tu email"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm w-full focus:outline-none focus:border-primary text-white placeholder:text-slate-600"
            />
            <button className="bg-indigo-600 text-white p-2 rounded-xl hover:bg-indigo-500 transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 lg:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-xs">
          &copy; 2024 Diego Soto. Built for the Deep Space.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
