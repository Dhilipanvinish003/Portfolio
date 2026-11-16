import { useState, useEffect } from "react";

interface NavLink {
  name: string;
  link: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Expertise", link: "#expertise" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 lg:px-16 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#090a0d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.65)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1550px] items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center text-white text-lg md:text-xl font-bold tracking-tight"
        >
          <span>Dhilipan</span>
          <span className="text-white/60 ml-0.5 group-hover:text-white transition-colors duration-200">
            .
          </span>
        </a>

        {/* Desktop Nav Menus */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((navlink, index) => (
            <a
              key={index}
              href={navlink.link}
              className="text-neutral-300 hover:text-white text-[13px] font-medium tracking-wide transition-colors duration-200"
            >
              {navlink.name}
            </a>
          ))}
        </div>

        {/* Hire Me CTA Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="#contact"
            className="rounded-full border border-neutral-700/80 bg-neutral-900/80 hover:bg-white hover:text-black hover:border-white text-neutral-200 text-xs font-semibold px-5 py-2 backdrop-blur-md transition-all duration-200 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="sm:hidden rounded-full border border-neutral-700/80 bg-neutral-900/80 text-neutral-200 px-4 py-1.5 text-xs font-semibold backdrop-blur-md"
          >
            Hire Me
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-200 hover:text-white p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-3 px-5 py-4 rounded-2xl bg-[#090a0d]/95 border border-white/10 backdrop-blur-xl flex flex-col space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          {NAV_LINKS.map((navlink, index) => (
            <a
              key={index}
              href={navlink.link}
              onClick={() => setIsOpen(false)}
              className="text-neutral-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              {navlink.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
