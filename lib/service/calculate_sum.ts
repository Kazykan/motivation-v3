import { TaskResponse, TaskWithCompletionsResponse } from "../api/api-types";

export const calculateTotalReward = (data: TaskWithCompletionsResponse) => {
  if (!data || !data.task || data.task.length === 0) {
    return 0;
  }

  let totalReward = 0;
  const tasksWithRewards = data.task.map((task) => calculateTaskReward(task));
  totalReward = tasksWithRewards.reduce((sum, reward) => sum + reward, 0);

  return totalReward;
};

export const calculateTaskReward = (task: TaskResponse) => {
  const { type, reward, frequency, dayOfWeek, taskCompletions } = task;
  const completedCount = taskCompletions.length;

  let taskReward = 0;

  if (type === "FLEXIBLE") {
    const maxReward = reward;
    const earnedReward = Math.min(completedCount, frequency ?? 0) * (reward / (frequency ?? 1));
    taskReward = Math.ceil(earnedReward); // Округление вверх

    if (frequency !== null && completedCount > frequency) {
      taskReward = maxReward;
    }
  } else if (type === "DAILY") {
    const dailyReward = reward / dayOfWeek.length;
    taskReward = Math.ceil(Math.min(completedCount, dayOfWeek.length) * dailyReward); // Округление вверх
    if (completedCount >= dayOfWeek.length) {
      taskReward = reward;
    }
  }
  return taskReward;
};
