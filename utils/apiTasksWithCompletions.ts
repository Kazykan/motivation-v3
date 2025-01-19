import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import axios from "axios";
import { axiosInstanceWithoutAuth } from "./instance";

export const getTasksWithCompletions = async (
  telegramId: string,
  startDate: string,
  endDate: string
): Promise<TaskWithCompletionsResponse> => {
  try {
    const telegram_id = parseInt(telegramId);

    // const axiosInstance = await createServerAxiosInstance();
    const task = await axiosInstanceWithoutAuth.get<TaskWithCompletionsResponse>(
      `/child/task?telegram_id=${telegram_id}&start=${startDate}&end=${endDate}`
    );

    return task.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
