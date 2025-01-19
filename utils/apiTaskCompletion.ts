import { TaskCompletionResponse } from "@/lib/api/api-types";
import axios from "axios";
import { axiosInstanceWithoutAuth } from "./instance";

export const getTaskCompletions = async (
  task_id: string,
  startDate: string,
  endDate: string
): Promise<TaskCompletionResponse> => {
  try {
    const telegram_id = parseInt(task_id);

    // const axiosInstance = await createServerAxiosInstance();
    const task = await axiosInstanceWithoutAuth.get<TaskCompletionResponse>(
      `/child/task-completion?task_id=${telegram_id}&start=${startDate}&end=${endDate}`
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

export const createTaskCompletion = async (taskId: number, userId: number): Promise<TaskCompletionResponse> => {
  try {
    const taskCompletion = await axiosInstanceWithoutAuth.post<TaskCompletionResponse>(`/child/task-completion`, {
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
