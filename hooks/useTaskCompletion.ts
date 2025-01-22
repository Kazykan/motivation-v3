"use client";
import { formatDateToYYYYMMDD, useWeek } from "@/lib";
import { TaskCompletionResponse } from "@/lib/api/api-types";
import { createTaskCompletion, deleteTaskCompletion, getTaskCompletions } from "@/utils/apiTaskCompletion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTaskCompletions = (task_id: string, firstDayOfWeek: Date | null, lastDayOfWeek: Date | null) => {
  return useQuery<TaskCompletionResponse>({
    queryKey: ["TaskCompletions", task_id, firstDayOfWeek, lastDayOfWeek],
    queryFn: () => getTaskCompletions(task_id, firstDayOfWeek!, lastDayOfWeek!),
    enabled: !!task_id && !!firstDayOfWeek && !!lastDayOfWeek,
  });
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
  const firstDayOfWeek = useWeek((state) => state.start_of_date);
  const lastDayOfWeek = useWeek((state) => state.end_of_week);

  const startDate = firstDayOfWeek ? formatDateToYYYYMMDD(firstDayOfWeek) : "";
  const endDate = lastDayOfWeek ? formatDateToYYYYMMDD(lastDayOfWeek) : "";

  return useMutation({
    mutationFn: (completionDate: string) => createTaskCompletion(completionDate, data.taskId, data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskCompletions", data.taskId.toString(), startDate, endDate],
      });
    },
  });
}

export function useDeleteTaskCompletion(data: DeleteTaskCompletionVariables) {
  const queryClient = useQueryClient();
  const firstDayOfWeek = useWeek((state) => state.start_of_date);
  const lastDayOfWeek = useWeek((state) => state.end_of_week);

  const startDate = firstDayOfWeek ? formatDateToYYYYMMDD(firstDayOfWeek) : "";
  const endDate = lastDayOfWeek ? formatDateToYYYYMMDD(lastDayOfWeek) : "";

  return useMutation({
    mutationFn: (id: number) => deleteTaskCompletion(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskCompletions", data.taskId.toString(), startDate, endDate],
      });
    },
    onError: (error: any) => {
      console.error("Error deleting task completion:", error);
    },
  });
}
