import { ChildCheckResponse } from "@/lib/api/api-types";
import { checkChildUser } from "@/utils/apiChild";
import { useQuery } from "@tanstack/react-query";

export const useChildCheck = (telegramId: number) => {
  return useQuery<ChildCheckResponse>({
    queryKey: ["childCheck", telegramId],
    queryFn: () => checkChildUser(telegramId),
    enabled: !!telegramId,
  });
};
