"use client";

import { AuthLayout } from "@/components/AuthLayout";
import { ChildSelect } from "@/components/child-select";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useParentWithChildren } from "@/hooks/useParent";
import { payloadRole } from "@/lib/jwt";

const ParentDashboard = () => {
  const { payload } = useAuthCheck({ requiredRole: payloadRole.parent });
  const { data, isLoading } = useParentWithChildren(payload?.telegramId);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <AuthLayout requiredRole={payloadRole.parent}>
      {data?.exists && data.parentUser && data.parentUser.children && data.parentUser.children.length > 0 ? (
        <ChildSelect childrenData={data.parentUser.children} />
      ) : (
        <div>нет детей</div>
      )}
    </AuthLayout>
  );
};

export default ParentDashboard;
