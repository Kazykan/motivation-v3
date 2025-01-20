"use client"

import React from "react";
import { TasksWithCompletions } from "@/components/tasks-with-completions";

export default function TestChildTask() {
  return (
    <div>
      <TasksWithCompletions telegramId="1234567" />
    </div>
  );
}
