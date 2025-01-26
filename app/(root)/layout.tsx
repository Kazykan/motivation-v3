"use client";

import { Header } from "@/components/header";
import { PaginationWeeks } from "@/components/paginator-week";
import { QueryProvider } from "../queryProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <QueryProvider>
        <PaginationWeeks />
        {children}
      </QueryProvider>
    </main>
  );
}
