"use client";

import { Header } from "@/components/header";
import { QueryProvider } from "../queryProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <QueryProvider>
        {children}
      </QueryProvider>
    </main>
  );
}
