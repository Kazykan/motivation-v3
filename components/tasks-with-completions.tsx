"use client";

import { useTasksWithCompletions } from "@/hooks/useTasksWithCompletions";
import { TestCard } from "./test-card";
import { TaskType } from "@prisma/client";
import { IWeekdays } from "./toggle-calendar";

// import React from "react";
// import { useTasksWithCompletions } from "@/hooks/useTasksWithCompletions";
// import { useParentCheck } from "@/hooks/useParentCheck";
// import { useChildCheck } from "@/hooks/useChildCheck";

interface Props {
  telegramId: string;
  startDate: string;
  endDate: string;
}

// export const TasksWithCompletions: React.FC<Props> = ({ telegramId, startDate, endDate }) => {
//   try {
//     const telegram_id = parseInt(telegramId);

//     const { data, isLoading, error } = useChildCheck(telegram_id);
//     if (isLoading) {
//       return <div>Loading...</div>;
//     }
//     if (error) {
//       return <div>Error</div>;
//     }
//     return <div>{data?.childUser?.name} {startDate} {endDate}</div>;
//   } catch (error) {
//     console.error("Error generating token: (parent)", error);
//   }
// };
export const TasksWithCompletions: React.FC<Props> = ({ telegramId, startDate, endDate }) => {
  const { data, isLoading, error } = useTasksWithCompletions(telegramId, startDate, endDate);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  const taskCards = data?.task?.map((task) => {
    let weekdays: IWeekdays[] = [];

    if (task.dayOfWeek && task.dayOfWeek.length > 0) {
      weekdays = task.dayOfWeek.map((day) => {
        switch (day) {
          case "MONDAY":
            return "Пн";
          case "TUESDAY":
            return "Вт";
          case "WEDNESDAY":
            return "Ср";
          case "THURSDAY":
            return "Чт";
          case "FRIDAY":
            return "Пт";
          case "SATURDAY":
            return "Сб";
          case "SUNDAY":
            return "Вс";
          default:
            return day;
        }
      });
    }
  });

  return (
    <div>
      sdfsdafds
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {data?.task?.map((task) => (
        <div key={task.id}>
          {task.title}. {task} Completions:
          {task.taskCompletions?.map((completion) => (
            <div key={completion.id}>{completion.completionDate.toString()}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
