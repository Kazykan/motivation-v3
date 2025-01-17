import { ChildCheckResponse } from "@/lib/api/api-types";
import { axiosInstance } from "./instance";
import axios from "axios";

export const checkChildUser = async (telegramId: number): Promise<ChildCheckResponse> => {
  try {
    const response = await axiosInstance.get<ChildCheckResponse>(`/child?telegram_id=${telegramId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
