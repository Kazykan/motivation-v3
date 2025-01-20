import { TaskWithCompletionsResponse } from "@/lib/api/api-types";
import axios from "axios";
import { axiosInstanceWithoutAuth } from "./instance";
import { formatDateToYYYYMMDD } from "@/lib/service/date";

export const getTasksWithCompletions = async (
  telegramId: string,
  firstDayOfWeek: Date,
  lastDayOfWeek: Date
): Promise<TaskWithCompletionsResponse> => {
  try {
    const telegram_id = parseInt(telegramId);
    const formattedFirstDay = formatDateToYYYYMMDD(firstDayOfWeek);
    const formattedLastDay = formatDateToYYYYMMDD(lastDayOfWeek);

    // const axiosInstance = await createServerAxiosInstance();
    const task = await axiosInstanceWithoutAuth.get<TaskWithCompletionsResponse>(
      `/child/task?telegram_id=${telegram_id}&start=${formattedFirstDay}&end=${formattedLastDay}`
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
