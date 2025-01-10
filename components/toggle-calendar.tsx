"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";
import { useSet } from "react-use";

interface Props {
  weekdays_need: IWeekdays[];
}

export type IWeekdays = "Пн" | "Вт" | "Ср" | "Чт" | "Пт" | "Сб" | "Вс";

export function ToggleGroupCalendar({ weekdays_need }: Props) {
  const weekdays: IWeekdays[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [set, { add, has, remove }] = useSet(new Set(["Пн"]));

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
        return (
          <>
            <ToggleGroupItem
              key={index}
              value={weekday}
              aria-label={weekday}
              variant={weekdays_need.includes(weekday) ? "outline" : "default"}
              disabled={weekdays_need.includes(weekday) ? false : true}
            >
              <div className="relative">
                <div className="relative -top-5">{weekday}</div>
                <div className="relative -top-2.5">{index + 15}</div>
              </div>
            </ToggleGroupItem>
          </>
        );
      })}
    </ToggleGroup>
  );
}
