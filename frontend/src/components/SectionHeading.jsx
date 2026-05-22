import React from "react";

export default function SectionHeading({ kicker, title, description, id }) {
  return (
    <div className="mb-14 max-w-3xl" data-testid={id ? `${id}-heading` : undefined}>
      {kicker && (
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FFB000] mb-4">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F4F4F5] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-[#A1A1AA] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
