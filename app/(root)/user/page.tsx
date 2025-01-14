"use client";

import React from "react";
import useTelegramUser from "@/hooks/useTelegramUser";
import useUserCheckAndNavigation from "@/hooks/useUserCheckAndNavigation";

const MyComponent: React.FC = () => {
  const telegramUser = useTelegramUser();
  const isLoading = useUserCheckAndNavigation(telegramUser?.id || null);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!telegramUser) {
    return <p>Ошибка: Не удалось получить данные пользователя Telegram.</p>;
  }

  return null;
};

export default MyComponent;
