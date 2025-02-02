"use client";

import { PaginationWeeks } from "@/components/paginator-week";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PaginationWeeks />
      {children}
    </>
  );
}
