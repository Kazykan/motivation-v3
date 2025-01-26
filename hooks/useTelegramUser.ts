import { TelegramUser } from "@/@types/telegram";
import { useState, useEffect } from "react";

interface UseTelegramUserReturn {
  telegramUser: TelegramUser | null;
  telegramStartParams: string | null;
}

function useTelegramUser(): UseTelegramUserReturn {
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);
  const [telegramStartParams, setTelegramStartParams] = useState<string | null>(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;
      setTelegramUser(webApp.initDataUnsafe?.user || null);
      setTelegramStartParams(webApp.initDataUnsafe?.start_param || null);
    }
  }, []);

  return { telegramUser, telegramStartParams };
}

export default useTelegramUser;
