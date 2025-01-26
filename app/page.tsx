import CheckTelegramUser from "@/components/check-telegram-user";
import { Header } from "@/components/header";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<div>Загрузка...</div>}>
      <CheckTelegramUser />
    </Suspense>
    </main>
  );
}
