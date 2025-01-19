"use client";

import React from "react";
import useTelegramUser from "@/hooks/useTelegramUser";
import CheckTelegramId from "@/components/checkTelegramId";

const CheckTelegramUser: React.FC = () => {
  const telegramUser = useTelegramUser();

  if (!telegramUser) {
    return <p>Ошибка: Не удалось получить данные пользователя Telegram.</p>;
  }
  return (

      <CheckTelegramId telegramId={telegramUser.id} />

  );
};

export default CheckTelegramUser;
