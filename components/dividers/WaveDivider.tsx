"use client";

import { motion } from "motion/react";

/**
 * WaveDivider : SPYLT-style fluid transition between two background colors.
 * Drop between two sections of different bg colors.
 *
 * @example
 *   <SectionLight />
 *   <WaveDivider from="ivoire" to="charcoal" />
 *   <SectionDark />
 */
export default function WaveDivider({
  from = "ivoire",
  to = "charcoal",
  flip = false,
  height = 120,
}: {
  from?: "ivoire" | "charcoal" | "ivoire-2";
  to?: "ivoire" | "charcoal" | "ivoire-2";
  flip?: boolean;
  height?: number;
}) {
  const colors: Record<string, string> = {
    ivoire: "#F5F0E8",
    "ivoire-2": "#EBE5D8",
    charcoal: "#0F1112",
  };

  return (
    <div
      aria-hidden
      style={{
        background: colors[from],
        marginTop: -1,
        marginBottom: -1,
      }}
      className="relative w-full overflow-hidden"
    >
      <motion.svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        className={`block w-full ${flip ? "rotate-180" : ""}`}
        style={{ height, display: "block" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <path
          d={`M0,0 L1440,0 L1440,${height * 0.3} C1080,${height * 0.95} 720,${height * 0.05} 360,${height * 0.7} C180,${height * 0.85} 60,${height * 0.6} 0,${height * 0.55} Z`}
          fill={colors[to]}
        />
      </motion.svg>
    </div>
  );
}
