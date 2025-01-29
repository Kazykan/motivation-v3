import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  className?: string;
  parent: boolean;
}

export const InviteLink: React.FC<Props> = ({ className, parent }) => {
  return (
    <Link
      className={cn(className)}
      href={`https://t.me/share/url?text=Привет как дела&url=https://t.me/${process.env.TELEGRAM_BOT_NAME}?startapp=172383_parent`}
    >
      <Button>Приглашение {parent ? "родителя" : "ребенка"}</Button>
    </Link>
  );
};
