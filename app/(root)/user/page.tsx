"use client";

import React from "react";
import useTelegramUser from "@/hooks/useTelegramUser";
import CheckTelegramId from "@/components/checkTelegramId";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CheckTelegramUser: React.FC = () => {
  const { telegramUser, telegramStartParams } = useTelegramUser();

  if (!telegramUser) {
    return <p>Ошибка: Не удалось получить данные пользователя Telegram.</p>;
  }


  
  return (
    <div>
      <pre>{JSON.stringify(telegramStartParams)}</pre>
      <Avatar className="h-8 w-8">
        <AvatarImage src={telegramUser.photo_url} alt="@shadcn" />
        <AvatarFallback>{telegramUser.first_name?.toUpperCase().slice(0, 2)}</AvatarFallback>
      </Avatar>
      <CheckTelegramId telegramStartParams={telegramStartParams} telegramId={telegramUser.id} />
    </div>
  );
};

export default CheckTelegramUser;
