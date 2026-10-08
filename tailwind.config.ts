import type { Config } from "tailwindcss";

const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: c("bg"), surface: c("surface"), ink: c("ink"), muted: c("muted"), line: c("line"), accent: c("accent"), accent2: c("accent2"), mint: c("mint"), chip: c("chip") },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "Segoe UI", "Tahoma", "sans-serif"] },
      keyframes: {
        blob: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(40px,-30px) scale(1.12)" }, "66%": { transform: "translate(-30px,25px) scale(.92)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        scroll: { "0%": { transform: "translateY(0)", opacity: "1" }, "100%": { transform: "translateY(12px)", opacity: "0" } },
      },
      animation: { blob: "blob 14s ease-in-out infinite", float: "float 6s ease-in-out infinite", marquee: "marquee 32s linear infinite", scroll: "scroll 1.6s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
