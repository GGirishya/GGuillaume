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

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-lg md:text-xl text-[#F4F4F5] leading-relaxed">
              {PROFILE.bio}
            </p>
            <p className="mt-6 text-base text-[#A1A1AA] leading-relaxed">
              I've shipped accessible interfaces for real brands during my
              internship at <span className="text-[#F4F4F5]">The Global Career Accelerator</span>,
              led residence-hall communities at MSU, and spent the rest of my
              time prototyping with AI agents, full-stack apps and the
              occasional hardware project. I'm happiest somewhere between the
              design file and the deploy log.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
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
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-[#27272A] border border-[#27272A]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  data-testid={`about-stat-${s.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  className="bg-[#0C0C0C] p-6 hover:bg-[#141414] transition-colors"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-3">
                    {s.label}
                  </p>
                  <p className="font-display text-2xl md:text-3xl font-bold text-[#F4F4F5]">
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
