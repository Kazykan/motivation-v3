"use client";

import { useTasksWithCompletions } from "@/hooks/useTasksWithCompletions";
import { TestCard } from "./test-card";
import { DayOfWeek, Task, TaskType } from "@prisma/client";
import { IWeekdays } from "./toggle-calendar";

interface Props {
  telegramId: string;
  startDate: string;
  endDate: string;
}

interface TaskData {
  id: number;
  type: TaskType;
  title: string;
  description: string | null;
  dayOfWeek: DayOfWeek[];
  reward: number;
  frequency?: number | null;
}

export const TasksWithCompletions: React.FC<Props> = ({ telegramId, startDate, endDate }) => {
  const { data, isLoading, error } = useTasksWithCompletions(telegramId, startDate, endDate);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data || !data.exists || !data.task) {
    return <div>No tasks available</div>;
  }

  const dayOfWeekMap: Record<DayOfWeek, IWeekdays> = {
    MONDAY: 'Пн',
    TUESDAY: 'Вт',
    WEDNESDAY: 'Ср',
    THURSDAY: 'Чт',
    FRIDAY: 'Пт',
    SATURDAY: 'Сб',
    SUNDAY: 'Вс',
  };

  function convertDaysOfWeekToShortRu(task: TaskData): IWeekdays[] {
    // Если список пустой и тип FLEXIBLE то отправляем все дни недели
    if (task.type === TaskType.FLEXIBLE && (!task.dayOfWeek || task.dayOfWeek.length === 0)) {
      return Object.values(dayOfWeekMap);
    }

    return task.dayOfWeek.map(day => dayOfWeekMap[day]);
  }

  return (
    <div className="grid gap-4 mt-5">
      {data.task.length > 0 && (
        data.task.map((oneTask) => {
          return (
            <TestCard
              key={oneTask.id}
              task_id={oneTask.id}
              taskType={oneTask.type}
              title={oneTask.title}
              description={oneTask.description !== null ? oneTask.description : ""}
              weekdays_need={convertDaysOfWeekToShortRu(oneTask)}
              sum={oneTask.reward}
              frequency={oneTask.frequency ?? undefined}
            />
          );
        })
      )}
    </div>
  );
};
