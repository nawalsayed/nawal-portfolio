"use client";

import Reveal from "./Reveal";
import Section from "./Section";
import { profile, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

export default function About() {
  const { t } = useLocale();
  return (
    <Section id="about" title={t(ui.nav.about)}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg text-muted">
          {profile.about.map((p, i) => <Reveal key={i} delay={i * 0.1}><p>{t(p)}</p></Reveal>)}
        </div>
        <Reveal delay={0.2}>
          <dl className="space-y-4 rounded-2xl border border-line bg-surface/60 p-6">
            {[["📍", profile.location], ["💻", profile.roles[0]], ["🌐", { en: "Arabic · English", ar: "العربية · الإنجليزية" }]].map(([icon, v], i) => (
              <div key={i} className="flex items-center gap-3"><span aria-hidden>{icon as string}</span><dd>{t(v as { en: string; ar: string })}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
