"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ease } from "@/lib/motion";

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="mb-12 flex items-center gap-5 overflow-hidden">
        <motion.h2 initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease }} className="pb-1 text-3xl font-bold tracking-tight sm:text-4xl rtl:tracking-normal">
          {title}
        </motion.h2>
        <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease }} className="h-px flex-1 origin-left bg-gradient-to-r from-accent/70 to-transparent rtl:origin-right rtl:bg-gradient-to-l" />
      </div>
      {children}
    </section>
  );
}
