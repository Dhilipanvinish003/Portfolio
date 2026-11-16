import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  root: string;
  title: string;
  description: string;
  tag: string;
}

const ROADMAP_STEPS: StepItem[] = [
  {
    root: "// ROOT 01",
    title: "Frontend Development",
    description: "Architecting responsive, high-performance UI components.",
    tag: "React & Tailwind",
  },
  {
    root: "// ROOT 02",
    title: "Backend Development",
    description: "Building secure REST APIs and robust data pipelines.",
    tag: "Node.js & Databases",
  },
  {
    root: "// ROOT 03",
    title: "Cloud & Deployment",
    description: "Containerizing systems and ensuring seamless production.",
    tag: "Docker & CI/CD",
  },
];

const Roadmap: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative w-full min-h-[700px] bg-[#070913] text-white flex flex-col items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* Anchors for navigation compatibility */}
      <div id="roadmap" className="absolute -top-24" />

      {/* Atmospheric deep night background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_40%,rgba(28,29,54,0.45)_0%,rgba(7,9,19,0.95)_70%,#000000_100%)] z-0" />

      {/* Subtle bottom curved accent light */}
      <div className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 w-[1100px] h-[300px] rounded-[100%] bg-gradient-to-t from-indigo-950/20 to-transparent blur-[90px] z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Capsule Badge: // FULL-STACK DEVELOPER ROADMAP */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-[#161722]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-6"
        >
          <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-[0.2em] text-neutral-300 uppercase">
            // FULL-STACK DEVELOPER ROADMAP
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-[-0.03em] leading-tight drop-shadow-[0_2px_24px_rgba(255,255,255,0.2)]">
            Core Execution Root Map
          </h2>
        </motion.div>

        {/* Roadmap Cards Presentation */}
        <div className="relative w-full">
          {/* Subtle horizontal connecting track across desktop cards */}
          <div className="hidden lg:block pointer-events-none absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 lg:gap-9 z-10">
            {ROADMAP_STEPS.map((step, index) => (
              <div
                key={step.root}
                className="relative flex items-center justify-center"
              >
                {/* LAYER 1: BRIGHT ROTATING GLOWING DIV BEHIND EACH CARD */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0 select-none">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative flex items-center justify-center will-change-transform"
                    style={{ transformOrigin: "center center" }}
                  >
                    {/* Bright white luminous rounded rectangular shape matching About.tsx / reference UI */}
                    <div className="w-[280px] h-[300px] sm:w-[310px] sm:h-[330px] rounded-[48px] bg-white/[0.80] blur-[28px] sm:blur-[36px]" />
                  </motion.div>
                </div>

                {/* LAYER 2: SHARP FOREGROUND CARD IN FRONT OF ROTATING DIV */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="group relative z-10 w-full flex flex-col justify-between text-left p-7 sm:p-8 rounded-[24px] bg-[#0c0d14] border border-white/15 hover:border-white/30 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.9)] transition-all duration-300 min-h-[310px]"
                >
                  {/* Subtle top edge specular reflection on hover */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Top: // ROOT XX & Status Dot Indicator */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-mono text-xs font-semibold tracking-wider text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      {step.root}
                    </span>
                    <div className="w-2.5 h-2.5 rounded-full border border-white/40 bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_10px_#ffffff] transition-all duration-300" />
                  </div>

                  {/* Card Middle: Title & Description */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl sm:text-[22px] font-bold text-white tracking-tight leading-snug mb-3.5 group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Card Bottom: Pill Badge */}
                  <div className="mt-8">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-neutral-300 group-hover:border-white/25 group-hover:text-white group-hover:bg-white/[0.08] transition-all duration-300">
                      {step.tag}
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
