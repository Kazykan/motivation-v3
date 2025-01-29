// components/AuthLayout.tsx
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { payloadRole } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
  requiredRole: payloadRole;
  redirectPath?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, requiredRole, redirectPath = "/register" }) => {
  const { isLoading, isAuthorized } = useAuthCheck({
    requiredRole,
    redirectPath,
  });

  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthorized) {
    router.push(redirectPath);
    return null; // Чтобы избежать рендера контента, пока идет редирект
  }

  return <>{children}</>;
};
