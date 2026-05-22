import React from "react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative py-24 md:py-32 border-t border-[#141414]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="projects"
          kicker="03 / Selected work"
          title="Projects, prototypes & experiments."
          description="A mix of full-stack apps, AI tools, and hardware tinkering. Each one taught me something I still use today."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => {
            const span = i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4";
            return (
              <article
                key={p.title}
                data-testid={`project-card-${i}`}
                className={`${span} group relative bg-[#0C0C0C] border border-[#27272A] hover:border-[#FFB000]/60 transition-all duration-300 overflow-hidden`}
              >
                <div className="img-zoom aspect-[16/10] bg-[#141414] overflow-hidden border-b border-[#27272A]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#F4F4F5] group-hover:text-[#FFB000] transition-colors">
                      {p.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="text-[#71717A] group-hover:text-[#FFB000] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                    />
                  </div>
                  <p className="mt-3 text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A1A1AA] border border-[#27272A] px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
