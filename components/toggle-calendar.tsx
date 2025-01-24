"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useCreateTaskCompletion, useDeleteTaskCompletion, useTaskCompletions } from "@/hooks/useTaskCompletion";
import { formatDateToYYYYMMDD, getWeekdayFromCompletion, IWeekdays, useWeek, weekdays } from "@/lib";
import { useChildProfile } from "@/lib/store/child";
import { useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import React from "react";

interface Props {
  child_id: number;
  task_id: number;
  weekdays_need?: IWeekdays[];
}

export function ToggleGroupCalendar({ weekdays_need, task_id, child_id }: Props) {
  const queryClient = useQueryClient();
  const firstDayOfWeek = useWeek((state) => state.start_of_date);
  const lastDayOfWeek = useWeek((state) => state.end_of_week);
  const weekMonthDays = useWeek((state) => state.weekDays);
  const [selectedDays, setSelectedDays] = React.useState<IWeekdays[]>([]);
  const [isMutating, setIsMutating] = React.useState(false);
  const childTelegramId = useChildProfile((state) => state.child_telegram_id);

  const month_days = weekMonthDays ? weekMonthDays : [];
  const weekdaysToUse = weekdays_need || weekdays;

  const { data: taskCompletions, isLoading } = useTaskCompletions(String(task_id), firstDayOfWeek, lastDayOfWeek);

  const createTaskCompletionMutation = useCreateTaskCompletion({
    taskId: task_id,
    userId: child_id,
  });

  const deleteTaskCompletionMutation = useDeleteTaskCompletion({
    taskId: task_id,
  });

  const handleValueChange = async (value: IWeekdays[]) => {
    setIsMutating(true);
    try {
      const previousSelectedDays = selectedDays;
      setSelectedDays(value);

      const addedDays = value.filter((day) => !previousSelectedDays.includes(day));
      const removedDays = previousSelectedDays.filter((day) => !value.includes(day));

      for (const addedDay of addedDays) {
        const index = weekdays.indexOf(addedDay);
        if (index !== -1 && month_days[index]) {
          const completionDate = formatDateToYYYYMMDD(month_days[index]);
          await createTaskCompletionMutation.mutateAsync(completionDate);
        }
      }

      for (const removedDay of removedDays) {
        const index = weekdays.indexOf(removedDay);
        if (index !== -1 && month_days[index]) {
          const completionToDelete = taskCompletions?.taskCompletion?.find((completion) => {
            return getWeekdayFromCompletion(completion.completionDate) === removedDay;
          });

          if (completionToDelete) await deleteTaskCompletionMutation.mutateAsync(completionToDelete.id);
        }
      }
      queryClient.invalidateQueries({
        queryKey: [
          "TaskCompletions",
          task_id.toString(),
          firstDayOfWeek ? formatDateToYYYYMMDD(firstDayOfWeek) : "",
          lastDayOfWeek ? formatDateToYYYYMMDD(lastDayOfWeek) : "",
        ],
      });
      queryClient.invalidateQueries({
        queryKey: [
          "TaskWithCompletions",
          String(childTelegramId),
          firstDayOfWeek ? formatDateToYYYYMMDD(firstDayOfWeek) : "",
          lastDayOfWeek ? formatDateToYYYYMMDD(lastDayOfWeek) : "",
        ],
      });
    } catch (error) {
      console.error("Error during mutation:", error);
    } finally {
      setIsMutating(false);
    }
  };

  React.useEffect(() => {
    if (taskCompletions?.taskCompletion && !isLoading) {
      const completedDays = taskCompletions.taskCompletion.map((completion) => {
        return getWeekdayFromCompletion(completion.completionDate);
      });
      setSelectedDays(completedDays);
    }
  }, [taskCompletions, isLoading]);

  return (
    <ToggleGroup
      disabled={isLoading || isMutating}
      type="multiple"
      value={selectedDays}
      onValueChange={handleValueChange}
    >
      {weekdays.map((weekday, index) => {
        const date = month_days[index];
        const formattedDay = date ? format(date, "d") : "";
        return (
          <ToggleGroupItem
            key={weekday}
            value={weekday}
            aria-label={weekday}
            variant={weekdaysToUse.includes(weekday) ? "outline" : "default"}
            disabled={!weekdaysToUse.includes(weekday) || isLoading || isMutating}
          >
            <div className="relative">
              <div className="relative -top-5">{weekday}</div>
              <div className="relative -top-2.5">{formattedDay}</div>
            </div>
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
