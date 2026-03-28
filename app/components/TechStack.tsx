"use client";

import FadeIn from "./FadeIn";
import { Monitor, Smartphone, Database, CloudCog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  icon: LucideIcon;
  title: string;
  color: string;
  bgColor: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "text-primary",
    bgColor: "bg-primary/20",
    items: ["React / Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    color: "text-secondary",
    bgColor: "bg-secondary/20",
    items: [
      "Flutter / Dart",
      "React Native",
      "State Management",
      "Push Notifications",
    ],
  },
  {
    icon: Database,
    title: "Backend",
    color: "text-tertiary",
    bgColor: "bg-tertiary/20",
    items: [
      "Node.js / NestJS",
      "Python / FastAPI",
      "PostgreSQL / Redis",
      "REST & GraphQL",
    ],
  },
  {
    icon: CloudCog,
    title: "Infra & DevOps",
    color: "text-white",
    bgColor: "bg-white/10",
    items: [
      "Docker / Containers",
      "AWS / Azure",
      "CI/CD Pipelines",
      "Linux / Bash",
    ],
  },
];

const tools = [
  { icon: "devicon-vscode-plain", name: "VS Code" },
  { icon: "devicon-figma-plain", name: "Figma" },
  { icon: "devicon-notion-plain", name: "Notion" },
  { icon: "devicon-git-plain", name: "Git / GitHub" },
  { icon: "devicon-postman-plain", name: "Postman" },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 lg:py-32 px-6 lg:px-8 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16 lg:mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl cabinet text-white">
            Ecosistema T&eacute;cnico
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Herramientas y lenguajes que utilizo para materializar soluciones
            complejas d&iacute;a a d&iacute;a.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <FadeIn
              key={cat.title}
              delay={i * 0.1}
              className="glass p-8 rounded-3xl border-t border-white/10"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center ${cat.color} mb-6`}
              >
                <cat.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-6">{cat.title}</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${cat.color === "text-white" ? "bg-white" : cat.bgColor.replace("/20", "")}`}
                      style={{
                        backgroundColor:
                          cat.color === "text-primary"
                            ? "#c6c0ff"
                            : cat.color === "text-secondary"
                              ? "#7bd0ff"
                              : cat.color === "text-tertiary"
                                ? "#48deab"
                                : "#ffffff",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>

        {/* Tools bar */}
        <FadeIn className="mt-16 glass py-6 lg:py-8 px-8 lg:px-12 rounded-full overflow-hidden">
          <div className="flex items-center justify-around gap-6 lg:gap-12 flex-wrap opacity-50 hover:opacity-100 transition-all">
            {tools.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 font-bold text-white text-sm"
              >
                <i className={`${t.icon} text-xl`} />
                <span className="hidden sm:inline">{t.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
