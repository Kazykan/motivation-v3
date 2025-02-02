import { ParentCheckResponse, ParentResponseWithChildren } from "@/lib/api/api-types";
import { ParentCreateSchema, ParentCreateType } from "@/lib/types";
import { checkParentUser, checkParentUserWitchChildren, createParent } from "@/lib/utils/apiParent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "./use-toast";
import { useRouter } from "next/navigation";

export const useParentCheck = (telegramId: number) => {
  return useQuery<ParentCheckResponse>({
    queryKey: ["parentCheck", String(telegramId)],
    queryFn: () => checkParentUser(telegramId),
    enabled: !!telegramId,
  });
};

export const useParentWithChildren = (telegramId: number | undefined) => {
  return useQuery<ParentResponseWithChildren>({
    queryKey: ["ParentResponseWithChildren", String(telegramId)],
    queryFn: () => checkParentUserWitchChildren(telegramId!),
    enabled: !!telegramId,
  });
};

export function useCreateParent(telegramId: number) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ParentCreateType) => createParent(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["parentCheck", String(telegramId)],
      });
      toast({
        title: "Учетная запись создана",
      });
      router.push("/");
    },
  });
}
