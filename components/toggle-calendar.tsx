"use client"

import { Bold, Italic, Underline } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import React from "react"
import { useSet } from "react-use"

export function ToggleGroupCalendar() {
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  const weekdays_need = ["Пн", "Ср", "Пт"]
  const [set, { add, has, remove }] = useSet(new Set(["Пн"]))

  return (
    <ToggleGroup
      type="multiple"
      defaultValue={set !== undefined ? Array.from(set) : []}
      onValueChange={(value) => {
        if (!has(String(value))) {
          add(String(value))
        } else {
          remove(String(value))
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
              {weekday}
            </ToggleGroupItem>
          </>
        )
      })}
    </ToggleGroup>
  )
}
