"use client";

import { getRoleName, payloadRole } from "@/lib/jwt";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AddParentForm } from "./form/add-parent-form";

const CheckTelegramUser: React.FC = () => {
  const searchParams = useSearchParams();
  const telegramStartParams = searchParams.get("telegram");

  const [role, setRole] = React.useState<payloadRole | null>(null);
  const [inviterTelegramId, setInviterTelegramId] = React.useState<number | null>(null);
  const [showRegistration, setShowRegistration] = React.useState(false);

  React.useEffect(() => {
    const telegramStartParams = searchParams.get("telegramStartParams");

    if (telegramStartParams) {
      try {
        const [role, inviterTelegramId] = telegramStartParams.split("_");
        if (role && inviterTelegramId) {
          setRole(role === "child" ? payloadRole.child : payloadRole.parent);
          setInviterTelegramId(Number(inviterTelegramId));
          setShowRegistration(true);
        }
      } catch (error) {
        console.error("Error parsing telegramStartParams: ", error);
        setShowRegistration(false);
      }
    }
  }, [searchParams]);

  return (
    <div>
      <pre>{telegramStartParams}</pre>
      {showRegistration ? (
        <div>
          Вас пригласил {inviterTelegramId} на роль {getRoleName(role)}
          <AddParentForm tgParentId={15613131} tgUserName={"Леха"} tgInviteId={inviterTelegramId} />
        </div>
      ) : (
        <div>Вас никто не приглашал</div>
      )}
    </div>
  );
};

export default CheckTelegramUser;
