import React from "react";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ChildUser } from "@/prisma/prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  className?: string;
  childrenData: ChildUser[];
}

export const ChildSelect: React.FC<Props> = ({ className, childrenData }) => {
  const [value, setValue] = React.useState<string | null>(
    childrenData.length > 0 ? childrenData[0].id.toString() : null
  );

  if (childrenData.length === 0) {
    return <div className={cn(className)}>No childrenData found.</div>;
  }

  if (childrenData.length === 1) {
    return (
      <div className={cn(className)}>
        <div className="flex items-center">
          <Avatar className="h-6 w-6">
            <AvatarImage src={childrenData[0].photo_url ?? undefined} alt={childrenData[0].name} />
            <AvatarFallback>{childrenData[0].name.toUpperCase().slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="ml-3">{childrenData[0].name}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(className)}>
      {childrenData.length > 1 ? (
        <Select value={value as string | undefined} onValueChange={setValue}>
          <SelectTrigger className="w-[230px] mb-1">
            <SelectValue placeholder={childrenData[0].name} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {childrenData.map((child) => {
                return (
                  <SelectItem key={child.id} value={child.id.toString()}>
                    <div className="flex items-center">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={child.photo_url ?? undefined} alt={child.name} />
                        <AvatarFallback>{child.name.toUpperCase().slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">{child.name}</div>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      ) : (
        "Error"
      )}
    </div>
  );
};
