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

  return null; // компонент больше ничего не отображает
};

export default MyComponent;

// 'use client'

// import { TelegramUser } from "@/@types/telegram";
// import React, { useEffect, useState } from "react";

// const MyComponent: React.FC = () => {
//   const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);

//   useEffect(() => {
//     if (window.Telegram && window.Telegram.WebApp) {
//       const webApp = window.Telegram.WebApp;
//       setTelegramUser(webApp.initDataUnsafe?.user || null);
//     }
//   }, []);

//   if (!telegramUser) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <p>Telegram ID: {telegramUser.id}</p>
//       <p>Telegram User Name: {telegramUser.username || "N/A"}</p>
//       <p>First Name: {telegramUser.first_name || "N/A"}</p>
//       <p>Last Name: {telegramUser.last_name || "N/A"}</p>
//       {/* ... */}
//     </div>
//   );
// };

// export default MyComponent;
