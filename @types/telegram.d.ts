export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe: {
    user?: TelegramUser;
    chat?: {
      id: number;
      type: "private" | "group" | "supergroup" | "channel";
      title: string;
      username?: string;
      photo_url?: string;
    };
    start_param: string;
    version: string;
    platform: "ios" | "android" | "web";
    theme_params: {
      bg_color: string;
      text_color: string;
      hint_color: string;
      link_color: string;
      button_color: string;
      button_text_color: string;
      secondary_bg_color: string;
    };
  };
  // Другие методы и свойства
  ready: () => void;
  expand: () => void;
  close: () => void;
  sendData: (string) => void;
  // и т.д.
}

declare global {
  interface Window {
    Telegram?: {
      WebApp?: TelegramWebApp;
    };
  }
}
