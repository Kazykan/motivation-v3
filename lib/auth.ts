import { TelegramUser } from "@/@types/telegram";
import { redirect } from "next/navigation";
import { generateToken, payloadRole } from "@/lib/jwt";
import { checkChildTelegramId, checkParentTelegramId } from "@/app/actions";

export async function handleTelegramAuth(telegramUser: TelegramUser) {
  const child = await checkChildTelegramId(telegramUser.id);
  const parent = await checkParentTelegramId(telegramUser.id);

  if (child) {
    const token = await generateToken({ telegramId: telegramUser.id, role: payloadRole.child });
    redirect(`/child/task?token=${token}`);
  }

  if (parent) {
    const token = await generateToken({ telegramId: telegramUser.id, role: payloadRole.parent });
    redirect(`/parent/task?token=${token}`);
  }

  redirect("/register");
}
