import portraitImg from "../assets/ezgif-frame-001.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[560px] bg-[#000000] selection:bg-white selection:text-black overflow-hidden"
    >
      {/* Studio Spotlight Gradient Background - Clean and Seamless */}
      <div className="absolute inset-0 pointer-events-none z-0 studio-spotlight-exact" />

      {/* Prominent Large Character Image in Center - Top Increased to Rise Directly Beneath Navbar */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-10 pt-10 sm:pt-12 md:pt-14">
        <img
          src={portraitImg}
          alt="Dhilipan - Full Stack Developer"
          className="h-[88vh] sm:h-[92vh] max-h-[1050px] w-auto object-contain object-top select-none pointer-events-none drop-shadow-[0_15px_50px_rgba(0,0,0,0.9)]"
        />
      </div>

      {/* Middle Row: Left Headline & Right Bio - Vertically Centered at Chest/Shoulder Level */}
      <div className="absolute top-[44%] -translate-y-1/2 left-0 right-0 z-20 px-6 md:px-12 lg:px-16 pointer-events-none">
        <div className="mx-auto w-full max-w-[1550px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Column: Headline */}
          <div className="flex flex-col text-left pointer-events-auto max-w-md">
            <span className="text-xs md:text-[13px] font-bold tracking-[0.24em] text-neutral-400 uppercase mb-2 sm:mb-3">
              HI, I'M DHILIPAN
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[52px] font-extrabold tracking-tight leading-[1.04] uppercase select-none">
              <span className="block metallic-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                FULL STACK
              </span>
              <span className="block metallic-chrome drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mt-1 ml-4">
                DEVELOPER
              </span>
            </h1>
          </div>

          {/* Right Column: Tagline & Bio Description */}
          <div className="flex flex-col items-start text-left pointer-events-auto max-w-[290px] sm:max-w-[320px] lg:ml-auto">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-wide text-neutral-300 mb-2">
              <span className="text-neutral-400">//</span>
              <span className="text-neutral-200 font-semibold tracking-wider">
                TURNING IDEAS INTO REALITY
              </span>
            </div>

            <p className="leading-relaxed font-normal text-neutral-300 text-xs sm:text-[13px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Available for hire. Building fast, responsive web applications using modern tech stacks.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Timeline Notice (Left) & Pill Action Buttons (Right) matching Video-51585.mp4 */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-30 px-6 md:px-12 lg:px-16 pointer-events-none">
        <div className="mx-auto w-full max-w-[1550px] flex items-center justify-between pointer-events-auto">
          {/* Bottom Left: SCROLL TO SCRUB TIMELINE */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.24em] text-neutral-300 hover:text-white uppercase transition-colors duration-200 group"
          >
            <span className="transform transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
            <span>SCROLL TO SCRUB TIMELINE</span>
          </a>

          {/* Bottom Right: Reference Pill Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap">
            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md text-white font-semibold px-4 sm:px-5 py-2.5 text-xs sm:text-[13px] tracking-tight hover:bg-white/20 hover:border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 text-neutral-300 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <span>View Resume</span>
            </a>

            {/* Download Resume Button */}
            <a
              href="/resume.pdf"
              download="Dhilipan_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 shrink-0 rounded-full bg-white text-black font-semibold px-5 sm:px-6 py-2.5 text-xs sm:text-[13px] tracking-tight shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_6px_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 transform transition-transform duration-200 group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
