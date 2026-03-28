"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { CircleParking, Rocket, BrainCircuit, Server, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: { label: string; color: string }[];
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  blobColor: string;
  span: number;
  featured?: boolean;
  stats?: { label: string; value: string }[];
};

const projects: Project[] = [
  {
    title: "ParkConnect",
    desc: "Plataforma inteligente para la gesti\u00f3n de estacionamientos urbanos con reserva en tiempo real y pagos integrados.",
    tags: [
      { label: "Mobile App", color: "text-secondary" },
      { label: "Flutter", color: "text-slate-400" },
    ],
    image: "/images/parkconnect.webp",
    imageAlt: "Smart city parking",
    icon: CircleParking,
    iconColor: "text-secondary",
    bgColor: "bg-secondary/10",
    blobColor: "bg-secondary/20",
    span: 3,
  },
  {
    title: "BrandBoost",
    desc: "Sistema de automatizaci\u00f3n de marca para startups con an\u00e1lisis predictivo de engagement mediante IA.",
    tags: [
      { label: "Marketing SaaS", color: "text-primary" },
      { label: "Next.js", color: "text-slate-400" },
    ],
    image: "/images/brandboost.webp",
    imageAlt: "Marketing dashboard",
    icon: Rocket,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
    blobColor: "bg-primary/20",
    span: 3,
  },
  {
    title: "NovaMind AI",
    desc: "Motor de razonamiento aut\u00f3nomo basado en arquitecturas RAG para an\u00e1lisis t\u00e9cnico profundo de documentaci\u00f3n legada.",
    tags: [
      { label: "AI Core Engine", color: "text-tertiary" },
      { label: "Python & RAG", color: "text-slate-400" },
    ],
    image: "/images/novamind.webp",
    imageAlt: "Neural network visualization",
    icon: BrainCircuit,
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary/10",
    blobColor: "bg-tertiary/20",
    span: 6,
    featured: true,
    stats: [
      { value: "99%", label: "Precisi\u00f3n" },
      { value: "2.4s", label: "Inferencia" },
    ],
  },
  {
    title: "DevCentral API",
    desc: "Capa de servicios unificada para gesti\u00f3n de despliegues multi-cloud con monitoreo en tiempo real.",
    tags: [
      { label: "Backend", color: "text-pink-400" },
      { label: "FastAPI", color: "text-slate-400" },
    ],
    image: "/images/devcentral.webp",
    imageAlt: "Server room",
    icon: Server,
    iconColor: "text-pink-400",
    bgColor: "bg-pink-500/10",
    blobColor: "bg-pink-500/20",
    span: 3,
  },
  {
    title: "LearnSpace",
    desc: "LMS gamificado enfocado en micro-learning para el sector corporativo tecnol\u00f3gico.",
    tags: [
      { label: "EdTech", color: "text-yellow-400" },
      { label: "React", color: "text-slate-400" },
    ],
    image: "/images/learnspace.webp",
    imageAlt: "Digital library",
    icon: BookOpen,
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    blobColor: "bg-yellow-500/20",
    span: 3,
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  if (p.featured) {
    return (
      <FadeIn
        delay={i * 0.1}
        className="md:col-span-6 glass rounded-[2.5rem] overflow-hidden group bento-card flex flex-col md:flex-row border border-white/5"
      >
        <div
          className={`md:w-1/2 h-72 md:h-auto ${p.bgColor} relative overflow-hidden flex items-center justify-center`}
        >
          <div className="absolute inset-0 dot-grid opacity-20" />
          <p.icon
            className={`w-24 h-24 ${p.iconColor} opacity-40 group-hover:scale-125 transition-transform duration-700`}
          />
          <Image
            src={p.image}
            alt={p.imageAlt}
            fill
            className="object-cover mix-blend-soft-light opacity-40"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
          <div className="flex gap-2 flex-wrap">
            {p.tags.map((t) => (
              <span
                key={t.label}
                className={`text-[10px] uppercase font-black ${t.color} tracking-widest px-2 py-1 rounded bg-white/5`}
              >
                {t.label}
              </span>
            ))}
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold cabinet text-white">
            {p.title}
          </h3>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
            {p.desc}
          </p>
          {p.stats && (
            <div className="flex gap-6">
              {p.stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="pt-4 flex gap-6">
            <button className="bg-tertiary text-on-tertiary px-8 py-3 rounded-xl font-bold text-sm">
              Explorar Tecnolog&iacute;a
            </button>
            <button className="text-sm font-bold text-white flex items-center gap-2">
              Documentaci&oacute;n
            </button>
          </div>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn
      delay={i * 0.1}
      className={`${p.span === 6 ? "md:col-span-6" : "md:col-span-3"} glass rounded-[2.5rem] overflow-hidden group bento-card flex flex-col border border-white/5`}
    >
      <div
        className={`h-56 lg:h-64 ${p.bgColor} relative overflow-hidden flex items-center justify-center`}
      >
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div
          className={`w-48 h-48 ${p.blobColor} rounded-full blur-3xl absolute -bottom-10 -right-10`}
        />
        <p.icon
          className={`w-20 h-20 ${p.iconColor} opacity-40 group-hover:scale-110 transition-transform duration-500`}
        />
        <Image
          src={p.image}
          alt={p.imageAlt}
          fill
          className="object-cover mix-blend-overlay opacity-30"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 lg:p-8 space-y-4">
        <div className="flex gap-2 flex-wrap">
          {p.tags.map((t) => (
            <span
              key={t.label}
              className={`text-[10px] uppercase font-black ${t.color} tracking-widest px-2 py-1 rounded bg-white/5`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold cabinet text-white">
          {p.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
        <div className="pt-4 flex gap-4">
          <button className="text-xs font-bold text-white underline underline-offset-8">
            GitHub
          </button>
          <button className="text-xs font-bold text-white underline underline-offset-8">
            Demo Live
          </button>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl cabinet text-white mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 text-lg">
            Una selecci&oacute;n de mis trabajos m&aacute;s recientes fusionando
            desarrollo de software s&oacute;lido con inteligencia artificial
            avanzada.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-12 bg-primary rounded-full" />
          <div className="h-2 w-2 bg-slate-700 rounded-full" />
          <div className="h-2 w-2 bg-slate-700 rounded-full" />
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
