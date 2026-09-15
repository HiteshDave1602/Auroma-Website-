import type { ReactNode } from "react";

const tones = {
  paper: "bg-paper border-slate/10",
  midnight: "bg-midnight/40 border-mist/15",
  white: "bg-white border-slate/10",
} as const;

export function Card({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div
      className={`card-lift rounded-xl border ${tones[tone]} p-6 shadow-xl shadow-midnight/5 sm:p-7 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10 ${className}`}
    >
      {children}
    </div>
  );
}

const badgeTones = {
  gold: "bg-gold/10 text-gold",
  midnight: "bg-paper/10 text-paper",
  // Warm gold-tinted circle with a deep-ink icon — an emblem treatment for
  // editorial/premium contexts, vs. the flatter monotone `gold` tone above.
  "gold-deep": "bg-gradient-to-br from-gold/25 to-gold/10 text-midnight ring-1 ring-gold/25",
} as const;

const badgeSizes = {
  md: "h-11 w-11",
  lg: "h-12 w-12",
} as const;

export function IconBadge({
  children,
  tone = "gold",
  size = "md",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof badgeTones;
  size?: keyof typeof badgeSizes;
  className?: string;
}) {
  return (
    <span
      className={`flex ${badgeSizes[size]} shrink-0 items-center justify-center rounded-full ${badgeTones[tone]} ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
