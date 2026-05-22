import React from "react";
import SectionHeading from "./SectionHeading";
import { EDUCATION, CERTS, AWARDS } from "../data/portfolio";
import { GraduationCap, Award, BadgeCheck } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      data-testid="education-section"
      className="relative py-24 md:py-32 border-t border-[#141414]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          id="education"
          kicker="05 / Education"
          title="Academics, credentials & awards."
        />

        <div className="grid grid-cols-12 gap-6">
          {/* Education card */}
          <div
            data-testid="education-school-card"
            className="col-span-12 md:col-span-7 border border-[#27272A] bg-[#0C0C0C] p-8 md:p-10 hover:border-[#FFB000]/60 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 border border-[#27272A] bg-[#141414]">
                <GraduationCap size={22} className="text-[#FFB000]" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F4F4F5]">
                  {EDUCATION.school}
                </h3>
                <p className="mt-1 text-[#A1A1AA]">{EDUCATION.degree}</p>
                <p className="mt-1 text-sm text-[#A1A1AA]">{EDUCATION.minors}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-px bg-[#27272A] border border-[#27272A]">
              {[
                { label: "Location", value: EDUCATION.location },
                { label: "Graduation", value: EDUCATION.graduation },
                { label: "Honors", value: EDUCATION.gpa },
              ].map((b) => (
                <div key={b.label} className="bg-[#050505] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-2">
                    {b.label}
                  </p>
                  <p className="text-sm text-[#F4F4F5]">{b.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="col-span-12 md:col-span-5 border border-[#27272A] bg-[#0C0C0C] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <Award size={18} className="text-[#FFB000]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#F4F4F5]">
                Awards
              </h3>
            </div>
            <ul className="space-y-5">
              {AWARDS.map((a) => (
                <li key={a.title} data-testid="award-item">
                  <p className="text-[#F4F4F5] leading-snug">{a.title}</p>
                  <p className="mt-1 text-xs text-[#A1A1AA] font-mono uppercase tracking-[0.18em]">
                    {a.org} · {a.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Certs */}
          <div className="col-span-12 border border-[#27272A] bg-[#0C0C0C] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck size={18} className="text-[#FFB000]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-[#F4F4F5]">
                Certifications
              </h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CERTS.map((c) => (
                <li
                  key={c}
                  data-testid="cert-item"
                  className="text-[#A1A1AA] border border-[#27272A] px-4 py-3 hover:border-[#FFB000]/60 hover:text-[#F4F4F5] transition-colors"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
