"use client";

import { Header } from "@/components/header";
import { PaginationWeeks } from "@/components/paginator-week";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Header />
        <PaginationWeeks />
        {children}
      </QueryClientProvider>
    </main>
  );
}
