import { Header } from "@/components/header";
import { PaginationWeeks } from "@/components/paginator-week";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <PaginationWeeks />
      <Link href="https://t.me/share/url?text=Привет как дела&url=https://t.me/tukui_bot/app?startapp=172383_child">
        <Button>Приглашение</Button>
      </Link>
    </main>
  );
}
