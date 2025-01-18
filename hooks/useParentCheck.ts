import { ParentCheckResponse } from "@/lib/api/api-types";
import { checkParentUser } from "@/utils/apiParent";
import { useQuery } from "@tanstack/react-query";

export const useParentCheck = (telegramId: number) => {
  return useQuery<ParentCheckResponse>({
    queryKey: ["parentCheck", telegramId],
    queryFn: () => checkParentUser(telegramId),
    enabled: !!telegramId,
  });
};
