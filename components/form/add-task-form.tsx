import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { FormInput, FormSelectTaskType } from "./form-components";
import { Button } from "../ui/button";
import { MultipleSelector } from "../multipleselector";
import { useChildProfile } from "@/lib/store/child";
import { useCreateTask, useUpdateTask } from "@/hooks/useTask";
import { Loader2 } from "lucide-react";

interface Props {
  onClose: () => void;
  taskId?: number; // для обновления
  initialValues?: z.infer<typeof TaskCreateSchema> | z.infer<typeof TaskUpdateSchema>; // данные для обновления
}

export const TaskModalForm: React.FC<Props> = ({ onClose, taskId, initialValues }) => {
  const childId = useChildProfile((state) => state.child_id);

  const form = useForm<z.infer<typeof TaskCreateSchema>>({
    resolver: zodResolver(TaskCreateSchema),
    defaultValues: {
      childUserId: childId,
      ...initialValues, // Предзаполнение значений при обновлении
    },
  });

  const updateMutation = useUpdateTask();
  const createMutation = useCreateTask();

  const { watch, setValue } = form;
  const taskType = watch("type");

  React.useEffect(() => {
    if (taskType === "DAILY") {
      setValue("frequency", null);
    }
    if (taskType === "FLEXIBLE") {
      setValue("dayOfWeek", []);
    }
  }, [taskType, setValue]);

  const isUpdateMode = !!taskId; // проверяем есть ли taskID, для определения режима создания/обновления

  async function onSubmit(values: z.infer<typeof TaskCreateSchema>) {
    if (isUpdateMode && taskId) {
      try {
        await updateMutation.mutateAsync({ taskId, taskData: values });
        toast({ title: "Задание обновлено", description: JSON.stringify(values, null, 2) });
        onClose();
      } catch (error) {
        console.error("Failed to update task", error);
        toast({ title: "Ошибка при обновлении задания" });
      }
    } else {
      try {
        await createMutation.mutateAsync(values);
        toast({ title: "Задание создано", description: JSON.stringify(values, null, 2) });
        onClose();
      } catch (error) {
        console.error("Failed to create parent", error);
        toast({ title: "Ошибка при создании родителя" });
      }
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 m-5">
          <FormInput name="title" className="text-base" placeholder="Название" required />
          <FormInput name="description" className="text-base" placeholder="Описание" />
          {!taskId && <FormSelectTaskType name="type" label="Тип задания" />}
          {taskType === "DAILY" && <MultipleSelector />}
          {taskType === "FLEXIBLE" && (
            <FormInput name="frequency" className="text-base" placeholder="кол-во повторений" type="number" />
          )}
          <FormInput name="reward" className="text-base" placeholder="Стоимость задания" type="number" required />
          <Button type="submit" className="w-full py-3" disabled={updateMutation.isPending && createMutation.isPending}>
            {updateMutation.isPending || createMutation.isPending ? (
              <>
                <Loader2 className="animate-spin" />
                выполнение...
              </>
            ) : taskId ? (
              "Сохранить изменения"
            ) : (
              "Добавить задание"
            )}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
