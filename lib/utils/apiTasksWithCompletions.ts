import { TaskResponse, TaskWithCompletionsResponse } from "@/lib/api/api-types";
import axios from "axios";
import { axiosInstanceWithoutAuth } from "./instance";
import { formatDateToYYYYMMDD } from "@/lib/service/date";
import { z } from "zod";
import { TaskCreateSchema, TaskUpdateSchema } from "@/lib/types";

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

export const createTask = async (taskData: z.infer<typeof TaskCreateSchema>): Promise<TaskResponse> => {
  try {
    const response = await axiosInstanceWithoutAuth.post<TaskResponse>(`/child/task`, taskData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as TaskResponse;
    } else {
      return {
        exists: false,
        message: "An unexpected error occurred",
        status: 500,
      };
    }
  }
};

export const updateTask = async (taskId: number, taskData: z.infer<typeof TaskUpdateSchema>): Promise<TaskResponse> => {
  try {
    const response = await axiosInstanceWithoutAuth.patch<TaskResponse>(`/child/task?id=${taskId}`, taskData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as TaskResponse;
    } else {
      return {
        exists: false,
        message: "An unexpected error occurred",
        status: 500,
      };
    }
  }
};

export const deleteTask = async (id: number): Promise<TaskResponse> => {
  try {
    const response = await axiosInstanceWithoutAuth.delete<TaskResponse>(`/child/task?id=${id}`);
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