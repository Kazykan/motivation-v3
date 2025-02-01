"use client";
import { formatDateToYYYYMMDD } from "@/lib";
import { TaskCompletionResponse } from "@/lib/api/api-types";
import { useDateRange } from "@/lib/service/date";
import { createTaskCompletion, deleteTaskCompletion, getTaskCompletions } from "@/utils/apiTaskCompletion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTaskCompletions = (task_id: string, firstDayOfWeek: Date | null, lastDayOfWeek: Date | null) => {
  return useQuery<TaskCompletionResponse>({
    queryKey: ["TaskCompletions", task_id, formatDateToYYYYMMDD(firstDayOfWeek!), formatDateToYYYYMMDD(lastDayOfWeek!)],
    queryFn: () => getTaskCompletions(task_id, firstDayOfWeek!, lastDayOfWeek!),
    enabled: !!task_id && !!firstDayOfWeek && !!lastDayOfWeek,
  });
};

// Функция для генерации queryKey
const getTaskCompletionsQueryKey = (taskId: number, startDate: string, endDate: string) => {
  return ["TaskCompletions", taskId.toString(), startDate, endDate];
};

interface CreateTaskCompletionVariables {
  taskId: number;
  userId: number;
}

interface DeleteTaskCompletionVariables {
  taskId: number;
}

export function useCreateTaskCompletion(data: CreateTaskCompletionVariables) {
  const queryClient = useQueryClient();
  const { startDate, endDate } = useDateRange();

  return useMutation({
    mutationFn: (completionDate: string) => createTaskCompletion(completionDate, data.taskId, data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getTaskCompletionsQueryKey(data.taskId, startDate, endDate),
      });
    },
  });
}

export function useDeleteTaskCompletion(data: DeleteTaskCompletionVariables) {
  const queryClient = useQueryClient();
  const { startDate, endDate } = useDateRange();

  return useMutation({
    mutationFn: (id: number) => deleteTaskCompletion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: getTaskCompletionsQueryKey(data.taskId, startDate, endDate),
      });
    },
    onError: (error: any) => {
      console.error("Error deleting task completion:", error);
    },
  });
}
