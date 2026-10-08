"use client";

import { profile, ui } from "@/data/portfolio";
import { useLocale } from "@/lib/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-line py-8 text-sm text-muted" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}>
      <div className="mx-auto max-w-5xl px-5">© {new Date().getFullYear()} {t(profile.name)}. {t(ui.rights)}</div>
    </footer>
  );
}
