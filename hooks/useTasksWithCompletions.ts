'use client';

import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import { getTasksWithCompletions } from "@/utils/apiTasksWithCompletions";
import { useQuery } from "@tanstack/react-query";

export const useTasksWithCompletions = (telegramId: string, startDate: string, endDate: string) => {
  return useQuery<TaskWithCompletionsResponse>({
    queryKey: ["TaskWithCompletions", telegramId, startDate, endDate],
    queryFn: () => getTasksWithCompletions(telegramId, startDate, endDate),
    enabled: !!telegramId,
  });
};
