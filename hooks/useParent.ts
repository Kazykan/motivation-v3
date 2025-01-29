import { ParentCheckResponse } from "@/lib/api/api-types";
import { ParentCreateSchema } from "@/lib/types";
import { checkParentUser, createParent } from "@/utils/apiParent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const useParentCheck = (telegramId: number) => {
  return useQuery<ParentCheckResponse>({
    queryKey: ["parentCheck", telegramId],
    queryFn: () => checkParentUser(telegramId),
    enabled: !!telegramId,
  });
};

export function useCreateTaskCompletion(telegramId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: z.infer<typeof ParentCreateSchema>) => createParent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["parentCheck", telegramId],
      });
    },
  });
}
