import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function useUserCheckAndNavigation(telegramUser: number | null) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (telegramUser) {
      const checkUser = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`/api/checkChild?telegramId=${telegramUser}`);
          const userExists = response.data.exists;

          if (userExists) {
            router.push("/profile");
          } else {
            router.push("/registration");
          }
        } catch (error) {
          console.error("Ошибка при проверке пользователя:", error);
        } finally {
          setIsLoading(false);
        }
      };
      checkUser();
    }
  }, [telegramUser, router]);

  return isLoading;
}

export default useUserCheckAndNavigation;
