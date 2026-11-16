import { useState } from "react";
import { motion } from "framer-motion";
import Myaboutimg from "../assets/My.png";

const SKILL_ITEMS = [
  { title: "Full-Stack", subtitle: "ARCHITECTURE" },
  { title: "React & Node", subtitle: "CORE TECH" },
  { title: "Scalable", subtitle: "SYSTEMS" },
];

const About = () => {
  // Interactive 3D tilt state for the front profile card
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Subtle tilt angles (-5 to 5 degrees)
    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#000000] flex items-center justify-center px-6s sm:px-12 md:px-10 lg:px-20 py-20 sm:py-22 overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[5%] top-[25%] h-80 w-80 rounded-full bg-white/[0.04] blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] top-[30%] h-96 w-96 rounded-full bg-white/[0.03] blur-[160px]" />

      {/* Main Content Container */}
      <div className="relative mx-auto flex w-full max-w-[1360px] flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
        {/* Left Column: Portrait Presentation with Rotating Glow Card */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full items-center justify-center lg:w-[45%] shrink-0"
        >
          <div
            className="relative flex items-center justify-center right-10"
            style={{ perspective: "1000px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* LAYER 1: BRIGHT ROTATING GLOWING DIV (MATCHING VIDEO / USER SCREENSHOT)   */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none flex items-center justify-center ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative flex items-center justify-center will-change-transform"
                style={{ transformOrigin: "center center" }}
              >
                {/* Bright white luminous rounded rectangular card matching the reference screenshot */}
                <div className="h-[370px] w-[290px] sm:h-[410px] sm:w-[330px] md:h-[430px] md:w-[340px] rounded-[48px] bg-white/[0.80] blur-[28px] sm:blur-[10px]" />
              </motion.div>
            </div>

            {/* LAYER 2: SHARP FOREGROUND PROFILE CARD (IN FRONT OF ROTATING DIV)         */}
            <motion.div
              animate={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 15,
              }}
              className="relative z-10 w-[300px] sm:w-[340px] md:w-[365px] rounded-[32px] sm:rounded-[36px] border border-white/15 bg-[#111215] p-2.5 sm:p-3 shadow-[0_30px_90px_rgba(0,0,0,0.85)]"
            >
              {/* Inner Portrait Container */}
              <div className="  relative h-[350px] sm:h-[380px] md:h-[350px] w-full overflow-hidden rounded-[24px] sm:rounded-[28px] bg-gradient-to-b from-[#f8f9fa] via-[#eef1f5] to-[#e1e5eb]">
                {/* Sharp User Portrait Image */}
                <img
                  src={Myaboutimg}
                  alt="Dhilipan - Full Stack Developer"
                  className="h-full w-full object-cover object-top pt-2 scale-105 select-none pointer-events-none"
                />

                {/* Subtle Studio Lighting Vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />

                {/* Status Pill Overlay - Positioned inside bottom of photo */}
                <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 z-10">
                  <div className="flex items-center justify-between rounded-full border border-white/15 bg-[#16171a]/95 px-4 py-2.5 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
                    {/* Status indicator & label */}
                    <div className="flex items-center gap-2.5">
                      <span className="relative flex h-2.5 w-2.5 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                      </span>
                      <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white uppercase">
                        OPEN TO OPPORTUNITIES
                      </span>
                    </div>

                    {/* Year */}
                    <span className="text-[11px] sm:text-xs font-mono font-medium text-white/50">
                      2026
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Typography & Feature Cards */}
        <div className="relative z-10 flex w-full flex-col items-start lg:w-[55%]">
          {/* Tagline Pill: // SYSTEM PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#121316] px-3.5 py-1.5 mb-5"
          >
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-white tracking-tight leading-[1.08]"
          >
            <span>Hello, I&apos;m</span>
            <span className="block mt-1 text-white">Dhilipan</span>
          </motion.h2>

          {/* Description Paragraph - Exact Copy from Video-51585.mp4 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-[620px] text-[15px] sm:text-[16.5px] text-white/60 leading-[1.75] font-normal"
          >
            A passionate Full-Stack Developer dedicated to crafting clean, functional, and
            highly scalable web applications. Specializing in high-performance architectures,
            intuitive user experiences, and robust backend pipelines.
          </motion.p>

          {/* 3 Skill Cards in Grid matching Video-51585.mp4 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 grid w-full max-w-[640px] grid-cols-1 gap-3.5 sm:grid-cols-3"
          >
            {SKILL_ITEMS.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#121316]/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-[#181920] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
              >
                <h3 className="text-[17px] font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/40 group-hover:text-white/60 transition-colors">
                  {item.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
