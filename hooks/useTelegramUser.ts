"use client";

import { TelegramUser } from "@/@types/telegram";
import { useState, useEffect } from "react";

interface UseTelegramUserReturn {
  telegramUser: TelegramUser | null;
  telegramStartParams: string | null;
  isLoading: boolean;
}

function useTelegramUser(): UseTelegramUserReturn {
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [telegramStartParams, setTelegramStartParams] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;
      setTelegramUser(webApp.initDataUnsafe?.user || null);
      setTelegramStartParams(webApp.initDataUnsafe?.start_param || null);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.error("Telegram WebApp is not available");
    }
  }, []);

  return { telegramUser, telegramStartParams, isLoading };
}

export default useTelegramUser;
