import { TaskCompletionResponse } from "@/lib/api/api-types";
import axios from "axios";
import { axiosInstanceWithoutAuth } from "./instance";
import { formatDateToYYYYMMDD } from "@/lib/service/date";

export const getTaskCompletions = async (
  task_id: string,
  firstDayOfWeek: Date,
  lastDayOfWeek: Date
): Promise<TaskCompletionResponse> => {
  try {
    const taskId = parseInt(task_id);
    const formattedFirstDay = formatDateToYYYYMMDD(firstDayOfWeek);
    const formattedLastDay = formatDateToYYYYMMDD(lastDayOfWeek);

    // const axiosInstance = await createServerAxiosInstance();
    const task = await axiosInstanceWithoutAuth.get<TaskCompletionResponse>(
      `/child/task-completion?task_id=${taskId}&start=${formattedFirstDay}&end=${formattedLastDay}`
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

export const createTaskCompletion = async (
  completionDate: string,
  taskId: number,
  userId: number
): Promise<TaskCompletionResponse> => {
  try {
    const taskCompletion = await axiosInstanceWithoutAuth.post<TaskCompletionResponse>(`/child/task-completion`, {
      completionDate,
      taskId,
      userId,
    });
    return taskCompletion.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};

export const deleteTaskCompletion = async (id: number): Promise<TaskCompletionResponse> => {
  try {
    const response = await axiosInstanceWithoutAuth.delete<TaskCompletionResponse>(`/child/task-completion?id=${id}`);
    if (response.status === 204) {
      return { exists: true, status: 204 };
    }
    return { exists: false, message: "Unexpected response from API", status: response.status };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
