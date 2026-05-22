import React from "react";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="relative py-24 md:py-32 border-t border-[#141414] bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="experience"
          kicker="02 / Experience"
          title="Where I've worked & led."
          description="Internships, on-campus roles, and projects shipped for real users."
        />

        <ol className="relative border-l border-[#27272A] ml-2">
          {EXPERIENCE.map((job, idx) => (
            <li
              key={job.company}
              data-testid={`experience-item-${idx}`}
              className="pl-8 md:pl-12 pb-14 last:pb-0 relative group"
            >
              <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 bg-[#050505] border border-[#FFB000] group-hover:bg-[#FFB000] transition-colors" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F4F4F5]">
                  {job.role}
                </h3>
                <span className="text-[#FFB000] flex items-center gap-1 font-mono text-sm">
                  <ArrowUpRight size={14} />
                  {job.company}
                </span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[#71717A]">
                {job.dates} · {job.location}
              </p>

              <ul className="mt-5 space-y-2 text-[#A1A1AA] text-base leading-relaxed max-w-3xl">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#FFB000] mt-2 w-1 h-1 bg-[#FFB000] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] border border-[#27272A] px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
