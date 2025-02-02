"use client";

import { DrawerAddTask } from "@/components/task-add-drawer";
import { AuthLayout } from "@/components/AuthLayout";
import { ChildSelect } from "@/components/child-select";
import { InviteLink } from "@/components/invite-link";
import { TasksWithCompletions } from "@/components/tasks-with-completions";
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
        <>
          <ChildSelect className="m-3" childrenData={data.parentUser.children} />
          <TasksWithCompletions edit={true} />
          <div className="m-3 flex w-full items-center justify-center">
            <DrawerAddTask />
          </div>
        </>
      ) : (
        <div>нет детей</div>
      )}
      {data?.exists && data.parentUser && (
        <div className="m-3">
          <div className="mt-6 font-bold">Добавить в ваш личный кабинет</div>
          <div className="flex space-x-4">
            <InviteLink parent={true} telegram_id={payload?.telegramId} name={data.parentUser.name} />
            <InviteLink parent={false} telegram_id={payload?.telegramId} name={data.parentUser.name} />
          </div>
        </div>
      )}
    </AuthLayout>
  );
};

export default ParentDashboard;
