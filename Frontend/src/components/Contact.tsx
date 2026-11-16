import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  permission: boolean;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    permission: false,
  });

  const [status, setStatus] = useState<"idle" | "transmitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 3D subtle tilt state for the right transmission card
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Gentle tilt angles (-3 to 3 degrees)
    const rotX = ((y - centerY) / centerY) * -3;
    const rotY = ((x - centerX) / centerX) * 3;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      permission: e.target.checked,
    }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() && !formData.lastName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please enter a message.");
      return;
    }
    if (!formData.permission) {
      setErrorMessage("Please grant permission to contact you.");
      return;
    }

    setStatus("transmitting");
    setErrorMessage("");

    // Simulate node dispatch transmission
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      permission: false,
    });
    setStatus("idle");
    setErrorMessage("");
  };

  // Live payload preview computations
  const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
  const senderDisplay = fullName ? `"${fullName}"` : "[Awaiting Name]";
  const emailDisplay = formData.email.trim() ? `"${formData.email.trim()}"` : "[Awaiting Email]";
  const messageDisplay = formData.message.trim()
    ? `"${formData.message.trim()}"`
    : `"[Awaiting Message]"`;

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#07080b] text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 pb-24 sm:pb-32 overflow-hidden select-none"
    >
      {/* Ambient background glow & atmospheric gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(26,30,42,0.45)_0%,rgba(7,8,11,0.95)_75%,#050608_100%)] z-0" />
      <div className="pointer-events-none absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full bg-slate-800/10 blur-[150px] z-0" />

      {/* Massive Background Typography Watermark: "CONTACT" */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-20px] left-1/2 -translate-x-1/2 select-none z-0 w-full flex items-center justify-center overflow-hidden"
      >
        <span className="font-extrabold text-[21vw] sm:text-[19vw] lg:text-[220px] xl:text-[250px] tracking-tight sm:tracking-normal text-white/[0.09] uppercase leading-none whitespace-nowrap drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          CONTACT
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">

          {/* LEFT CARD: Live Dispatch Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-5 flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 md:p-10 bg-[#13151b]/95 border border-white/[0.08] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.75)] overflow-hidden"
          >
            {/* Glass reflection gloss sheen overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-transparent opacity-90" />
            <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/[0.04] blur-2xl" />

            {/* Top Row: Dispatch Node Badge & Pulsing Active Status Dot */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.16em] text-neutral-400 uppercase">
                </span>
              </div>

              {/* Pulsing Green Status Dot */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_#10b981]"></span>
                </span>
              </div>
            </div>

            {/* Headline & Description */}
            <div className="relative z-10 my-6 sm:my-8">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.14]">
                Let's Build Something <br className="hidden sm:inline" />
                Exceptional.
              </h2>
              <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed max-w-md font-normal">
                Fill out the transmission form or preview your live payload stream directly below.
              </p>
            </div>

            {/* Quick Connect & Action Links */}
            <div className="relative z-10 flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Dhilipan_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-tight hover:bg-neutral-200 active:scale-95 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] group"
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

              {/* Email Link */}
              <a
                href="mailto:dhilipandev@gmail.com"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] hover:border-white/30 text-neutral-300 hover:text-white text-xs font-mono transition-all duration-200 group"
                title="Email: dhilipandev@gmail.com"
              >
                <svg
                  className="w-4 h-4 text-neutral-400 group-hover:text-emerald-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/dhilipan-vinish-003vi2d/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full border border-white/10 bg-white/[0.05] hover:bg-white/[0.12] hover:border-[#0a66c2]/60 text-neutral-300 hover:text-white text-xs font-mono transition-all duration-200 group"
                title="LinkedIn Profile"
              >
                <svg
                  className="w-4 h-4 fill-[#0a66c2] group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45 1.45 1.45 0 0 0 1.45 1.45m1.37 9.74v-8.37H5.1v8.37h2.73z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT CARD WRAPPER WITH ROTATING GLOWING AURA & 3D PERSPECTIVE */}
          <div
            className="relative lg:col-span-7 flex flex-col items-center justify-center"
            style={{ perspective: "1000px" }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            {/* LAYER 1: BRIGHT ROTATING GLOWING DIV (MATCHING ABOUT & ROADMAP SIGNATURE ANIMATION) */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 select-none flex items-center justify-center overflow-visible">
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
                {/* Luminous rounded glowing card matching About & Roadmap */}
                <div className="w-[300px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] rounded-[52px] bg-white/[0.60] blur-[32px] sm:blur-[48px]" />
              </motion.div>
            </div>

            {/* LAYER 2: SHARP FOREGROUND CARD (TRANSMISSION FORM) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              animate={{
                rotateX: rotateX,
                rotateY: rotateY,
              }}
              className="relative z-10 w-full h-full flex flex-col justify-between rounded-[28px] sm:rounded-[32px] p-7 sm:p-9 md:p-10 bg-[#13151b]/95 border border-white/[0.08] backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.75)] overflow-hidden"
            >
              {/* Gloss reflection sheen overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-80" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-12 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    <span className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">
                      // TRANSMISSION DISPATCHED
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Payload Delivered.
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base max-w-md mb-8">
                      Thank you, <span className="text-white font-medium">{fullName || "Visitor"}</span>. Your message has been safely received. I will respond to <span className="text-white font-medium">{formData.email}</span> promptly.
                    </p>

                    <button
                      onClick={handleReset}
                      type="button"
                      className="rounded-full px-7 py-3 bg-white hover:bg-neutral-200 text-black text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form
                    key="form-screen"
                    onSubmit={handleSubmit}
                    className="relative z-10 flex flex-col h-full justify-between gap-5"
                  >
                    <div className="space-y-4">
                      {/* Row 1: First Name & Last Name (With Crisp White Placeholders) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            disabled={status === "transmitting"}
                            className="w-full bg-[#22252c] hover:bg-[#252830] focus:bg-[#252830] border border-[#353945] focus:border-white/30 rounded-2xl px-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-white placeholder:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            disabled={status === "transmitting"}
                            className="w-full bg-[#22252c] hover:bg-[#252830] focus:bg-[#252830] border border-[#353945] focus:border-white/30 rounded-2xl px-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-white placeholder:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* Row 2: Email Address (With Crisp White Placeholder) */}
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          disabled={status === "transmitting"}
                          className="w-full bg-[#22252c] hover:bg-[#252830] focus:bg-[#252830] border border-[#353945] focus:border-white/30 rounded-2xl px-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-white placeholder:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] disabled:opacity-50"
                        />
                      </div>

                      {/* Row 3: Message Textarea (With Crisp White Placeholder) */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Type your message here..."
                          disabled={status === "transmitting"}
                          className="w-full bg-[#22252c] hover:bg-[#252830] focus:bg-[#252830] border border-[#353945] focus:border-white/30 rounded-2xl px-5 py-4 text-sm sm:text-[15px] text-white placeholder:text-white placeholder:opacity-100 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200 resize-none min-h-[140px] sm:min-h-[160px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] disabled:opacity-50"
                        />
                      </div>

                      {/* Error Notice */}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs text-rose-400 font-mono tracking-wide px-1"
                        >
                          * {errorMessage}
                        </motion.div>
                      )}
                    </div>

                    {/* Row 4: Bottom Controls (Checkbox + Glowing Pill Send Button) */}
                    <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 select-none">
                      {/* Permission Checkbox */}
                      <label className="flex items-center gap-3 cursor-pointer group select-none">
                        <div className="relative flex items-center justify-center">
                          <input
                            type="checkbox"
                            checked={formData.permission}
                            onChange={handleCheckboxChange}
                            disabled={status === "transmitting"}
                            className="peer appearance-none w-4 h-4 rounded-md border border-[#3b404d] bg-[#22252c] checked:bg-white checked:border-white transition-all cursor-pointer focus:outline-none"
                          />
                          <svg
                            className="absolute w-2.5 h-2.5 text-black opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3.5"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs sm:text-[13px] text-neutral-400 group-hover:text-neutral-300 transition-colors leading-tight">
                          I give permission to contact me at this email address.
                        </span>
                      </label>

                      {/* Glowing White Pill Button */}
                      <button
                        type="submit"
                        disabled={status === "transmitting"}
                        className="inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-8 py-3.5 bg-white hover:bg-neutral-100 active:scale-95 text-black text-xs sm:text-sm font-semibold tracking-tight shadow-[0_0_30px_rgba(255,255,255,0.45)] hover:shadow-[0_0_40px_rgba(255,255,255,0.65)] transition-all duration-300 cursor-pointer disabled:opacity-60 group whitespace-nowrap self-end sm:self-auto"
                      >
                        {status === "transmitting" ? (
                          <>
                            <span>Transmitting</span>
                            <span className="inline-block animate-pulse">...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <span className="transform transition-transform duration-200 group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
