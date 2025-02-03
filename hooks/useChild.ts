import { ChildCheckResponse } from "@/lib/api/api-types";
import { checkChildUser, createChild } from "@/lib/utils/apiChild";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "./use-toast";
import { ChildCreateType } from "@/lib/types";

export const useChildCheck = (telegramId: number | null | undefined) => {
  return useQuery<ChildCheckResponse>({
    queryKey: ["childCheck", telegramId],
    queryFn: () => checkChildUser(telegramId!),
    enabled: !!telegramId,
  });
};

export function useCreateChild(telegramId: number) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ChildCreateType) => createChild(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["childCheck", String(telegramId)],
      });
      await queryClient.refetchQueries({
        queryKey: ["childCheck", String(telegramId)],
      });
      toast({
        title: "Учетная запись создана",
      });
      router.push("/");
    },
  });
}
