"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Brain, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center px-6 lg:px-8 max-w-7xl mx-auto py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-[56%_44%] gap-12 lg:gap-16 items-center w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
            </span>
            Disponible
          </div>

          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl lg:text-9xl cabinet text-indigo-100 leading-[0.9] tracking-tighter">
              Diego
              <br />
              Soto
            </h1>
            <p className="text-xl md:text-2xl text-indigo-300 font-medium cabinet opacity-90">
              Full Stack Developer | Ing. Software &middot; UPC | AI Engineer
            </p>
          </div>

          <p className="text-slate-400 max-w-xl text-lg leading-relaxed">
            Arquitecto de experiencias digitales y soluciones de inteligencia
            artificial. Centrado en construir productos escalables con un enfoque
            editorial y t&eacute;cnico de alto nivel.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#proyectos"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_30px_rgba(198,192,255,0.4)] flex items-center gap-2"
            >
              Ver mis proyectos
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/diegosoto1005/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold border border-outline-variant/20 hover:bg-surface-variant transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="pt-12">
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mb-6">
              Core Tech Stack
            </p>
            <div className="flex gap-6 opacity-60 hover:opacity-100 transition-opacity text-3xl text-slate-300">
              <i className="devicon-react-original" title="React" />
              <i className="devicon-flutter-plain" title="Flutter" />
              <i className="devicon-nodejs-plain" title="Node.js" />
              <i className="devicon-typescript-plain" title="TypeScript" />
              <i className="devicon-docker-plain" title="Docker" />
            </div>
          </div>
        </motion.div>

        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Rotating rings */}
            <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            {/* Avatar circle */}
            <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-[0_0_60px_rgba(99,102,241,0.3)] ring-4 ring-indigo-500/30">
              <Image
                src="/images/diego-soto.png"
                alt="Diego Soto"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass p-3 lg:p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <Star className="w-5 h-5 text-tertiary fill-tertiary" />
                <span className="text-xs lg:text-sm font-bold cabinet">
                  Quinto Superior
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute top-1/2 -left-8 lg:-left-12 glass p-3 lg:p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <Brain className="w-5 h-5 text-secondary" />
                <span className="text-xs lg:text-sm font-bold cabinet">
                  AI Engineer
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-4 right-6 lg:right-10 glass p-3 lg:p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <Code className="w-5 h-5 text-primary" />
                <span className="text-xs lg:text-sm font-bold cabinet">
                  Tech Skills
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
