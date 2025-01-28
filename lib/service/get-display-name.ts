import { TelegramUser } from "@/@types/telegram";

export function getDisplayName(user: TelegramUser): string {
  const { first_name, last_name, username } = user;

  if (first_name && last_name) {
    return `${first_name} ${last_name}`;
  }

  if (first_name) {
    return first_name;
  }

  if (last_name) {
    return last_name;
  }

  if (username) {
    return `@${username}`;
  }

  return "Пользователь без имени";
}
