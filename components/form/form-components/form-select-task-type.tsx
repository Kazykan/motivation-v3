import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { useFormContext } from "react-hook-form";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  label?: string;
  className?: string;
}

export const FormSelectTaskType: React.FC<Props> = ({ name, label, className }) => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;
  const taskType = watch("type");

  return (
    <FormItem className={cn(className)}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Select onValueChange={(value) => setValue(name, value)}>
          <SelectTrigger>
            <SelectValue placeholder={"Выберите тип задания"} defaultValue={taskType} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DAILY">регулярные</SelectItem>
            <SelectItem value="FLEXIBLE">гибкие</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
      {errorText && <p className="text-sm text-red-600 mt-1">{errorText}</p>}
    </FormItem>
  );
};
