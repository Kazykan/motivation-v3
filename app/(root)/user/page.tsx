"use client";

import React from "react";
import useTelegramUser from "@/hooks/useTelegramUser";
import CheckTelegramId from "@/components/checkTelegramId";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const CheckTelegramUser: React.FC = () => {
  const telegramUser = useTelegramUser();

  if (!telegramUser) {
    return <p>Ошибка: Не удалось получить данные пользователя Telegram.</p>;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <CheckTelegramId telegramId={telegramUser.id} />;
    </QueryClientProvider>
  );
};

export default CheckTelegramUser;
