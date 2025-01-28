"use client";

import { AuthLayout } from "@/components/AuthLayout";
import { payloadRole } from "@/lib/jwt";

const ChildDashboard: React.FC = () => {
  return (
    <AuthLayout requiredRole={payloadRole.child}>
      <div>ChildDashboard</div>
    </AuthLayout>
  );
};

export default ChildDashboard;
