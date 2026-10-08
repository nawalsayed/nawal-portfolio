import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import LocaleProvider from "@/lib/LocaleProvider";
import "./globals.css";

const font = IBM_Plex_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "600", "700"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Nawal Sayed Ahmed | Frontend Developer",
  description: "Portfolio of Nawal Sayed Ahmed, Frontend Developer specializing in React.js and Next.js.",
  openGraph: { title: "Nawal Sayed Ahmed | Frontend Developer", description: "React.js & Next.js developer based in Cairo, Egypt.", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={font.variable} suppressHydrationWarning>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
