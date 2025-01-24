import { TaskResponse, TaskWithCompletionsResponse } from "../api/api-types";

interface RewardInfo {
  earnedReward: number;
  maxReward: number;
}

export const calculateTotalReward = (data: TaskWithCompletionsResponse): RewardInfo => {
  if (!data || !data.task || data.task.length === 0) {
    return { earnedReward: 0, maxReward: 0 };
  }

  let totalEarnedReward = 0;
  let totalMaxReward = 0;

  for (const task of data.task) {
    const { earnedReward, maxReward } = calculateTaskReward(task);
    totalEarnedReward += earnedReward;
    totalMaxReward += maxReward;
  }

  return { earnedReward: totalEarnedReward, maxReward: totalMaxReward };
};

export const calculateTaskReward = (task: TaskResponse): RewardInfo => {
  const { type, reward, frequency, dayOfWeek, taskCompletions } = task;
  const completedCount = taskCompletions.length;

  let taskEarnedReward = 0;
  let taskMaxReward = 0;

  if (type === "FLEXIBLE") {
    taskMaxReward = reward;
    const earnedReward = Math.min(completedCount, frequency ?? 0) * (reward / (frequency ?? 1));
    taskEarnedReward = Math.ceil(earnedReward); // Округление вверх

    if (frequency !== null && completedCount > frequency) {
      taskEarnedReward = reward;
    }
  } else if (type === "DAILY") {
    taskMaxReward = reward;
    const dailyReward = reward / dayOfWeek.length;
    taskEarnedReward = Math.ceil(Math.min(completedCount, dayOfWeek.length) * dailyReward); // Округление вверх
    if (completedCount >= dayOfWeek.length) {
      taskEarnedReward = reward;
    }
  }
  return { earnedReward: taskEarnedReward, maxReward: taskMaxReward };
};

export const calculateCompletionPercentage = (rewardInfo: RewardInfo): number => {
  if (rewardInfo.maxReward === 0) {
    return 0; // Избегаем деления на ноль
  }
  return Math.round((rewardInfo.earnedReward / rewardInfo.maxReward) * 100);
};
