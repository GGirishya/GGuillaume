import React from "react";
import SectionHeading from "./SectionHeading";
import { PROFILE, STATS } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 border-t border-[#141414]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="about"
          kicker="01 / About"
          title="Curious engineer, careful collaborator."
        />

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Portrait */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 order-1 md:order-none">
            <div
              data-testid="about-portrait-wrap"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-[#FFB000]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative img-zoom border border-[#27272A] overflow-hidden aspect-[4/5]">
                <img
                  src={PROFILE.portraitUrl}
                  alt={`${PROFILE.name} — portrait`}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FFB000]">
                    {PROFILE.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A1A1AA]">
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <p className="text-lg md:text-xl text-[#F4F4F5] leading-relaxed">
              {PROFILE.bio}
            </p>
            <p className="mt-6 text-base text-[#A1A1AA] leading-relaxed">
              I've shipped accessible interfaces for real brands during my
              internship at <span className="text-[#F4F4F5]">The Global Career Accelerator</span>,
              led residence-hall communities at MSU, and spent the rest of my
              time prototyping with AI agents, full-stack apps and the
              occasional brand website. I'm happiest somewhere between the
              design file and the deploy log.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Engineer", "Designer-aware", "Accessibility advocate", "Mentor"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A1A1AA] border border-[#27272A] px-3 py-1.5"
                  >
                    {t}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px bg-[#27272A] border border-[#27272A]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  data-testid={`about-stat-${s.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="bg-[#0C0C0C] p-5 hover:bg-[#141414] transition-colors"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-2">
                    {s.label}
                  </p>
                  <p className="font-display text-xl md:text-2xl font-bold text-[#F4F4F5]">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
