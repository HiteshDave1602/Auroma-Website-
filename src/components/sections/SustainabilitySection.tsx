import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Brochure p.6 — "Sustainability You Can Feel". A cutaway diagram of the
 * villa with numbered callouts (drawn as inline SVG so it stays crisp at any
 * width), a four-figure stat strip and the eight numbered systems the
 * callouts point to. Sits directly after The Architect.
 */
export function SustainabilitySection({
  id,
  kicker,
  headlineLine1,
  headlineLine2,
  body,
  stats,
  features,
}: {
  id?: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  body: string;
  stats: readonly { figure: string; label: string }[];
  features: readonly { title: string; body: string }[];
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <Eyebrow tone="gold">{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl">
            {headlineLine1}
            <br />
            <em className="text-slate">{headlineLine2}</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 max-w-xl font-body text-[15px] leading-relaxed text-slate sm:text-base">{body}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-gold/15 shadow-lg shadow-midnight/[0.06] sm:mt-14">
            <HouseDiagram labels={features.map((f) => f.title)} />
          </div>
        </Reveal>

        {/* Stat strip */}
        <Reveal delay={240}>
          <dl className="mt-6 grid grid-cols-2 overflow-hidden rounded-2xl bg-midnight lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.figure}
                className={`px-4 py-6 text-center sm:py-7 ${i % 2 === 1 ? "border-l border-gold/25" : ""} ${
                  i >= 2 ? "border-t border-gold/25 lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l" : ""}`}
              >
                <dt className="font-display text-3xl text-gold-light sm:text-4xl">{stat.figure}</dt>
                <dd className="mx-auto mt-1 max-w-[150px] font-body text-[11px] leading-snug text-paper/70 sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Numbered systems — numbers match the diagram callouts */}
        <ol className="mt-12 grid gap-x-10 sm:mt-14 md:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} as="li" delay={260 + (i % 2) * 60}>
              <div className="flex h-full items-start gap-5 border-b border-midnight/10 py-6">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-midnight font-label text-[12px] text-paper">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-label text-[12px] font-medium tracking-[0.2em] text-gold uppercase">
                    {feature.title}
                  </h3>
                  <p className="mt-2 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">{feature.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Numbered callout marker used inside the diagram. */
function Marker({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="11" fill="#1c2b35" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="600" fill="#d4a94e">
        {n}
      </text>
    </g>
  );
}

function Tree({ x, scale = 1 }: { x: number; scale?: number }) {
  return (
    <g transform={`translate(${x} 300) scale(${scale})`}>
      <rect x="-3" y="-55" width="6" height="55" fill="#7a5534" />
      <circle cx="-14" cy="-62" r="22" fill="#a3b48a" />
      <circle cx="12" cy="-66" r="24" fill="#9aad80" />
      <circle cx="0" cy="-82" r="22" fill="#aebd95" />
    </g>
  );
}

function HouseDiagram({ labels }: { labels: string[] }) {
  return (
    <svg
      viewBox="0 0 830 390"
      className="block h-auto w-full"
      role="img"
      aria-label={`Cutaway diagram of the villa showing: ${labels.map((l, i) => `${i + 1}. ${l}`).join("; ")}.`}
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <defs>
        <linearGradient id="sus-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1ee" />
          <stop offset="1" stopColor="#f7f3ea" />
        </linearGradient>
        <marker id="sus-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#6f9cc0" />
        </marker>
        <marker id="sus-arrow-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#b8922a" />
        </marker>
      </defs>

      {/* Sky + ground */}
      <rect width="830" height="390" fill="url(#sus-sky)" />
      <rect y="300" width="830" height="90" fill="#d9ccb3" />
      <rect y="296" width="830" height="6" fill="#a9b48c" />

      {/* Rain */}
      <g stroke="#7f9fb8" strokeWidth="1.6" strokeLinecap="round">
        <path d="M262 30 L256 48 M292 22 L286 40 M322 30 L316 48 M352 18 L346 36 M282 56 L276 72 M318 58 L312 74" />
      </g>

      {/* Sun + daylight rays */}
      <circle cx="720" cy="48" r="25" fill="#f0d48c" />
      <g stroke="#b8922a" strokeWidth="1.4" strokeDasharray="5 4" fill="none">
        <path d="M698 58 L542 112" />
        <path d="M700 68 L540 178" />
      </g>

      {/* House shell */}
      <rect x="248" y="112" width="290" height="188" fill="#faf6ee" />
      {/* Brick thermal-mass walls */}
      <g fill="#c4744f">
        <rect x="240" y="112" width="14" height="188" />
        <rect x="532" y="112" width="14" height="188" />
      </g>
      <g stroke="#a65d3c" strokeWidth="0.8">
        {Array.from({ length: 15 }, (_, i) => 124 + i * 12).map((y) => (
          <path key={y} d={`M240 ${y} H254 M532 ${y} H546`} />
        ))}
      </g>
      {/* Slabs */}
      <g fill="#1c2b35">
        <rect x="236" y="106" width="314" height="7" />
        <rect x="248" y="172" width="290" height="5" />
        <rect x="248" y="236" width="290" height="5" />
      </g>
      {/* Windows */}
      <g fill="#d6e4ec" stroke="#1c2b35" strokeWidth="1.4">
        {[130, 194, 258].map((y) => (
          <g key={y}>
            <rect x="243" y={y} width="8" height="26" />
            <rect x="535" y={y} width="8" height="26" />
          </g>
        ))}
      </g>

      {/* Roof pergola */}
      <g fill="#7a5534">
        <rect x="244" y="74" width="160" height="5" />
        <rect x="252" y="79" width="5" height="27" />
        <rect x="392" y="79" width="5" height="27" />
      </g>

      {/* Solar panel + hot-water tank */}
      <g transform="rotate(-16 460 92)">
        <rect x="418" y="84" width="84" height="16" rx="1" fill="#2e4a6a" />
        <path d="M439 84 V100 M460 84 V100 M481 84 V100" stroke="#8fa8b4" strokeWidth="0.8" />
      </g>
      <rect x="508" y="74" width="24" height="32" rx="5" fill="#e6e6e2" stroke="#1c2b35" strokeWidth="1.4" />

      {/* Cross-ventilation */}
      <g stroke="#6f9cc0" strokeWidth="1.8" strokeDasharray="7 6" fill="none" markerEnd="url(#sus-arrow)">
        <path d="M180 146 C320 138 460 150 640 140" />
        <path d="M180 210 C320 204 460 214 640 204" />
      </g>

      {/* Interior: courtyard planter, water purifier */}
      <rect x="320" y="216" width="50" height="10" rx="2" fill="#e8dcc6" />
      <g>
        <rect x="372" y="282" width="38" height="16" fill="#c9b79a" />
        <path d="M391 282 C385 262 372 252 364 248 M391 282 C392 262 394 250 398 240 M391 282 C398 266 410 258 418 256" stroke="#7d9a62" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <path d="M452 270 C446 279 444 284 444 288 A8 8 0 0 0 460 288 C460 284 458 279 452 270 Z" fill="#6f9cc0" />
      <rect x="466" y="276" width="44" height="22" fill="#efe6d5" stroke="#c9b79a" strokeWidth="1.2" />

      {/* Rainwater down-pipe to underground recharge tank */}
      <path d="M236 110 H226 V330 H290" stroke="#6f9cc0" strokeWidth="3" fill="none" />
      <rect x="290" y="312" width="92" height="38" rx="5" fill="#bcd6e8" stroke="#6f9cc0" strokeWidth="1.6" />
      <path d="M304 331 q8 -6 16 0 t16 0 t16 0 t16 0" stroke="#6f9cc0" strokeWidth="1.4" fill="none" />

      {/* Compost bin with dotted path from kitchen */}
      <path d="M512 288 C550 276 580 276 604 286" stroke="#b8922a" strokeWidth="1.6" strokeDasharray="3 4" fill="none" markerEnd="url(#sus-arrow-gold)" />
      <path d="M606 296 L612 274 H644 L650 296 Z" fill="#7a4f2e" />
      <path d="M628 274 C624 264 628 256 636 254 C638 262 634 270 628 274 Z" fill="#7d9a62" />

      {/* EV charger */}
      <rect x="672" y="250" width="16" height="46" rx="2" fill="#1c2b35" />
      <path d="M682 260 L677 272 H683 L678 284" stroke="#d4a94e" strokeWidth="1.6" fill="none" strokeLinejoin="round" />

      {/* Trees */}
      <Tree x={120} />
      <Tree x={188} scale={0.75} />
      <Tree x={752} />
      <Tree x={808} scale={0.75} />

      {/* Callout pills */}
      <g>
        <rect x="80" y="160" width="86" height="28" rx="14" fill="#fafaf7" stroke="#7d9a62" strokeWidth="1.2" />
        <text x="123" y="178" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1c2b35">
          AQI &lt; 50
        </text>
      </g>
      <g>
        <path d="M232 250 H240" stroke="#b8922a" strokeWidth="1.6" />
        <rect x="140" y="236" width="94" height="28" rx="14" fill="#c8a04a" />
        <text x="187" y="254" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fafaf7">
          −8°C inside
        </text>
      </g>

      {/* Numbered callouts — order matches the feature list */}
      <Marker x={98} y={222} n={1} />
      <Marker x={590} y={122} n={2} />
      <Marker x={262} y={278} n={3} />
      <Marker x={660} y={140} n={4} />
      <Marker x={466} y={58} n={5} />
      <Marker x={398} y={331} n={6} />
      <Marker x={664} y={306} n={7} />
      <Marker x={488} y={262} n={8} />
    </svg>
  );
}
