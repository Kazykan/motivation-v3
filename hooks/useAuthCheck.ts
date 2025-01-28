import { Payload, payloadRole, verifyToken } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

interface UseAuthCheckProps {
  requiredRole: payloadRole;
  redirectPath?: string;
}

export const useAuthCheck = ({ requiredRole, redirectPath = "/register" }: UseAuthCheckProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthorized, setIsAuthorized] = React.useState(false);
  const [payload, setPayload] = React.useState<Payload | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const checkToken = async () => {
      if (typeof localStorage === "undefined") {
        console.error("localStorage is not defined");
        setIsLoading(false);
        setIsAuthorized(false);
        router.push(redirectPath);
        return null;
      }
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        setIsAuthorized(false);
        router.push(redirectPath);
        return null;
      }
      try {
        const decodedPayload = await verifyToken(token);
        if (decodedPayload && decodedPayload.role === requiredRole) {
          setPayload(decodedPayload);
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          router.push(redirectPath);
        }
      } catch (error) {
        console.error("Ошибка верификации токена", error);
        localStorage.removeItem("token"); // Очищаем невалидный токен
        setIsAuthorized(false);
        router.push(redirectPath);
        return null;
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, [requiredRole, redirectPath, router]);

  return { isLoading, isAuthorized, payload };
};
