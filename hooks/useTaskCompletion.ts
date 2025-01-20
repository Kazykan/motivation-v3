"use client";
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
  completionDate: string;
  taskId: number;
  userId: number;
  startDate: string;
  endDate: string;
}

interface DeleteTaskCompletionVariables {
  id: number;
  taskId: number;
  startDate: string;
  endDate: string;
}

export function useCreateTaskCompletion(data: CreateTaskCompletionVariables) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => createTaskCompletion(data.completionDate, data.taskId, data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskCompletions", data.taskId.toString(), data.startDate, data.endDate],
      });
    },
  });
}

export function useDeleteTaskCompletion(data: DeleteTaskCompletionVariables) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteTaskCompletion(data.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskCompletions", data.taskId.toString(), data.startDate, data.endDate],
      });
    },
    onError: (error: any) => {
      console.error("Error deleting task completion:", error);
    },
  });
}
