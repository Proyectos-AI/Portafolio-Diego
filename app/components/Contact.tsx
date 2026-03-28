"use client";

import FadeIn from "./FadeIn";
import { Mail, Phone, Send } from "lucide-react";

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const socials = [
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/diegosoto1005/", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/Diego2005z", label: "GitHub" },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left */}
        <FadeIn className="space-y-12">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl cabinet text-white mb-6">
              Hablemos
            </h2>
            <p className="text-xl text-slate-400">
              &iquest;Tienes un proyecto en mente o solo quieres saludar? Mi
              bandeja de entrada siempre est&aacute; abierta.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Email
                </div>
                <div className="text-lg font-bold text-white">
                  diegosotoquispe9876@gmail.com
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  WhatsApp
                </div>
                <div className="text-lg font-bold text-white">
                  +51 933 214 920
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 space-y-8">
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm italic text-slate-500 max-w-xs leading-relaxed">
              &ldquo;La mejor forma de predecir el futuro es
              invent&aacute;ndolo.&rdquo;
            </p>
          </div>
        </FadeIn>

        {/* Right - Form */}
        <FadeIn
          delay={0.2}
          className="glass p-8 lg:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 dot-grid opacity-10" />
          <form
            className="relative z-10 space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">
                Nombre Completo
              </label>
              <input
                type="text"
                placeholder="Ej. Alex Morgan"
                className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">
                Email
              </label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-primary ml-1">
                Tu Mensaje
              </label>
              <textarea
                placeholder="&iquest;En qu&eacute; puedo ayudarte?"
                rows={4}
                className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white placeholder:text-slate-600 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_40px_rgba(198,192,255,0.3)] transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
            >
              Enviar Mensaje
              <Send className="w-5 h-5" />
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
