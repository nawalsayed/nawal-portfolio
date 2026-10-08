"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import Spotlight from "./Spotlight";
import { experience, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

export default function Experience() {
  const { t } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  return (
    <Section id="experience" title={t(ui.nav.experience)}>
      <div ref={ref} className="relative ps-8 md:ps-12">
        <span aria-hidden className="absolute inset-y-0 start-0 w-px bg-line" />
        <motion.span aria-hidden style={{ scaleY: scrollYProgress }} className="absolute inset-y-0 start-0 w-px origin-top bg-gradient-to-b from-accent to-accent2" />
        {experience.map((job, i) => (
          <Reveal key={i}>
            <span aria-hidden className="absolute -start-[5px] top-8 h-[11px] w-[11px] rounded-full bg-accent2 shadow-[0_0_0_6px_rgb(var(--accent2)/0.2)]" />
            <Spotlight className="p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{t(job.title)} <span className="text-accent">@ {job.company}</span></h3>
                <p className="text-sm text-muted">{t(job.period)}</p>
              </div>
              <ul className="mt-5 grid gap-3 text-muted">
                {job.points.map((p, j) => (
                  <motion.li key={j} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + j * 0.07 }} className="flex gap-3 rtl:[&>svg]:-scale-x-100">
                    <svg aria-hidden viewBox="0 0 20 20" className="mt-1.5 h-4 w-4 shrink-0 fill-none stroke-mint" strokeWidth="2.5"><path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span>{t(p)}</span>
                  </motion.li>
                ))}
              </ul>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
