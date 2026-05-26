"use client";

import { motion } from "motion/react";
import Image, { type ImageProps } from "next/image";

export default function ImageReveal({
  src,
  alt,
  blurDataURL,
  priority = false,
  sizes = "100vw",
  className = "",
  aspect = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  blurDataURL?: string;
  priority?: boolean;
  sizes?: ImageProps["sizes"];
  className?: string;
  aspect?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        className="object-cover"
      />
    </motion.div>
  );
}
