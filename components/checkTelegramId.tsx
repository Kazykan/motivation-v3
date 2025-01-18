import { useChildCheck } from "@/hooks/useChildCheck";
import { useParentCheck } from "@/hooks/useParentCheck";
import { generateToken, payloadRole } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

const CheckTelegramId = ({ telegramId }: { telegramId: number }) => {
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
      }
    };

    generateAndRedirect();
  }, [childData, parentData, router, telegramId]);

  return (
    <div>
      {childLoading || parentLoading ? <p>Loading...</p> : null}
      {childError && <p>Error (child): {childError.message}</p>}
      {parentError && <p>Error (parent): {parentError.message}</p>}
    </div>
  );
};

export default CheckTelegramId;
