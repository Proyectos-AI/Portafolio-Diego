"use client";

import FadeIn from "./FadeIn";
import {
  Zap,
  Sparkles,
  MessageSquare,
  Bot,
  Code2,
  CircleDot,
} from "lucide-react";

const skills = [
  { name: "Advanced Prompting", pct: 95 },
  { name: "RAG & Vector DBs", pct: 88 },
  { name: "Agentes Aut\u00f3nomos", pct: 82 },
];

const aiTools = [
  { icon: Zap, name: "OpenAI", color: "text-tertiary" },
  { icon: Sparkles, name: "Gemini", color: "text-secondary" },
  { icon: MessageSquare, name: "Claude", color: "text-primary" },
  { icon: Bot, name: "Copilot", color: "text-white" },
  { icon: Code2, name: "Python", color: "text-yellow-500" },
  { icon: CircleDot, name: "Agents", color: "text-pink-400" },
];

export default function AISection() {
  return (
    <section id="ia" className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn className="space-y-10">
          <div>
            <div className="text-tertiary text-sm font-bold uppercase tracking-widest mb-4">
              Especializaci&oacute;n
            </div>
            <h2 className="text-5xl md:text-6xl cabinet text-white mb-8">
              IA &amp; Automaci&oacute;n
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              No solo implemento modelos, dise&ntilde;o flujos de trabajo
              inteligentes. Me enfoco en cerrar la brecha entre el c&oacute;digo
              tradicional y la inteligencia generativa aplicada a casos de uso
              reales.
            </p>
          </div>

          <div className="space-y-8">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm font-bold text-slate-300 mb-3">
                  <span>{s.name}</span>
                  <span>{s.pct}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-tertiary h-full rounded-full shadow-[0_0_10px_#48deab]"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {aiTools.map((t) => (
              <div
                key={t.name}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 bento-card"
              >
                <t.icon className={`w-10 h-10 ${t.color}`} />
                <div className="text-xs font-bold text-white uppercase tracking-tighter">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
