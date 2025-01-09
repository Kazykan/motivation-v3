import type { Metadata } from "next"
import { Jost } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const jost = Jost({
  subsets: ["cyrillic"],
  variable: "--font-jost",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Motivation v3",
  description: "Motivation for Morgulan Sesenbaev",
}

export default function RootLayout({
  children,
}: React.PropsWithChildren<unknown>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={jost.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
