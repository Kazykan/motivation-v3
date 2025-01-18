"use client";

import { useAuthCheck } from "@/hooks/useAuthCheck";
import { payloadRole } from "@/lib/jwt";

const ChildDashboard: React.FC = () => {
  const { isAuthorized, isLoading, payload } = useAuthCheck({ requiredRole: payloadRole.child });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthorized) {
    return null;
  }
  return <div>ChildDashboard - {payload?.role}</div>;
};

export default ChildDashboard;
