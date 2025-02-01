"use client";

import * as React from "react";

import { DayOfWeek } from "@/prisma/prisma/client";
import { useFormContext } from "react-hook-form";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { ErrorText } from "./form/form-components";
import { FormLabel } from "./ui/form";

export function MultipleSelector() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedDays = watch("dayOfWeek") || [];
  const weekdays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const dayOfWeekToEnum: { [key: string]: DayOfWeek } = {
    Пн: "MONDAY",
    Вт: "TUESDAY",
    Ср: "WEDNESDAY",
    Чт: "THURSDAY",
    Пт: "FRIDAY",
    Сб: "SATURDAY",
    Вс: "SUNDAY",
  };

  const handleValueChange = (value: DayOfWeek[]) => {
    setValue("dayOfWeek", value);
  };

  const errorText = errors["dayOfWeek"]?.message as string;

  return (
    <div className="flex flex-col">
      <FormLabel className="mb-3">Выберите дни недели для задания</FormLabel>
      <ToggleGroup type="multiple" value={selectedDays} onValueChange={handleValueChange}>
        {weekdays.map((weekday: string) => (
          <ToggleGroupItem key={weekday} value={dayOfWeekToEnum[weekday]} aria-label={weekday} variant="outline">
            <div className="">{weekday}</div>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
}
