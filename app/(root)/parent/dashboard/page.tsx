"use client";

import { useAuthCheck } from "@/hooks/useAuthCheck";
import { Payload, payloadRole, verifyToken } from "@/lib/jwt";
import { useRouter } from "next/navigation";
import React from "react";

const ParentDashboard: React.FC = () => {
  const { isAuthorized, isLoading, payload } = useAuthCheck({ requiredRole: payloadRole.parent });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthorized) {
    return null;
  }

  return <div>ParentDashboard - {payload?.role}</div>;
};

export default ParentDashboard;
