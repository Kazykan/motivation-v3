"use client";

import { AuthLayout } from "@/components/AuthLayout";
import { payloadRole } from "@/lib/jwt";

const ParentDashboard = () => {
  return (
    <AuthLayout requiredRole={payloadRole.parent}>
      <div>ParentDashboard </div>
    </AuthLayout>
  );
};

export default ParentDashboard;
