"use client";

import { getRoleName, payloadRole } from "@/lib/jwt";
import { useSearchParams } from "next/navigation";
import React from "react";
import { AddParentForm } from "./form/add-parent-form";
import { AddChildForm } from "./form/add-child-form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useTelegramUserState } from "@/lib/store/telegram-user";
import { CarouselCard } from "./carousel-card";
import { ChildDescriptions, ChildImages, ParentDescriptions, ParentImages } from "@/lib/constants";

const CheckTelegramUser: React.FC = () => {
  const searchParams = useSearchParams();
  const [role, setRole] = React.useState<payloadRole | null>(null);
  const [useRole, setUseRole] = React.useState<payloadRole | null>(null);
  const [inviterTelegramId, setInviterTelegramId] = React.useState<number | null>(null);
  const [showRegistration, setShowRegistration] = React.useState(false);
  const telegramId = useTelegramUserState((state) => state.telegram_id);
  const name = useTelegramUserState((state) => state.name);
  const photoUrl = useTelegramUserState((state) => state.photo_url);
  const [welcome, setWelcome] = React.useState(true);

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

  const handleRoleChange = (value: string) => {
    setUseRole(value === "parent" ? payloadRole.parent : payloadRole.child);
  };

  return (
    telegramId !== undefined &&
    name !== undefined && (
      <div className="m-5">
        <h2 className="mb-5">регистрация</h2>
        {showRegistration && inviterTelegramId ? (
          role === payloadRole.parent ? (
            <div>
              {welcome ? (
                <CarouselCard images={ParentImages} descriptions={ParentDescriptions} setWelcome={setWelcome} />
              ) : (
                <>
                  Вас пригласил {inviterTelegramId} на роль {getRoleName(role)}
                  <AddParentForm
                    photo_url={photoUrl}
                    tgParentId={telegramId}
                    tgUserName={name}
                    tgInviteId={inviterTelegramId}
                  />
                </>
              )}
            </div>
          ) : (
            <div>
              {welcome ? (
                <CarouselCard images={ChildImages} descriptions={ChildDescriptions} setWelcome={setWelcome} />
              ) : (
                <>
                  Вас пригласил {inviterTelegramId} на роль {getRoleName(role)}
                  <AddChildForm
                    photo_url={photoUrl}
                    tgParentId={telegramId}
                    tgUserName={name}
                    tgInviteId={inviterTelegramId}
                  />
                </>
              )}
            </div>
          )
        ) : (
          <div>
            <RadioGroup onValueChange={handleRoleChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="parent" id="parent" />
                <Label htmlFor="parent">Родитель</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="child" id="child" />
                <Label htmlFor="child">Ребенок</Label>
              </div>
            </RadioGroup>
            {useRole === payloadRole.parent &&
              (welcome ? (
                <CarouselCard images={ParentImages} descriptions={ParentDescriptions} setWelcome={setWelcome} />
              ) : (
                <AddParentForm photo_url={photoUrl} tgParentId={telegramId} tgUserName={name} />
              ))}
            {useRole === payloadRole.child &&
              (welcome ? (
                <CarouselCard images={ChildImages} descriptions={ChildDescriptions} setWelcome={setWelcome} />
              ) : (
                <AddChildForm photo_url={photoUrl} tgParentId={telegramId} tgUserName={name} />
              ))}
          </div>
        )}
      </div>
    )
  );
};

export default CheckTelegramUser;
