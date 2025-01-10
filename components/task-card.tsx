import React from "react";
import { cn } from "@/lib/utils";
import { IWeekdays, ToggleGroupCalendar } from "./toggle-calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarCheck } from "lucide-react";

interface Props {
  className?: string;
  title: string;
  description: string;
  weekdays_need: IWeekdays[];
  sum?: string;
}

export const TaskCard: React.FC<Props> = ({ className, title, description, weekdays_need, sum }) => {
  return (
    <Card className={cn(className, "ml-1.5  w-full h-[160px]  shadow-sm  rounded-3xl")}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-lg truncate mr-7">{title}</div>
            <div>
              <CalendarCheck className="text-muted-foreground w-5 h-5" />
            </div>
          </div>
        </CardTitle>
        <CardDescription>
          <span className="truncate">{description}</span> <span className="font-bold">·</span>{" "}
          <span className="font-bold">{sum} ₽ </span>
          <span className="text-opacity-20">/150 ₽</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="m-0 mt-4 justify-start">
          <ToggleGroupCalendar weekdays_need={weekdays_need} />
        </div>
      </CardContent>
    </Card>
  );
};
