import React from "react";
import { PROFILE } from "../data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-[#141414] bg-[#050505] pt-20 pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h3 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F4F4F5] leading-[0.95]">
          Let's <span className="text-[#FFB000]">work together.</span>
        </h3>
        <p className="mt-6 max-w-2xl text-[#A1A1AA] text-base md:text-lg">
          Recently graduated and open to full-time roles, freelance gigs, and
          collaborations — onsite, remote, or hybrid. The fastest way to reach
          me is the form above or a direct email.
        </p>

        <div className="mt-14 grid grid-cols-12 gap-6 items-end border-t border-[#27272A] pt-10">
          <div className="col-span-12 md:col-span-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#71717A] mb-3">
              Direct line
            </p>
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="footer-email"
              className="text-lg md:text-2xl text-[#F4F4F5] link-underline hover:text-[#FFB000] transition-colors"
            >
              {PROFILE.email}
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 flex md:justify-end gap-3">
            <FooterIcon href={PROFILE.github} testid="footer-github" Icon={Github} />
            <FooterIcon href={PROFILE.linkedin} testid="footer-linkedin" Icon={Linkedin} />
            <FooterIcon href={`mailto:${PROFILE.email}`} testid="footer-mail" Icon={Mail} />
            <button
              data-testid="footer-back-to-top"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="border border-[#27272A] p-3 hover:border-[#FFB000] hover:text-[#FFB000] transition-colors text-[#A1A1AA]"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#52525B]">
          <p>© {new Date().getFullYear()} Guillaume Girishya — All rights reserved.</p>
          <p>Built with React · Designed to feel quiet & quick.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ href, Icon, testid }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-testid={testid}
      className="border border-[#27272A] p-3 hover:border-[#FFB000] hover:text-[#FFB000] transition-colors text-[#A1A1AA]"
    >
      <Icon size={18} />
    </a>
  );
}
