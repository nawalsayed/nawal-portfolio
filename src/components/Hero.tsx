"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";
import { ease } from "@/lib/motion";

const rise = (i: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.5 + i * 0.1, ease } });
const btn = "rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 active:translate-y-0";

export default function Hero() {
  const { t, locale } = useLocale();
  const [i, setI] = useState(0);
  useEffect(() => { const id = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2800); return () => clearInterval(id); }, []);

  const mx = useMotionValue(0), my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 14 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 120, damping: 14 });

  return (
    <div id="top" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0" />
        <div className="absolute -top-20 start-[8%] h-80 w-80 animate-blob rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute bottom-0 end-[6%] h-96 w-96 animate-blob rounded-full bg-accent2/20 blur-3xl [animation-delay:-6s]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p {...rise(0)} className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm font-semibold text-mint backdrop-blur">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" /><span className="relative h-2.5 w-2.5 rounded-full bg-mint" /></span>
            {t(profile.availability)}
          </motion.p>

          <h1 className="text-5xl font-bold leading-[1.15] tracking-tight sm:text-7xl rtl:tracking-normal">
            {t(profile.name).split(" ").map((w, k) => (
              <span key={w + k} className="me-4 inline-block overflow-hidden pb-2 align-bottom">
                <motion.span className="inline-block bg-gradient-to-br from-ink via-ink to-accent2 bg-clip-text text-transparent" initial={{ y: "115%", rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.9, delay: 0.15 + k * 0.12, ease }}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <motion.div {...rise(0)} className="mt-4 h-10 overflow-hidden text-2xl font-semibold text-accent">
            <AnimatePresence mode="wait">
              <motion.p key={`${locale}${i}`} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.4, ease }}>{t(profile.roles[i])}</motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p {...rise(1)} className="mt-5 max-w-xl text-lg text-muted">{t(profile.lead)}</motion.p>

          <motion.div {...rise(2)} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className={`${btn} bg-gradient-to-r from-accent to-accent2 text-bg shadow-[0_10px_30px_-10px_rgb(var(--accent)/0.8)] hover:shadow-[0_16px_40px_-10px_rgb(var(--accent)/0.9)]`}>{t(ui.viewProjects)}</a>
            <a href={profile.cv} download className={`${btn} border border-line bg-surface/60 backdrop-blur hover:border-accent`}>{t(ui.downloadCv)}</a>
          </motion.div>
          <motion.div {...rise(3)} className="mt-6 flex gap-6 text-sm font-semibold text-muted">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">LinkedIn</a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="hidden lg:block" style={{ perspective: 1000 }}
          onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5); }}
          onMouseLeave={() => { mx.set(0); my.set(0); }}>
          <div className="animate-float">
            <motion.div dir="ltr" aria-hidden style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="overflow-hidden rounded-2xl border border-line bg-surface/80 text-left shadow-[0_30px_80px_-30px_rgb(var(--accent)/0.6)] backdrop-blur-xl">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <i className="h-3 w-3 rounded-full bg-[#ff5f57]" /><i className="h-3 w-3 rounded-full bg-[#febc2e]" /><i className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ms-3 text-xs text-muted">nawal.tsx</span>
              </div>
              <pre className="p-6 font-mono text-[13px] leading-7 text-muted">
{`const `}<b className="text-accent">nawal</b>{` = {
  role: `}<span className="text-mint">&quot;Frontend Developer&quot;</span>{`,
  stack: [`}<span className="text-mint">&quot;React&quot;</span>{`, `}<span className="text-mint">&quot;Next.js&quot;</span>{`,
          `}<span className="text-mint">&quot;TypeScript&quot;</span>{`],
  languages: [`}<span className="text-mint">&quot;ar&quot;</span>{`, `}<span className="text-mint">&quot;en&quot;</span>{`],
  openToWork: `}<b className="text-accent2">true</b>{`,
};`}
              </pre>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a href="#about" aria-label="Scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-6 start-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-muted/50 pt-2 md:flex">
        <span className="h-2 w-1 animate-scroll rounded-full bg-accent2" />
      </motion.a>
    </div>
  );
}
