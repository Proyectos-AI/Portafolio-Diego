"use client";

import { ArrowRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

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
        <div className="flex items-center gap-3">
          <p className="text-slate-400 text-xs">
            &copy; 2026 Diego Soto. Built for the Deep Space.
          </p>
          <a
            href="https://github.com/Diego2005z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
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
