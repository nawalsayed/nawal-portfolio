"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { L } from "@/data/portfolio";

type Locale = "en" | "ar";
type Ctx = { locale: Locale; t: (l: L) => string; toggle: () => void };

const LocaleContext = createContext<Ctx>({ locale: "en", t: (l) => l.en, toggle: () => {} });
export const useLocale = () => useContext(LocaleContext);

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    try {
      if (localStorage.getItem("locale") === "ar") setLocale("ar");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    try {
      localStorage.setItem("locale", locale);
    } catch {}
  }, [locale]);

  const toggle = useCallback(() => setLocale((p) => (p === "en" ? "ar" : "en")), []);
  const t = useCallback((l: L) => l[locale], [locale]);

  return (
    <LocaleContext.Provider value={{ locale, t, toggle }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LocaleContext.Provider>
  );
}
