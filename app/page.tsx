import React from "react";
import { redirect } from "next/navigation";
import { handleTelegramAuth } from "@/lib/auth";
import { useTelegramAuth } from "@/hooks/useTelegramAuth";
import { payloadRole } from "@/lib/jwt";
import { checkToken } from "@/lib/auth-token";

export default function Home() {
  const { telegramUser, loading } = useTelegramAuth();

  React.useEffect(() => {
    async function checkRole() {
      const payload = await checkToken();
      if (payload) {
        if (payload.role === payloadRole.parent) {
          redirect("/parent/task");
        }
        if (payload.role === payloadRole.child) {
          redirect("/child/task");
        }
      }
    }
    checkRole();
  }, [telegramUser]);

  if (telegramUser) {
    handleTelegramAuth(telegramUser);
  }

  if (!telegramUser || loading) {
    return <p>Loading...</p>;
  }

  return null;
}
