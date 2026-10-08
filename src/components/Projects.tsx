"use client";

import Reveal from "./Reveal";
import Section from "./Section";
import Spotlight from "./Spotlight";
import { projects, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

const Arrow = () => (
  <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 fill-none stroke-current transition-transform duration-300 group-hover/l:translate-x-1 rtl:-scale-x-100 rtl:group-hover/l:-translate-x-1" strokeWidth="2"><path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export default function Projects() {
  const { t } = useLocale();
  return (
    <Section id="projects" title={t(ui.nav.projects)}>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={i} delay={(i % 2) * 0.1} className={i === 0 ? "md:col-span-2" : ""}>
            <Spotlight className="h-full">
              <div aria-hidden className={`relative overflow-hidden border-b border-line bg-gradient-to-br from-accent/25 via-chip to-accent2/20 ${i === 0 ? "h-52" : "h-40"}`}>
                <div className="dot-grid absolute inset-0 opacity-70" />
                <span className="absolute bottom-3 start-5 text-5xl font-bold tracking-tight text-ink/10 transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink/20">{t(p.title).split(" ")[0]}</span>
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold">{t(p.title)}</h3>
                <p className="my-3 max-w-2xl text-muted">{t(p.desc)}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.stack.map((s) => <li key={s} className="rounded-md border border-line bg-chip px-2.5 py-0.5 text-sm font-semibold transition-colors group-hover:border-accent/40">{s}</li>)}
                </ul>
                <div className="mt-6 flex gap-6 font-semibold text-accent">
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-2 hover:text-accent2">{t(ui.code)} <Arrow /></a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="group/l inline-flex items-center gap-2 hover:text-accent2">{t(ui.live)} <Arrow /></a>}
                </div>
              </div>
            </Spotlight>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
