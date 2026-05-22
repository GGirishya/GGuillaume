import React from "react";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../data/portfolio";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";

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
          title="Projects, prototypes & live sites."
          description="A mix of full-stack apps, AI tools, and brand websites. Each one taught me something I still use today."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {PROJECTS.map((p, i) => {
            const span =
              i === 0 ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4";
            const primaryHref = p.demo || p.github || null;
            return (
              <article
                key={p.title}
                data-testid={`project-card-${i}`}
                className={`${span} group relative bg-[#0C0C0C] border ${
                  p.featured ? "border-[#FFB000]/40" : "border-[#27272A]"
                } hover:border-[#FFB000]/70 transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {p.featured && (
                  <div
                    data-testid={`project-${i}-featured-ribbon`}
                    className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-[#FFB000] text-black font-mono text-[10px] uppercase tracking-[0.2em] px-2.5 py-1.5 shadow-[0_0_18px_rgba(255,176,0,0.45)]"
                  >
                    <Sparkles size={11} strokeWidth={2.5} />
                    Featured
                  </div>
                )}

                <a
                  href={primaryHref || undefined}
                  target={primaryHref ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={p.title}
                  className="img-zoom aspect-[16/10] bg-[#141414] overflow-hidden border-b border-[#27272A] block relative"
                >
                  {p.video ? (
                    <video
                      data-testid={`project-${i}-inline-video`}
                      src={p.video}
                      poster={p.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover opacity-95 group-hover:opacity-100"
                    />
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                    />
                  )}
                </a>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-[#F4F4F5] group-hover:text-[#FFB000] transition-colors">
                      {p.title}
                    </h3>
                    {primaryHref && (
                      <ArrowUpRight
                        size={20}
                        className="text-[#71717A] group-hover:text-[#FFB000] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                      />
                    )}
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

                  {(p.github || p.demo) && (
                    <div className="mt-6 pt-5 border-t border-[#27272A] flex flex-wrap gap-2">
                      {p.demo && (
                        <a
                          data-testid={`project-${i}-demo-link`}
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] bg-[#FFB000] text-black px-3 py-2 hover:bg-[#E59E00] transition-colors"
                        >
                          <ExternalLink size={12} />
                          {p.demoLabel || "Live site"}
                        </a>
                      )}
                      {p.github && (
                        <a
                          data-testid={`project-${i}-github-link`}
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] border border-[#27272A] text-[#F4F4F5] px-3 py-2 hover:border-[#FFB000] hover:text-[#FFB000] transition-colors"
                        >
                          <Github size={12} />
                          Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
