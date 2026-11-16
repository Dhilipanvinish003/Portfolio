import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#000000] text-white pt-20 sm:pt-28 pb-10 sm:pb-14 px-6 sm:px-12 md:px-16 lg:px-20 overflow-hidden select-none border-t border-white/[0.08]">
      {/* Ambient background glow behind the giant typography */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[1200px] h-[350px] bg-radial from-white/[0.08] via-white/[0.02] to-transparent blur-[90px] z-0" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-slate-800/10 blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1550px] flex flex-col justify-between min-h-[500px]">
        {/* Top Row: System Metadata (3 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 items-start justify-between font-mono text-xs sm:text-[13px]">
          {/* Left Column: System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-1 text-left"
          >
            <span className="text-neutral-400 font-semibold tracking-wider uppercase mb-1">
              // System Architecture
            </span>
            <span className="text-neutral-200">Full-Stack Developer</span>
          </motion.div>

          {/* Middle Column: Status */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col space-y-1 text-left sm:text-center items-start sm:items-center"
          >
            <span className="text-neutral-400 font-semibold tracking-wider uppercase mb-1">
              // Status
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide">
              Open to Opportunities
            </span>
            <a
              href="#projects"
              className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-all cursor-pointer"
            >
              View Work
            </a>
          </motion.div>

          {/* Right Column: Region */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-1 text-left sm:text-right items-start sm:items-end"
          >
            <span className="text-neutral-400 font-semibold tracking-wider uppercase mb-1">
              // Region
            </span>
            <span className="text-neutral-200">India</span>
          </motion.div>
        </div>

        {/* Centerpiece: Massive Luminous "DHILIPAN" Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="my-14 sm:my-20 md:my-24 flex items-center justify-center text-center overflow-hidden"
        >
          <h1
            className="font-black uppercase tracking-[-0.04em] text-[15vw] sm:text-[16vw] lg:text-[185px] xl:text-[230px] leading-[0.88] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e8edf5] to-[#8c94a4] drop-shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            DHILIPAN
          </h1>
        </motion.div>

        {/* Bottom Row: Contact Transmission, Email & Back to Top */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center sm:items-end justify-between pt-6 border-t border-white/[0.06]">
          {/* Left: Contact Transmission & Copyright */}
          <div className="flex flex-col text-left space-y-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-200 underline underline-offset-4 decoration-neutral-600">
              Contact Transmission
            </span>
            <span className="text-[11px] sm:text-xs text-neutral-400 font-normal">
              © 2026 Dhilipan | All Rights Reserved
            </span>
          </div>

          {/* Middle: Email Link */}
          <div className="flex justify-start sm:justify-center">
            <a
              href="mailto:vinishdhilipan@gmail.com"
              className="font-mono text-xs sm:text-[13px] text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-white transition-all cursor-pointer"
            >
              vinishdhilipan@gmail.com
            </a>
          </div>

          {/* Right: Back to Top */}
          <div className="flex justify-start sm:justify-end">
            <button
              onClick={scrollToTop}
              type="button"
              className="font-mono text-xs sm:text-[13px] text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Back to Top</span>
              <span className="transform transition-transform duration-200 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
