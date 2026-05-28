"use client";

/**
 * Floating decorative coins/orbs : SPYLT-style background elements adapted for luxury banking.
 * Renders as floating gold-tinted ellipses with parallax drift via CSS animation.
 *
 * Sits absolutely on top of the parent (which should be position: relative).
 */
export default function FloatingCoins({
  count = 6,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const coins = Array.from({ length: count }, (_, i) => {
    // Deterministic pseudo-random positions so layout is stable
    const seed = (i + 1) * 7;
    return {
      id: i,
      left: `${(seed * 13.7) % 90 + 3}%`,
      top: `${(seed * 23.3) % 80 + 5}%`,
      size: 24 + ((seed * 31) % 48),
      rot: ((seed * 37) % 90) - 45,
      duration: 6 + ((seed * 11) % 8),
      delay: ((seed * 17) % 60) / 10,
    };
  });

  return (
    <div
      aria-hidden
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {coins.map((c) => (
        <div
          key={c.id}
          className="absolute animate-float"
          style={
            {
              left: c.left,
              top: c.top,
              width: c.size,
              height: c.size,
              animationDuration: `${c.duration}s`,
              animationDelay: `${c.delay}s`,
              "--rot": `${c.rot}deg`,
              "--float-duration": `${c.duration}s`,
            } as React.CSSProperties
          }
        >
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full"
            style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.35))" }}
          >
            <defs>
              <radialGradient
                id={`coin-grad-${c.id}`}
                cx="35%"
                cy="35%"
                r="60%"
              >
                <stop offset="0%" stopColor="#F5E5BD" />
                <stop offset="55%" stopColor="#D7B068" />
                <stop offset="100%" stopColor="#8B6420" />
              </radialGradient>
            </defs>
            <ellipse
              cx="32"
              cy="32"
              rx="30"
              ry="10"
              fill={`url(#coin-grad-${c.id})`}
              opacity="0.85"
            />
            <ellipse
              cx="32"
              cy="29"
              rx="20"
              ry="4"
              fill="#FFF7E1"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
