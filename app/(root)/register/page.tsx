"use client";

import CheckTelegramUser from "@/components/check-telegram-user";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CheckTelegramUser />
      <Link href="https://t.me/share/url?text=Привет как дела&url=https://t.me/WeatherKazykanBot/appname?startapp=child_172383">
        <Button>Приглашение</Button>
      </Link>
    </Suspense>
  );
}
