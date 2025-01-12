import { TelegramUser } from "@/@types/telegram";
import React from "react";
import { handleTelegramAuth } from "@/lib/auth";

export const useTelegramAuth = () => {
  const [telegramUser, setTelegramUser] = React.useState<TelegramUser | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const initializeTelegram = () => {
      if (typeof window !== "undefined" && window.Telegram && window.Telegram.WebApp) {
        const webApp = window.Telegram.WebApp;
        const user = webApp.initDataUnsafe?.user || null;
        setTelegramUser(user);
        if (user) {
          handleTelegramAuth(user);
        }
        setLoading(false);
      } else {
        setLoading(false);
      }
    };
    initializeTelegram();
  }, []);

  return { telegramUser, loading };
};
