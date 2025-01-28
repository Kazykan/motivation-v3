"use client";

import React from "react";
import CheckTelegramId from "@/components/checkTelegramId";
import { useTelegramUserState } from "@/lib/store/telegram-user";
import useTelegramUser from "@/hooks/useTelegramUser";
import { getDisplayName } from "@/lib";

const CheckTelegramUser: React.FC = () => {
  const setTelegramId = useTelegramUserState((state) => state.setTelegramId);
  const setName = useTelegramUserState((state) => state.setName);
  const setPhotoUrl = useTelegramUserState((state) => state.setPhotoUrl);

  const { telegramUser, telegramStartParams } = useTelegramUser();

  if (!telegramUser) {
    return <p>Ошибка: Не удалось получить данные пользователя Telegram.</p>;
  }

  setTelegramId(telegramUser.id);
  setName(getDisplayName(telegramUser));
  setPhotoUrl(telegramUser.photo_url);

  return (
    <div>
      <CheckTelegramId telegramStartParams={telegramStartParams} telegramId={telegramUser.id} />
    </div>
  );
};

export default CheckTelegramUser;
