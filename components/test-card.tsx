import React from "react";
import { cn } from "@/lib/utils";
import { FilePenLine, Minus, Trash2 } from "lucide-react";
import { TaskCard } from "./task-card";
import { IWeekdays } from "./toggle-calendar";

interface Props {
  className?: string;
  title: string;
  description: string;
  weekdays_need: IWeekdays[];
  sum?: string;
}

export const TestCard: React.FC<Props> = ({ className, title, description, weekdays_need, sum }) => {
  return (
    <div className={cn(className, "mr-14")}>
      <div className="relative top-[159px] mt-[-159px] h-[158px] left-[50px] -z-10 rounded-3xl w-full shadow-sm bg-primary/80 space-y-2 ">
        <div className="w-full h-full flex flex-col items-end justify-center space-y-5">
          <div className="mr-3.5">
            <FilePenLine className="w-5 h-5" />
          </div>
          <div className="mr-3.5">
            <Minus className="w-5 h-5 text-muted" />
          </div>
          <div className="mr-3.5">
            <Trash2 className="w-5 h-5" />
          </div>
        </div>
      </div>
      <TaskCard
        title={title}
        description={description}
        sum={sum}
        weekdays_need={weekdays_need}
      />
    </div>
  );
};
