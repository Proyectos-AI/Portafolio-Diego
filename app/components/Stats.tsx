"use client";

import FadeIn from "./FadeIn";

const stats = [
  { value: "9no", label: "Ciclo Acad\u00e9mico", color: "text-white" },
  { value: "Top 5%", label: "Rendimiento UPC", color: "text-secondary" },
  { value: "5+", label: "Proyectos Pro", color: "text-tertiary" },
  { value: "5+", label: "Certificaciones", color: "text-primary" },
];

export default function Stats() {
  return (
    <section className="bg-surface-container-low py-12 border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className={`text-4xl md:text-5xl cabinet ${s.color}`}>
                {s.value}
              </div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">
                {s.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
