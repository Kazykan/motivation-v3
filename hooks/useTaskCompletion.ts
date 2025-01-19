"use client";
import { TaskCompletionResponse } from "@/lib/api/api-types";
import { createTaskCompletion, deleteTaskCompletion, getTaskCompletions } from "@/utils/apiTaskCompletion";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

export const useTaskCompletions = (task_id: string, startDate: string, endDate: string) => {
  return useQuery<TaskCompletionResponse>({
    queryKey: ["TaskCompletions", task_id, startDate, endDate],
    queryFn: () => getTaskCompletions(task_id, startDate, endDate),
    enabled: !!task_id && !!startDate && !!endDate,
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

export const useCreateTaskCompletion = (data: CreateTaskCompletionVariables) =>
  useMutation({
    mutationFn: () => createTaskCompletion(data.completionDate, data.taskId, data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TaskCompletions", data.taskId.toString(), data.startDate, data.endDate],
      });
    },
  });

export const useDeleteTaskCompletion = (data: DeleteTaskCompletionVariables) => {
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
};
