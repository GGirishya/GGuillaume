import React from "react";
import { PROFILE } from "../data/portfolio";
import { ArrowDownRight, FileDown, MapPin } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative hero-mesh min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left content */}
          <div className="col-span-12 lg:col-span-8">
            <div
              data-testid="hero-status-badge"
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#27272A] bg-[#0C0C0C]/80 backdrop-blur-sm mb-8 animate-fade-up"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-75 pulse-dot" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FFB000]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4F4F5]">
                {PROFILE.status}
              </span>
            </div>

            <p
              className="font-mono text-xs uppercase tracking-[0.3em] text-[#A1A1AA] mb-6 animate-fade-up"
              style={{ animationDelay: "0.05s" }}
            >
              // Portfolio — {new Date().getFullYear()}
            </p>

            <h1
              data-testid="hero-name"
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] text-[#F4F4F5] animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Guillaume <br />
              <span className="text-[#FFB000]">Girishya.</span>
            </h1>

            <p
              data-testid="hero-tagline"
              className="mt-8 max-w-2xl text-lg md:text-xl text-[#A1A1AA] leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Computer Science student & software developer building accessible,
              well-engineered web products. Currently graduating spring 2026 and
              <span className="text-[#F4F4F5]"> open to full-time roles</span>.
            </p>

            <div
              className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                data-testid="hero-contact-cta"
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 bg-[#FFB000] text-black font-semibold px-7 py-4 hover:bg-[#E59E00] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(255,176,0,0.35)]"
              >
                Get in touch
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </button>
              <a
                data-testid="hero-resume-cta"
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-[#27272A] text-[#F4F4F5] font-mono text-sm uppercase tracking-wider px-7 py-4 hover:border-[#FFB000] hover:text-[#FFB000] transition-colors"
              >
                <FileDown size={16} />
                Download résumé
              </a>
            </div>
          </div>

          {/* Right meta column */}
          <div className="col-span-12 lg:col-span-4 lg:pl-10 lg:border-l lg:border-[#27272A]">
            <div className="flex flex-col gap-5 text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-2">
                  Currently
                </p>
                <p className="text-[#F4F4F5]">
                  Final-year CS @{" "}
                  <span className="text-[#FFB000]">Missouri State</span>
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-2">
                  Location
                </p>
                <p className="text-[#F4F4F5] inline-flex items-center gap-2">
                  <MapPin size={14} className="text-[#FFB000]" />
                  {PROFILE.location}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-2">
                  Focus
                </p>
                <p className="text-[#F4F4F5]">
                  Full-stack web, accessibility, AI-assisted products
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#71717A]">
          <span className="w-12 h-px bg-[#27272A]" />
          Scroll
        </div>
      </div>
    </section>
  );
}
