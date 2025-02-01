"use client";

import { formatDateToYYYYMMDD } from "@/lib";
import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import { useDateRange } from "@/lib/service/date";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";
import { createTask, deleteTask, getTasksWithCompletions, updateTask } from "@/lib/utils/apiTasksWithCompletions";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const useTasksWithCompletions = (
  telegramId: string | undefined,
  firstDayOfWeek: Date | null,
  lastDayOfWeek: Date | null
) => {
  return useQuery<TaskWithCompletionsResponse>({
    queryKey: [
      "TaskWithCompletions",
      telegramId,
      formatDateToYYYYMMDD(firstDayOfWeek!),
      formatDateToYYYYMMDD(lastDayOfWeek!),
    ],
    queryFn: () => getTasksWithCompletions(telegramId!, firstDayOfWeek!, lastDayOfWeek!),
    enabled: !!telegramId && !!firstDayOfWeek && !!lastDayOfWeek,
  });
};

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { startDate, endDate, child_telegram_id } = useDateRange();

  return useMutation({
    mutationFn: (taskData: z.infer<typeof TaskCreateSchema>) => createTask(taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskWithCompletions", child_telegram_id, startDate, endDate],
      });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();
  const { startDate, endDate, child_telegram_id } = useDateRange();

  return useMutation({
    mutationFn: ({ taskId, taskData }: { taskId: number; taskData: z.infer<typeof TaskUpdateSchema> }) =>
      updateTask(taskId, taskData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskWithCompletions", child_telegram_id, startDate, endDate],
      });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { startDate, endDate, child_telegram_id } = useDateRange();

  return useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskWithCompletions", child_telegram_id, startDate, endDate],
      });
    },
    onError: (error: any) => {
      console.error("Error deleting task completion:", error);
    },
  });
}
