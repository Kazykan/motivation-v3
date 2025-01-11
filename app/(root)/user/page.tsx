'use client'

import { TelegramUser } from "@/@types/telegram";
import React, { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const webApp = window.Telegram.WebApp;
      setTelegramUser(webApp.initDataUnsafe?.user || null);
    }
  }, []);

  if (!telegramUser) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Telegram ID: {telegramUser.id}</p>
      <p>Telegram User Name: {telegramUser.username || "N/A"}</p>
      <p>First Name: {telegramUser.first_name || "N/A"}</p>
      <p>Last Name: {telegramUser.last_name || "N/A"}</p>
      {/* ... */}
    </div>
  );
};

export default MyComponent;
