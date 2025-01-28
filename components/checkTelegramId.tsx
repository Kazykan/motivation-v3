import { useChildCheck } from "@/hooks/useChild";
import { useParentCheck } from "@/hooks/useParent";
import { generateToken, payloadRole } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  telegramId: number;
  telegramStartParams: string | null;
} 

const CheckTelegramId = ({ telegramId, telegramStartParams }: Props) => {
  const { data: childData, isLoading: childLoading, error: childError } = useChildCheck(telegramId);
  const { data: parentData, isLoading: parentLoading, error: parentError } = useParentCheck(telegramId);
  const router = useRouter();

  React.useEffect(() => {
    const generateAndRedirect = async () => {
      if (childData?.exists && childData.childUser) {
        try {
          const token = await generateToken({ telegramId, role: payloadRole.child });
          localStorage.setItem("token", token);
          router.push(`/child/dashboard`);
        } catch (error) {
          console.error("Error generating token: (child)", error);
        }
      } else if (parentData?.exists && parentData.parentUser) {
        try {
          const token = await generateToken({ telegramId, role: payloadRole.parent });
          localStorage.setItem("token", token);
          router.push(`/parent/dashboard`);
        } catch (error) {
          console.error("Error generating token: (parent)", error);
        }
      } else {
        // Перенаправляем на страницу регистрации, добавляя параметр, если он есть
        const registerUrl = `/register${telegramStartParams ? `?telegramStartParams=${telegramStartParams}` : ""}`;
        router.push(registerUrl);
      }
    };

    generateAndRedirect();
  }, [childData, parentData, router, telegramId, telegramStartParams]);

  return (
    <div>
      {childLoading || parentLoading ? <p>Loading...</p> : null}
      {childError && <p>Error (child): {childError.message}</p>}
      {parentError && <p>Error (parent): {parentError.message}</p>}
    </div>
  );
};

export default CheckTelegramId;
