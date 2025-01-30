import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import { Baby, User } from "lucide-react";

interface Props {
  className?: string;
  parent: boolean;
  telegram_id: number | undefined;
  name: string;
}

export const InviteLink: React.FC<Props> = ({ className, parent, name, telegram_id }) => {
  return (
    <Link
      className={cn(className)}
      href={`https://t.me/share/url?text=Привет! ${name} приглашает тебя в приложение Motivation v3 в роли ${
        parent ? "родителя" : "ребенка"
      }&url=https://t.me/${process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME}?startapp=${telegram_id}_${
        parent ? "parent" : "child"
      }`}
    >
      <Button variant="outline">
        {parent ? <User size={20} /> : <Baby size={20} />}
        {parent ? "родителя" : "ребенка"}
      </Button>
    </Link>
  );
};
