import React from "react";
import { cn } from "@/lib/utils";
import { ToggleGroupCalendar } from "./toggle-calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarCheck, Move } from "lucide-react";
import { IWeekdays } from "@/lib/types";
import { currencyFormatMoney } from "@/lib";
import { TaskType } from "@/prisma/prisma/client";

interface Props {
  className?: string;
  totalEarn: number;
  child_id: number;
  task_id: number;
  title: string;
  description: string;
  weekdays_need?: IWeekdays[];
  taskType: TaskType;
  countTaskCompletionDone: number
  frequency?: number;
  sum: number;
}

export const TaskCard: React.FC<Props> = ({
  className,
  countTaskCompletionDone,
  frequency,
  totalEarn,
  child_id,
  task_id,
  title,
  description,
  weekdays_need,
  sum,
  taskType,
}) => {
  const taskTypeToRu = taskType === TaskType.FLEXIBLE ? "гибкие" : "регулярные";

  return (
    <Card className={cn(className, "ml-1.5  w-full h-[160px]  shadow-sm  rounded-3xl")}>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-lg truncate mr-7">{title}</div>
            <div className="flex items-center">
              <span className="hidden md:block font-normal mr-2">{taskTypeToRu}</span>
              {taskType === TaskType.FLEXIBLE ? (
                <Move className="text-muted-foreground w-5 h-5" />
              ) : (
                <CalendarCheck className="text-muted-foreground w-5 h-5" />
              )}
            </div>
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between">

          <span className="truncate inline-flex items-center">
            <span className="hidden md:block mr-1.5">
              {description} <span className="font-bold">·</span>
            </span>
            <span className="font-bold text-base">{currencyFormatMoney(totalEarn)}</span>
            <span className="text-opacity-20 text-xs">/{currencyFormatMoney(sum)}</span>
          </span>
          <span>{countTaskCompletionDone}/{frequency}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="m-0 mt-4 justify-start">
          <ToggleGroupCalendar child_id={child_id} task_id={task_id} weekdays_need={weekdays_need} />
        </div>
      </CardContent>
    </Card>
  );
};
