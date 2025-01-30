"use client";

import { calculateTotalReward, formatDateToYYYYMMDD } from "@/lib";
import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import { getTasksWithCompletions } from "@/utils/apiTasksWithCompletions";
import { useQuery } from "@tanstack/react-query";

export const useTasksWithCompletions = (
  telegramId: string | undefined,
  firstDayOfWeek: Date | null,
  lastDayOfWeek: Date | null,
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
