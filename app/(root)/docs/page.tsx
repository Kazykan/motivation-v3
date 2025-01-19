"use client"

import React from "react";
import { TasksWithCompletions } from "@/components/tasks-with-completions";

export default function TestChildTask() {
  return (
    <div>
      <TasksWithCompletions telegramId="1234567" startDate="2025-01-01" endDate="2025-01-17" />
    </div>
  );
}
