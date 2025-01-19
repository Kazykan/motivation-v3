"use client";

import { Header } from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <main>
      <QueryClientProvider client={queryClient}>
        <Header />
        {children}
      </QueryClientProvider>
    </main>
  );
}
