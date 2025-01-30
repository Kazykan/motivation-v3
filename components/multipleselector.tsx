"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { DayOfWeek } from "@/prisma/prisma/client";
import { useFormContext } from "react-hook-form";
import { ErrorText } from "./form/form-components";

export function MultipleSelector() {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedDays = watch("dayOfWeek") || [];
  const [open, setOpen] = React.useState(false);

  const dayOfWeekOptions = [
    { value: "MONDAY", label: "Пн" },
    { value: "TUESDAY", label: "Вт" },
    { value: "WEDNESDAY", label: "Ср" },
    { value: "THURSDAY", label: "Чт" },
    { value: "FRIDAY", label: "Пт" },
    { value: "SATURDAY", label: "Сб" },
    { value: "SUNDAY", label: "Вс" },
  ];

  const errorText = errors["dayOfWeek"]?.message as string;

  const handleSetValue = (val: DayOfWeek) => {
    if (selectedDays.includes(val)) {
      selectedDays.splice(selectedDays.indexOf(val), 1);
      setValue(
        "dayOfWeek",
        selectedDays.filter((day: DayOfWeek) => day !== val)
      );
    } else {
      setValue("dayOfWeek", [...selectedDays, val]);
    }
  };

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="min-w-[280px] justify-between">
            <div className="flex gap-2 justify-start">
              {selectedDays?.length
                ? selectedDays.map((val: DayOfWeek, i: number) => (
                    <div key={i} className="px-2 py-1 rounded-xl border bg-slate-200 text-xs font-medium">
                      {dayOfWeekOptions.find((day) => day.value === val)?.label}
                    </div>
                  ))
                : "Select week days..."}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[480px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No week days found.</CommandEmpty>
            <CommandGroup>
              <CommandList>
                {dayOfWeekOptions.map((day) => (
                  <CommandItem
                    key={day.value}
                    value={day.value}
                    onSelect={() => {
                      handleSetValue(day.value as DayOfWeek);
                    }}
                  >
                    <Check
                      className={cn("mr-2 h-4 w-4", selectedDays.includes(day.value) ? "opacity-100" : "opacity-0")}
                    />
                    {day.label}
                  </CommandItem>
                ))}
              </CommandList>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
}
