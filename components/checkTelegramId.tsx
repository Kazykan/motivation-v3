import { useChildCheck } from "@/hooks/useChild";
import { useParentCheck } from "@/hooks/useParent";
import { generateToken, payloadRole, verifyToken } from "@/lib/jwt";
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

  const allDataLoaded = !childLoading && !parentLoading;

  React.useEffect(() => {
    //проверяем токен, если валидный делаем редирект
    const checkTokenAndRedirect = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const payload = await verifyToken(token);
          if (payload.role === payloadRole.child && childData?.exists) {
            router.push("/child/dashboard");
          } else if (payload.role === payloadRole.parent && parentData?.exists) {
            router.push("/parent/dashboard");
          } else {
            localStorage.removeItem("token")
          }
        } catch (error) {
          console.error("Ошибка проверки токена:", error);
          // Токен недействителен или истек, продолжаем с существующей логикой
        }
      }
    };

    // если токена нет или он не валидный делаем генерацию токена
    const generateTokenAndRedirect = async (role: payloadRole) => {
      try {
        const token = await generateToken({ telegramId, role });
        localStorage.setItem("token", token);
        router.push(role === payloadRole.child ? `/child/dashboard` : `/parent/dashboard`);
      } catch (error) {
        // Здесь нужно более элегантное обработка ошибок, например, показ модального окна
        console.error("Error generating token:", error);
        //  Можно перенаправить на страницу ошибки
        // router.push('/error');
      }
    };

    const handleAuth = async () => {
      if (childData?.exists && childData.childUser) {
        await generateTokenAndRedirect(payloadRole.child);
      } else if (parentData?.exists && parentData.parentUser) {
        await generateTokenAndRedirect(payloadRole.parent);
      } else {
        localStorage.removeItem("token")
        const registerUrl = `/register${
          telegramStartParams ? `?telegramStartParams=${telegramStartParams}` : ""
        }`;
        router.push(registerUrl);
      }
    };

    const executeAuthFlow = async () => {
      await checkTokenAndRedirect(); // Проверка токена и перенаправление, если токен действителен
      if (allDataLoaded) {
        handleAuth(); // Если токен недействителен, запускаем существующую логику генерации токена
      }
    };

    executeAuthFlow();
  }, [childData, parentData, router, telegramId, telegramStartParams, allDataLoaded, childLoading, parentLoading]);

  return (
    <div>
      {childLoading || parentLoading ? <p>Loading...</p> : null}
      {childError && <p>Error (child): {childError.message}</p>}
      {parentError && <p>Error (parent): {parentError.message}</p>}
    </div>
  );
};

export default CheckTelegramId;
