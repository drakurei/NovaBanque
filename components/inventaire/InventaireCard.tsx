"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUp, viewportOnce } from "@/lib/motion";
import EditorialLink from "@/components/primitives/EditorialLink";

export default function InventaireCard({
  label,
  title,
  description,
  href,
  imageSrc,
  imageAlt,
}: {
  label: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden mb-8">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>
      <p className="text-[11px] tracking-[0.3em] uppercase text-charcoal-2 mb-4">
        {label}
      </p>
      <h3 className="font-display text-3xl lg:text-4xl leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-charcoal-2 mt-4 leading-relaxed max-w-md">
        {description}
      </p>
      <div className="mt-6">
        <EditorialLink href={href}>En savoir plus</EditorialLink>
      </div>
    </motion.article>
  );
}
