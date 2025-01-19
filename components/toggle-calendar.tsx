"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useWeek } from "@/lib/store/week";
import { eachDayOfInterval, format } from "date-fns";
import React from "react";
import { useSet } from "react-use";

interface Props {
  task_id: number;
  weekdays_need?: IWeekdays[];
}

export type IWeekdays = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";

export function ToggleGroupCalendar({ weekdays_need, task_id }: Props) {
  const startOfDate = useWeek((state) => state.start_of_date);
  const endOfWeek = useWeek((state) => state.end_of_week);

  const month_days =
    startOfDate && endOfWeek
      ? eachDayOfInterval({
          start: startOfDate,
          end: endOfWeek,
        })
      : [];

  const weekdays: IWeekdays[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [set, { add, has, remove }] = useSet(new Set(["Пн"]));

  const weekdaysToUse = weekdays_need || weekdays;

  return (
    <ToggleGroup
      type="multiple"
      defaultValue={set !== undefined ? Array.from(set) : []}
      onValueChange={(value) => {
        if (!has(String(value))) {
          add(String(value));
        } else {
          remove(String(value));
        }
      }}
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
            disabled={weekdaysToUse.includes(weekday) ? false : true}
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
