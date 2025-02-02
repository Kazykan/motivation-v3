"use client";

import { useTasksWithCompletions } from "@/hooks/useTask";
import { DayOfWeek, TaskType } from "@/prisma/prisma/client";
import { useWeek } from "@/lib/store/week";
import { FilePenLine, Minus, Trash2 } from "lucide-react";
import { TaskCard } from "./task-card";
import { IWeekdays } from "@/lib/types";
import { calculateTaskReward, calculateTotalReward, currencyFormatMoney } from "@/lib";
import React from "react";
import { useChildProfile } from "@/lib/store/child";
import { Progress } from "./ui/progress";
import { calculateCompletionPercentage } from "@/lib/service/calculate_sum";
import { DrawerEditTask } from "./task-edit-drawer";
import { DrawerDeleteTask } from "./task-delete-drawer";

interface TaskData {
  id: number;
  type: TaskType;
  title: string;
  description: string | null;
  dayOfWeek: DayOfWeek[];
  reward: number;
  frequency?: number | null;
}

interface Props {
  edit: boolean;
}

export const TasksWithCompletions: React.FC<Props> = ({ edit }) => {
  const childTelegramId = useChildProfile((state) => state.child_telegram_id);
  const [totalReward, setTotalReward] = React.useState(0);
  const [totalMaxReward, setTotalMaxReward] = React.useState(0);
  const [completionPercentage, setCompletionPercentage] = React.useState(0);
  const firstDayOfWeek = useWeek((state) => state.start_of_date);
  const lastDayOfWeek = useWeek((state) => state.end_of_week);

  const { data, isLoading, error } = useTasksWithCompletions(childTelegramId, firstDayOfWeek, lastDayOfWeek);

  React.useEffect(() => {
    if (data) {
      setTotalReward(calculateTotalReward(data).earnedReward);
      setTotalMaxReward(calculateTotalReward(data).maxReward);
      setCompletionPercentage(calculateCompletionPercentage(calculateTotalReward(data)));
    }
  }, [data]);

  if (isLoading) {
    return <div className="m-3">Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data || !data.exists || !data.task) {
    return <div>No tasks available</div>;
  }

  const dayOfWeekMap: Record<DayOfWeek, IWeekdays> = {
    MONDAY: "Пн",
    TUESDAY: "Вт",
    WEDNESDAY: "Ср",
    THURSDAY: "Чт",
    FRIDAY: "Пт",
    SATURDAY: "Сб",
    SUNDAY: "Вс",
  };

  function convertDaysOfWeekToShortRu(task: TaskData): IWeekdays[] {
    // Если список пустой и тип FLEXIBLE то отправляем все дни недели
    if (task.type === TaskType.FLEXIBLE && (!task.dayOfWeek || task.dayOfWeek.length === 0)) {
      return Object.values(dayOfWeekMap);
    }

    return task.dayOfWeek.map((day) => dayOfWeekMap[day]);
  }

  return (
    <div>
      <div className="m-3 font-bold text-lg">
        {currencyFormatMoney(totalReward)}
        <span className="text-muted-foreground font-normal text-sm">/{currencyFormatMoney(totalMaxReward)}</span>
        <Progress value={completionPercentage} />
      </div>
      <div className="grid gap-4 mt-5">
        {data.task.length > 0 &&
          data.task.map((oneTask) => {
            return (
              <div key={oneTask.id} className="relative mx-1.5 min-w-[315px]">
                <div className="w-full h-[158px] flex flex-col justify-center items-end rounded-3xl shadow-sm bg-primary/80">
                  <div className="w-full h-full flex flex-col items-end justify-center space-y-6 px-2.5">
                    {edit ? (
                      <DrawerEditTask initialValues={oneTask} taskId={oneTask.id} />
                    ) : (
                      <FilePenLine className="w-5 h-5" />
                    )}
                    <Minus className="w-5 h-5 text-muted" />
                    {edit ? (
                      <DrawerDeleteTask initialValues={oneTask} taskId={oneTask.id} />
                    ) : (
                      <Trash2 className="w-5 h-5" />
                    )}
                  </div>
                </div>
                <TaskCard
                  child_id={oneTask.childUserId}
                  task_id={oneTask.id}
                  title={oneTask.title}
                  description={oneTask.description !== null ? oneTask.description : ""}
                  sum={oneTask.reward}
                  weekdays_need={convertDaysOfWeekToShortRu(oneTask)}
                  totalEarn={calculateTaskReward(oneTask).earnedReward}
                  taskType={oneTask.type}
                  frequency={oneTask.frequency ?? oneTask.dayOfWeek.length}
                  countTaskCompletionDone={oneTask.taskCompletions.length}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
