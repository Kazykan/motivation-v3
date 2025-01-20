"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTaskCompletions } from "@/hooks/useTaskCompletion";
import { useWeek } from "@/lib/store/week";
import { eachDayOfInterval, format, getDay } from "date-fns";
import React from "react";

interface Props {
  child_id: number;
  task_id: number;
  weekdays_need?: IWeekdays[];
}

export type IWeekdays = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";
const weekdays: IWeekdays[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export function ToggleGroupCalendar({ weekdays_need, task_id, child_id }: Props) {
  const firstDayOfWeek = useWeek((state) => state.start_of_date);
  const lastDayOfWeek = useWeek((state) => state.end_of_week);
  const [selectedDays, setSelectedDays] = React.useState<IWeekdays[]>([]);

  // получаем все дни выбранной недели
  const month_days =
    firstDayOfWeek && lastDayOfWeek
      ? eachDayOfInterval({
          start: firstDayOfWeek,
          end: lastDayOfWeek,
        })
      : [];

  const weekdaysToUse = weekdays_need || weekdays;

  const { data: taskCompletions, isLoading } = useTaskCompletions(String(task_id), firstDayOfWeek, lastDayOfWeek);

  const handleValueChange = (value: IWeekdays[]) => {
    // Здесь вызывайте мутацию для сохранения изменения
    console.log("Selected Days:", value);
    setSelectedDays(value);
  };

  React.useEffect(() => {
    if (taskCompletions?.taskCompletion && !isLoading) {
      const completedDays = taskCompletions.taskCompletion.map((completion) => {
        const completionDate = new Date(completion.completionDate);
        const dayOfWeek = getDay(completionDate);
        return weekdays[dayOfWeek === 0 ? 6 : dayOfWeek - 1];
      });
      setSelectedDays(completedDays);
    }
  }, [taskCompletions, isLoading, weekdays]);

  return (
    <ToggleGroup type="multiple" value={selectedDays} onValueChange={handleValueChange}>
      {weekdays.map((weekday, index) => {
        const date = month_days[index];
        const formattedDay = date ? format(date, "d") : "";
        return (
          <ToggleGroupItem
            key={weekday}
            value={weekday}
            aria-label={weekday}
            variant={weekdaysToUse.includes(weekday) ? "outline" : "default"}
            disabled={!weekdaysToUse.includes(weekday)}
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
