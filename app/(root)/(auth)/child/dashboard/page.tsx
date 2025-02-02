"use client";

import { TasksWithCompletions } from "@/components/tasks-with-completions";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useChildCheck } from "@/hooks/useChild";
import { payloadRole } from "@/lib/jwt";
import { useChildProfile } from "@/lib/store/child";
import React from "react";

const ChildDashboard: React.FC = () => {
  const setChildTelegramId = useChildProfile((state) => state.setChildTelegramId);
  const setChildId = useChildProfile((state) => state.setChildId);
  const { payload } = useAuthCheck({ requiredRole: payloadRole.child });
  const { data } = useChildCheck(payload?.telegramId)

  React.useEffect(() => {
    if (payload && payload.telegramId && data) {
      setChildId(data?.childUser?.id);
      setChildTelegramId(data?.childUser?.telegram_id);
    }
  }, [setChildId, setChildTelegramId, payload, data]);

  return <TasksWithCompletions edit={false} />;
};

export default ChildDashboard;
