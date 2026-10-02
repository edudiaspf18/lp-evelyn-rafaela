import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type BotanicalProps = SVGProps<SVGSVGElement> & { animated?: boolean };

const LINE = "fill-none stroke-current";

/** Ramo com folhas (ecoa a folhagem da logo). Traço desenhado ao carregar. */
export function Sprig({ className, animated = true, ...props }: BotanicalProps) {
  const rows = [
    { y: 252, a: 38, s: 0.82 },
    { y: 214, a: 40, s: 0.92 },
    { y: 176, a: 42, s: 1 },
    { y: 138, a: 44, s: 1 },
    { y: 100, a: 46, s: 0.9 },
    { y: 66, a: 48, s: 0.78 },
  ];
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 200 300" aria-hidden="true" className={cn("overflow-visible", className)} {...props}>
      <path
        d="M100 296 C 96 220, 106 140, 100 18"
        pathLength={1}
        strokeWidth={1.4}
        strokeLinecap="round"
        className={cn(LINE, draw)}
      />
      {rows.flatMap((row, i) =>
        [1, -1].map((side) => (
          <path
            key={`${row.y}-${side}`}
            d="M0 0 C 16 -26, 44 -28, 60 -13 C 46 8, 16 10, 0 0Z"
            transform={`translate(100 ${row.y}) scale(${side * row.s} ${row.s}) rotate(${-row.a})`}
            pathLength={1}
            strokeWidth={1.2}
            strokeLinejoin="round"
            className={cn(LINE, draw)}
            style={{ "--draw-delay": `${500 + i * 160}ms` } as React.CSSProperties}
          />
        )),
      )}
      <path
        d="M100 18 C 96 6, 100 -8, 100 -14"
        pathLength={1}
        strokeWidth={1.2}
        strokeLinecap="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "1500ms" } as React.CSSProperties}
      />
    </svg>
  );
}

/** Fatia de cítrico em traço fino. */
export function Citrus({ className, animated = true, ...props }: BotanicalProps) {
  const segments = Array.from({ length: 8 }, (_, i) => {
    const a0 = (i * 45 + 5) * (Math.PI / 180);
    const a1 = (i * 45 + 40) * (Math.PI / 180);
    const r = 33;
    const p = (a: number) => `${(50 + r * Math.cos(a)).toFixed(2)} ${(50 + r * Math.sin(a)).toFixed(2)}`;
    return `M50 50 L${p(a0)} A${r} ${r} 0 0 1 ${p(a1)}Z`;
  });
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} {...props}>
      <circle cx="50" cy="50" r="44" pathLength={1} strokeWidth={1.4} className={cn(LINE, draw)} />
      <circle cx="50" cy="50" r="37" pathLength={1} strokeWidth={0.9} className={cn(LINE, draw)} />
      {segments.map((d, i) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          strokeWidth={1}
          strokeLinejoin="round"
          className={cn(LINE, draw)}
          style={{ "--draw-delay": `${700 + i * 90}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}

/** Maçã em traço fino. */
export function Apple({ className, animated = true, ...props }: BotanicalProps) {
  const draw = animated ? "draw-line" : "";

  return (
    <svg viewBox="0 0 100 110" aria-hidden="true" className={className} {...props}>
      <path
        d="M50 34 C 34 18, 8 32, 12 64 C 16 92, 36 104, 50 98 C 64 104, 84 92, 88 64 C 92 32, 66 18, 50 34Z"
        pathLength={1}
        strokeWidth={1.4}
        strokeLinejoin="round"
        className={cn(LINE, draw)}
      />
      <path
        d="M50 34 C 50 24, 54 14, 62 8"
        pathLength={1}
        strokeWidth={1.4}
        strokeLinecap="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "900ms" } as React.CSSProperties}
      />
      <path
        d="M56 18 C 64 6, 80 8, 84 16 C 76 24, 62 24, 56 18Z"
        pathLength={1}
        strokeWidth={1.2}
        strokeLinejoin="round"
        className={cn(LINE, draw)}
        style={{ "--draw-delay": "1200ms" } as React.CSSProperties}
      />
    </svg>
  );
}
