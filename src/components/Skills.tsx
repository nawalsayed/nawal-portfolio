"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Section from "./Section";
import Spotlight from "./Spotlight";
import { skills, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

const all = Array.from(new Set(skills.flatMap((g) => g.items)));

export default function Skills() {
  const { t } = useLocale();
  return (
    <Section id="skills" title={t(ui.nav.skills)}>
      <Reveal>
        <div dir="ltr" aria-hidden className="group mb-10 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
            {[...all, ...all].map((s, i) => <span key={i} className="whitespace-nowrap rounded-full border border-line bg-surface/70 px-5 py-2 font-semibold text-muted transition-colors hover:border-accent hover:text-ink">{s}</span>)}
          </div>
        </div>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <Spotlight className="h-full p-6">
              <h3 className="mb-4 font-semibold">{t(g.label)}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s, j) => (
                  <motion.li key={s} whileHover={{ y: -3, scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 18 }} className="cursor-default rounded-md border border-line bg-chip px-2.5 py-0.5 text-sm font-semibold text-muted hover:border-accent/50 hover:text-ink">{s}</motion.li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
