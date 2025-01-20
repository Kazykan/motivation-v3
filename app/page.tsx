import { Header } from "@/components/header";
import { PaginationWeeks } from "@/components/paginator-week";
import { TestCard } from "@/components/test-card";
import { TaskType } from "@prisma/client";

export default function Home() {
  return (
    <main>
      <Header />
      <PaginationWeeks />
    </main>
  );
}
