"use client";

import FadeIn from "./FadeIn";
import {
  GraduationCap,
  Brain,
  Monitor,
  Smartphone,
  Cloud,
  Award,
} from "lucide-react";

const timeline = [
  {
    year: "2026 - Graduaci\u00f3n (Proyectado)",
    desc: "Ingenier\u00eda de Software, UPC",
    color: "bg-primary",
  },
  {
    year: "2024 - AI Specialist Journey",
    desc: "Implementaci\u00f3n de RAG y Agentes aut\u00f3nomos",
    color: "bg-secondary",
  },
  {
    year: "2022 - El Comienzo",
    desc: "Fundamentos de programaci\u00f3n y arquitectura",
    color: "bg-slate-600",
  },
];

const miniCards = [
  {
    icon: Brain,
    title: "AI & Data",
    desc: "PyTorch, OpenAI API, LangChain",
    color: "text-tertiary",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    desc: "Flutter, React Native, Swift",
    color: "text-secondary",
  },
  {
    icon: Monitor,
    title: "Frontend",
    desc: "React, Next.js, Tailwind",
    color: "text-primary",
  },
  {
    icon: Cloud,
    title: "DevOps",
    desc: "Docker, AWS, CI/CD",
    color: "text-white",
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Left Bio */}
        <FadeIn className="space-y-10">
          <div>
            <h2 className="text-5xl md:text-6xl cabinet text-white mb-8">
              Sobre M&iacute;
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Estudiante de Ingenier&iacute;a de Software en la UPC, apasionado
              por resolver problemas complejos mediante tecnolog&iacute;a. Me
              especializo en el desarrollo Full Stack y la integraci&oacute;n de
              arquitecturas de IA para transformar ideas en productos digitales
              impactantes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { emoji: "\ud83d\udccd", text: "Lima, Per\u00fa", style: "text-slate-300" },
              { emoji: "\ud83c\udf93", text: "UPC", style: "text-indigo-300" },
              { emoji: "\ud83c\udf0d", text: "ES/EN", style: "text-slate-300" },
              { emoji: "\ud83c\udfc6", text: "Quinto Superior", style: "text-tertiary" },
            ].map((t) => (
              <span
                key={t.text}
                className={`px-4 py-2 rounded-full glass text-sm font-bold ${t.style}`}
              >
                {t.emoji} {t.text}
              </span>
            ))}
          </div>

          {/* Timeline */}
          <div className="space-y-6 pt-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Trayectoria 2022-2026
            </h3>
            <div className="relative pl-8 border-l border-outline-variant/30 space-y-8">
              {timeline.map((t) => (
                <div key={t.year} className="relative">
                  <div
                    className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full ${t.color} border-4 border-surface-container-lowest`}
                  />
                  <div className="text-sm font-bold text-slate-300">
                    {t.year}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-bold border border-primary/20">
              Full Stack
            </div>
            <div className="px-4 py-2 bg-tertiary/10 rounded-lg text-tertiary text-xs font-bold border border-tertiary/20">
              AI Engineer
            </div>
            <div className="px-4 py-2 bg-secondary/10 rounded-lg text-secondary text-xs font-bold border border-secondary/20">
              DevOps
            </div>
          </div>
        </FadeIn>

        {/* Right Cards */}
        <FadeIn delay={0.2} className="space-y-8">
          <div className="glass p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-20 h-20" />
            </div>
            <h4 className="text-2xl font-bold cabinet text-white mb-4">
              Perfil Acad&eacute;mico UPC
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Progreso de Carrera</span>
                  <span className="text-white font-bold">90%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[90%] rounded-full shadow-[0_0_15px_#c6c0ff]" />
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-tertiary/20 flex items-center justify-center text-tertiary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white uppercase tracking-tighter">
                    Quinto Superior
                  </div>
                  <div className="text-xs text-slate-500">
                    Mantenido consistentemente desde 2022
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {miniCards.map((c) => (
              <div key={c.title} className="glass p-6 rounded-2xl bento-card">
                <c.icon className={`w-6 h-6 ${c.color} mb-3`} />
                <div className="font-bold text-white text-lg">{c.title}</div>
                <div className="text-xs text-slate-500 mt-1">{c.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
