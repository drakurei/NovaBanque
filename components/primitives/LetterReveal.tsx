"use client";

import { motion } from "motion/react";

/**
 * LetterReveal — anime chaque caractère d'un titre avec un stagger cinématique.
 * Préserve les espaces non-cassables et l'italique sur les portions marquées.
 */
export default function LetterReveal({
  text,
  italic = false,
  delay = 0,
  stagger = 0.025,
  className = "",
}: {
  text: string;
  italic?: boolean;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <span
      className={`inline-block ${italic ? "italic" : ""} ${className}`}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className="inline-block whitespace-nowrap"
          aria-hidden
        >
          {Array.from(word).map((char, ci) => (
            <motion.span
              key={`${char}-${ci}`}
              className="inline-block"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
                delay: delay + (wi * 0.04 + ci * stagger),
              }}
              style={{ willChange: "transform" }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
}
