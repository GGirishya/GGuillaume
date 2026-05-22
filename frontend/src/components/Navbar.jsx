import React, { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("hero")}
          data-testid="nav-logo"
          className="font-display text-2xl font-black tracking-tight text-[#F4F4F5] hover:text-[#FFB000] transition-colors"
        >
          {PROFILE.initials}<span className="text-[#FFB000]">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.18em] text-[#A1A1AA]">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                data-testid={`nav-link-${l.id}`}
                onClick={() => handleClick(l.id)}
                className="link-underline hover:text-[#F4F4F5] transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            data-testid="nav-hire-cta"
            onClick={() => handleClick("contact")}
            className="font-mono text-xs uppercase tracking-[0.18em] bg-[#FFB000] text-black px-5 py-2.5 hover:bg-[#E59E00] transition-colors"
          >
            Hire me
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className="md:hidden text-[#F4F4F5]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          data-testid="nav-mobile-panel"
          className="md:hidden bg-[#0C0C0C] border-t border-[#27272A]"
        >
          <ul className="px-6 py-4 flex flex-col gap-4 font-mono text-sm uppercase tracking-[0.15em] text-[#A1A1AA]">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  data-testid={`nav-mobile-link-${l.id}`}
                  onClick={() => handleClick(l.id)}
                  className="hover:text-[#FFB000]"
                >
                  {l.label}
                </button>
              </li>
            ))}
            <li>
              <button
                data-testid="nav-mobile-hire-cta"
                onClick={() => handleClick("contact")}
                className="bg-[#FFB000] text-black px-4 py-2 mt-2"
              >
                Hire me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
