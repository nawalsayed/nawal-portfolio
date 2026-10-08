"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import { profile, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

export default function Contact() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface/70 p-8 text-center backdrop-blur md:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 start-1/4 h-64 w-64 animate-blob rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-24 end-1/4 h-64 w-64 animate-blob rounded-full bg-accent2/20 blur-3xl [animation-delay:-5s]" />
          </div>
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl rtl:tracking-normal">{t(ui.contactTitle)}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{t(ui.contactText)}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="rounded-xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 font-semibold text-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-10px_rgb(var(--accent)/0.9)]">{profile.email}</a>
              <button type="button" onClick={copy} className="relative min-w-[8.5rem] overflow-hidden rounded-xl border border-line px-6 py-3 font-semibold transition-colors hover:border-accent">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={String(copied)} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} transition={{ duration: 0.2 }} className={`block ${copied ? "text-mint" : ""}`}>{t(copied ? ui.copied : ui.copy)}</motion.span>
                </AnimatePresence>
              </button>
            </div>
            <div className="mt-8 flex justify-center gap-6 font-semibold text-muted">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">LinkedIn</a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
