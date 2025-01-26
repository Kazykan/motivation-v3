import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { QueryProvider } from "./queryProvider";
import { Toaster } from "@/components/ui/toaster";

const jost = Jost({
  subsets: ["cyrillic"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Motivation v3",
  description: "Motivation for Morgulan Sesenbaev",
};

export default function RootLayout({ children }: React.PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js?56" strategy="beforeInteractive" />
      </head>
      <body className={jost.variable}>
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
