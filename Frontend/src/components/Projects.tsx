import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tikytopImg from "../assets/projects/image.png";
import hrmsImg from "../assets/projects/hrms.png";
import aswithaImg from "../assets/projects/aswithatech-inventory.png";
import ticketnowImg from "../assets/projects/ticketnow.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  desktopOffset: string;
}

const PROJECTS: Project[] = [
  {
    id: "tikytop",
    number: "01 / 04",
    category: "FULL-STACK PLATFORM",
    title: "Tikytop SMM Panel",
    description:
      "High-throughput social media marketing platform with automated order processing queues, multi-currency payment integrations, and real-time campaign analytics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    image: tikytopImg,
    liveUrl: "https://admin.tikytop.com/",
    githubUrl: "https://github.com/Dhilipanvinish003/Smmpanel",
    desktopOffset: "self-start ml-[1%] lg:ml-[4%]",
  },
  {
    id: "hrms",
    number: "02 / 04",
    category: "ENTERPRISE HRMS PLATFORM",
    title: "Hawkeye Nest HRMS",
    description:
      "Modern human resource management system featuring real-time attendance monitoring, department performance metrics, leave tracking, recruitment pipelines, and automated payroll operations.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    image: hrmsImg,
    liveUrl: "https://hrms.madhuratech.com/",
    githubUrl: "https://github.com/Dhilipanvinish003",
    desktopOffset: "self-end mr-[1%] lg:mr-[4%]",
  },
  {
    id: "aswithatech",
    number: "03 / 04",
    category: "ERP & INVENTORY SYSTEM",
    title: "Aswitha Tech ERP & Inventory",
    description:
      "Comprehensive manufacturing ERP and inventory management dashboard streamlining purchase orders, quotations, direct invoicing, job delivery challan (DC) tracking, and service returns.",
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "TailwindCSS"],
    image: aswithaImg,
    liveUrl: "https://aswithatech.tech",
    githubUrl: "https://github.com/Dhilipanvinish003",
    desktopOffset: "self-start ml-[1%] lg:ml-[4%]",
  },
  {
    id: "ticketnow",
    number: "04 / 04",
    category: "EVENT & TICKETING PLATFORM",
    title: "TicketNow - Ticket Booking Application",
    description:
      "High-performance event and concert ticketing application offering seamless seat reservations, multi-city venue exploration, live event categories, and quick VIP booking access.",
    techStack: ["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS"],
    image: ticketnowImg,
    liveUrl: "https://ticketnow.southcult.com/",
    githubUrl: "https://github.com/Dhilipanvinish003",
    desktopOffset: "self-end mr-[1%] lg:mr-[4%]",
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Continuous smooth reveal — stays visible without hide-and-show
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.9,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%",
              once: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#FFFFFF] text-neutral-900 selection:bg-black selection:text-white"
    >
      {/* Anchor for navigation */}
      <div className="absolute -top-20" />

      {/* ========================================================
          1. FIXED / STICKY BACKGROUND LAYER
          Background: Pure White (#FFFFFF)
          Typography: Bold solid BLACK centered "WORKS"
          ======================================================== */}
      <div
        className="projects-background sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0 flex items-center justify-center select-none bg-[#FFFFFF]"
      >
        {/* Pure white backdrop */}
        <div className="absolute inset-0 bg-[#FFFFFF]" />

        {/* ONE SINGLE CENTERED BLACK "WORKS" TYPOGRAPHY */}
        <div className="relative flex items-center justify-center w-full px-4 text-center select-none pointer-events-none">
          <div
            className="font-black uppercase tracking-[-0.07em] whitespace-nowrap will-change-transform select-none text-center"
            style={{
              fontSize: "clamp(100px, 20vw, 360px)",
              lineHeight: 0.85,
              color: "#000000",
              fontWeight: 900,
              letterSpacing: "-0.07em",
            }}
          >
            WORKS
          </div>
        </div>

        {/* Soft edge fades blending into pure white */}
        <div className="pointer-events-none absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
      </div>

      {/* ========================================================
          2. SCROLLING PROJECT CONTENT LAYER — ZIG-ZAG COMPOSITION
          Card background: Old section bg color (#dcdfe5 studio tone)
          ======================================================== */}
      <div className="relative z-10 -mt-[100vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 sm:pt-36 pb-36 sm:pb-48 flex flex-col">
        {/* Editorial Section Header Badge */}
        <div className="mb-20 sm:mb-28 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-black/10 bg-[#f4f6f8]/90 backdrop-blur-md shadow-sm mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-[0.24em] text-neutral-900 uppercase">
              // SELECTED ARCHIVE
            </span>
          </div>
          <span className="text-xs font-mono tracking-widest text-neutral-600 uppercase font-medium">
            01 — 04 / CURATED WORKS
          </span>
        </div>

        {/* Zig-Zag Alternating Project Cards */}
        <div className="w-full flex flex-col gap-14 sm:gap-20 lg:gap-24">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`w-full md:w-[54%] lg:w-[48%] max-w-[640px] rounded-[22px] sm:rounded-[28px] p-6 sm:p-7 md:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 relative group overflow-hidden ${project.desktopOffset}`}
              style={{
                backgroundColor: "#f4f6f8",
                border: "1px solid rgba(0, 0, 0, 0.06)",
              }}
            >
              {/* Top subtle highlight */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

              {/* Project Metadata Header */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs sm:text-sm font-bold text-neutral-950 tracking-wider">
                    {project.number}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs">/</span>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse hidden sm:block" />
              </div>

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-neutral-950 leading-[1.1] mb-5">
                {project.title}
              </h3>

              {/* Large Featured Project Visual - Browser Mockup (Clean Light Frame) */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full overflow-hidden rounded-2xl sm:rounded-[20px] border border-neutral-300/80 bg-white shadow-sm mb-5 sm:mb-6 group/img cursor-pointer"
              >
                {/* Browser Top Bar - Sleek Light Chrome with Top Radius */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-200/90 bg-neutral-100/90 backdrop-blur-md rounded-t-2xl sm:rounded-t-[20px]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white border border-neutral-200/80 text-[10px] font-mono text-neutral-600 font-medium tracking-wider shadow-2xs">
                    {project.id}.production.app
                  </div>
                  <div className="w-6" />
                </div>

                {/* Full Screenshot View - Flush with zero border gap */}
                <div className="relative w-full overflow-hidden bg-white rounded-b-2xl sm:rounded-b-[20px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block align-middle select-none transition-transform duration-500 ease-out group-hover/img:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </a>

              {/* Editorial Description */}
              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                {project.description}
              </p>

              {/* Technology Stack Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-mono font-medium text-neutral-800 hover:border-neutral-400 transition-colors shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-200/80">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all duration-200 shadow-md group/btn"
                >
                  <span>VIEW PROJECT</span>
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 hover:border-neutral-400 text-xs font-medium text-neutral-800 transition-all duration-200 group/btn shadow-xs"
                >
                  <span>GITHUB</span>
                  <span className="transform transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
