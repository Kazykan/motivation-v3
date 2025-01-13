import { TelegramUser } from "@/@types/telegram";
import { useState, useEffect } from "react";

function useTelegramUser(): TelegramUser | null {
    const [telegramUser, setTelegramUser] = useState<TelegramUser | null>(null);

    useEffect(() => {
        if (window.Telegram && window.Telegram.WebApp) {
            const webApp = window.Telegram.WebApp;
            setTelegramUser(webApp.initDataUnsafe?.user || null);
        }
    }, []);

    return telegramUser;
}

export default useTelegramUser