import { Payload, payloadRole, verifyToken } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

interface UseAuthCheckProps {
  requiredRole: payloadRole;
  redirectPath?: string;
}

export const useAuthCheck = ({ requiredRole, redirectPath = "/user" }: UseAuthCheckProps) => {
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
        return;
      }
      const token = localStorage.getItem("token");

      if (!token) {
        setIsLoading(false);
        setIsAuthorized(false);
        router.push(redirectPath);
        return;
      }
      try {
        const decodedPayload = await verifyToken(token);
        if (decodedPayload && decodedPayload.role === payloadRole.parent) {
          setPayload(decodedPayload);
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
          router.push(redirectPath);
        }
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, [requiredRole, redirectPath, router]);

  return { isLoading, isAuthorized, payload };
};
