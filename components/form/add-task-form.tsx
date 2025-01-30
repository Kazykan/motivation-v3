import React from "react";
import { cn } from "@/lib/utils";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { TaskCreateSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { FormInput, FormSelectTaskType } from "./form-components";
import { Button } from "../ui/button";
import { MultipleSelector } from "../multipleselector";

interface Props {
  className?: string;
  childUserId: number;
}

export const AddTaskForm: React.FC<Props> = ({ className, childUserId }) => {
  const form = useForm<z.infer<typeof TaskCreateSchema>>({
    resolver: zodResolver(TaskCreateSchema),
    defaultValues: {
      childUserId: childUserId,
    },
  });

  const { watch, setValue  } = form;
  const taskType = watch("type");

  React.useEffect(() => {
    if (taskType === "DAILY") {
      setValue("frequency", null);
    }
    if (taskType === "FLEXIBLE") {
      setValue("dayOfWeek", []);
    }
  }, [taskType, setValue]);

  async function onSubmit(values: z.infer<typeof TaskCreateSchema>) {
    try {
      toast({ title: "Задание создано", description: JSON.stringify(values, null, 2) });
    } catch (error) {
      console.error("Failed to create parent", error);
      toast({ title: "Ошибка при создании родителя" });
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 m-5">
          <FormInput name="title" className="text-base" placeholder="Название" required />
          <FormInput name="description" className="text-base" placeholder="Описание" />
          <FormSelectTaskType name="type" label="Тип задания" />
          {taskType === "DAILY" && <MultipleSelector />}
          {taskType === "FLEXIBLE" && (
            <FormInput name="frequency" className="text-base" placeholder="кол-во повторений" type="number" />
          )}
          <FormInput name="reward" className="text-base" placeholder="Стоимость задания" type="number" required />
          <Button type="submit" className={cn("w-full py-3", className)}>
            Добавить задание
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
