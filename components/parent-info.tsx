import React from "react";
import { cn } from "@/lib/utils";
import { useParentCheck } from "@/hooks/useParent";
import { Skeleton } from "./ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  inviterTelegramId: number;
  className?: string;
}

export const ParentInfo: React.FC<Props> = ({ className, inviterTelegramId }) => {
  const parent = useParentCheck(inviterTelegramId);

  if (parent.isLoading) {
    return <Skeleton className="h-4 w-[200px]" />;
  }

  return (
    parent.data &&
    parent.data.parentUser && (
      <div className={cn(className)}>
        <Avatar className="h-6 w-6 mr-1">
          <AvatarImage src={parent.data.parentUser.photo_url ?? undefined} alt={parent.data.parentUser.name} />
          <AvatarFallback>{parent.data.parentUser.name.toUpperCase().slice(0, 2)}</AvatarFallback>
        </Avatar>
        {parent.data.parentUser.name}
      </div>
    )
  );
};
