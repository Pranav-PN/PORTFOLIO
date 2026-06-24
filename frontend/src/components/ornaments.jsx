import React from "react";

/** Greek meander / key pattern divider. Pure CSS, gold colour. */
export function Meander({ className = "" }) {
  return (
    <div
      data-testid="meander-divider"
      className={`meander w-full ${className}`}
      aria-hidden="true"
    />
  );
}

/** Small gold rule with a centred laurel diamond. */
export function GoldRule({ className = "" }) {
  return (
    <div
      data-testid="gold-rule"
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-16 bg-[#d4af37]/70" />
      <svg width="10" height="10" viewBox="0 0 10 10">
        <rect
          x="5"
          y="0"
          width="7.07"
          height="7.07"
          transform="rotate(45 5 0)"
          fill="#d4af37"
        />
      </svg>
      <span className="h-px w-16 bg-[#d4af37]/70" />
    </div>
  );
}

/** SVG laurel branch — used as decorative floating element in hero. */
export function Laurel({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
      aria-hidden="true"
    >
      <g fill="none" stroke="#d4af37" strokeWidth="1.2">
        <path d="M10 30 Q 100 -10 190 30" />
        {[...Array(12)].map((_, i) => {
          const t = (i + 1) / 13;
          const x = 10 + t * 180;
          const y = 30 - Math.sin(t * Math.PI) * 32;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y - 4}
              rx="9"
              ry="3"
              transform={`rotate(${-30 + t * 60} ${x} ${y - 4})`}
              fill="#d4af37"
              fillOpacity="0.35"
            />
          );
        })}
      </g>
    </svg>
  );
}
