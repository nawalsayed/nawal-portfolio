"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { profile, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

const links = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Header() {
  const { t, toggle } = useLocale();
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (v) => setHidden(v > (scrollY.getPrevious() ?? 0) && v > 140 && !open));

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((k) => { const el = document.getElementById(k); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <motion.header animate={{ y: hidden ? "-100%" : 0 }} transition={{ duration: 0.35 }} className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-bg/70 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent2 text-sm text-bg">N</span>
          <span className="hidden sm:inline">{t(profile.name)}</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-1">
          {links.map((k) => (
            <a key={k} href={`#${k}`} className={`relative hidden rounded-full px-3.5 py-1.5 text-sm transition-colors md:inline ${active === k ? "text-ink" : "text-muted hover:text-ink"}`}>
              {active === k && <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-full bg-chip" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              {t(ui.nav[k])}
            </a>
          ))}
          <button onClick={toggle} type="button" className="ms-2 rounded-full border border-accent/70 px-4 py-1.5 text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-bg">
            {t(ui.switchTo)}
          </button>
          <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="ms-2 grid h-9 w-9 place-items-center rounded-lg border border-line md:hidden">
            <span className="relative block h-3 w-4">
              <span className={`absolute inset-x-0 h-0.5 rounded bg-ink transition-all duration-300 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
              <span className={`absolute inset-x-0 top-1/2 h-0.5 rounded bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute inset-x-0 h-0.5 rounded bg-ink transition-all duration-300 ${open ? "top-1/2 -rotate-45" : "bottom-0"}`} />
            </span>
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line md:hidden">
            <div className="flex flex-col px-5 py-3">
              {links.map((k) => <a key={k} href={`#${k}`} onClick={() => setOpen(false)} className="py-2.5 text-muted hover:text-ink">{t(ui.nav[k])}</a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-accent to-accent2 rtl:origin-right" />
    </motion.header>
  );
}
