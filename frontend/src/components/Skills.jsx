import React from "react";
import SectionHeading from "./SectionHeading";
import { SKILL_GROUPS } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-32 border-t border-[#141414] bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="skills"
          kicker="04 / Toolkit"
          title="The stack I reach for."
          description="Comfortable across the stack — but happiest in the parts that ship to users."
        />

        <div className="border border-[#27272A] bg-[#050505] font-mono text-sm overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#27272A] bg-[#0C0C0C]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-[10px] uppercase tracking-[0.22em] text-[#71717A]">
              ~/guillaume/skills.sh
            </span>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {SKILL_GROUPS.map((g, i) => (
              <div
                key={g.label}
                data-testid={`skill-group-${g.label.toLowerCase()}`}
                className="grid grid-cols-12 gap-4 items-start"
              >
                <div className="col-span-12 md:col-span-3">
                  <span className="text-[#FFB000]">{`>`}</span>{" "}
                  <span className="text-[#A1A1AA] uppercase tracking-[0.18em] text-xs">
                    {g.label}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-[#F4F4F5] border border-[#27272A] px-2.5 py-1 hover:border-[#FFB000] hover:text-[#FFB000] transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
