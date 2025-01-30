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

export const FormSelectGender: React.FC<Props> = ({ name, label, className }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors[name]?.message as string;

  return (
    <FormItem className={cn(className)}>
      {label && <FormLabel>{label}</FormLabel>}
      <FormControl>
        <Select onValueChange={(value) => register(name).onChange({ target: { value, name } })}>
          <SelectTrigger>
            <SelectValue placeholder={"Выберите"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MALE">Мужской</SelectItem>
            <SelectItem value="FEMALE">Женский</SelectItem>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
      {errorText && <p className="text-sm text-red-600 mt-1">{errorText}</p>}
    </FormItem>
  );
};
