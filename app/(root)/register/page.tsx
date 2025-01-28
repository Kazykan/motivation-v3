"use client";

import CheckTelegramUser from "@/components/check-telegram-user";
import React, { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <CheckTelegramUser />
    </Suspense>
  );
}
