"use client";

import FadeIn from "./FadeIn";

const certs = [
  {
    org: "IBM SkillsBuild",
    title: "Cloud Computing Core",
    desc: "Arquitecturas cloud y despliegue escalable.",
    color: "text-primary",
    hoverBorder: "hover:border-primary/30",
  },
  {
    org: "Congreso Intl. Software",
    title: "Ponente & Asistente",
    desc: "Nuevas tendencias en Ingenier\u00eda de Software.",
    color: "text-secondary",
    hoverBorder: "hover:border-secondary/30",
  },
  {
    org: "MongoDB University",
    title: "Associate Developer",
    desc: "Modelado de datos NoSQL y optimizaci\u00f3n.",
    color: "text-tertiary",
    hoverBorder: "hover:border-tertiary/30",
  },
  {
    org: "Cisco Networking Academy",
    title: "Network Essentials",
    desc: "Infraestructura y comunicaciones de red.",
    color: "text-slate-400",
    hoverBorder: "hover:border-white/30",
  },
  {
    org: "CertiProf",
    title: "Scrum Foundation",
    desc: "Gesti\u00f3n de proyectos \u00e1giles con marcos Scrum.",
    color: "text-yellow-400",
    hoverBorder: "hover:border-yellow-400/30",
  },
  {
    org: "UPC Excellence",
    title: "Beca de Honor",
    desc: "Reconocimiento al desempe\u00f1o acad\u00e9mico sobresaliente.",
    color: "text-primary",
    hoverBorder: "hover:border-primary/30",
    special: true,
  },
];

export default function Certifications() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl cabinet text-white mb-16">
            Certificaciones &amp; Reconocimientos
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <FadeIn
              key={c.title}
              delay={i * 0.08}
              className={`glass p-8 rounded-3xl border border-white/5 ${c.hoverBorder} transition-colors ${
                c.special
                  ? "bg-gradient-to-br from-primary/5 to-transparent"
                  : ""
              }`}
            >
              <div
                className={`text-xs font-bold ${c.color} uppercase tracking-widest mb-4`}
              >
                {c.org}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{c.title}</h4>
              <p className="text-slate-500 text-sm">{c.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
