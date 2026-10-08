"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

/** Card with a cursor-following glow, lift and border transition on hover. */
export default function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(380px circle at ${x}px ${y}px, rgb(var(--accent) / 0.2), transparent 70%)`;
  return (
    <div
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set(e.clientX - r.left); y.set(e.clientY - r.top); }}
      className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_20px_50px_-20px_rgb(var(--accent)/0.5)] ${className}`}
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
