import { ParentCheckResponse } from "@/lib/api/api-types";
import { axiosInstanceWithoutAuth } from "./instance";
import axios from "axios";

export const checkParentUser = async (telegramId: number): Promise<ParentCheckResponse> => {
  try {
    const response = await axiosInstanceWithoutAuth.get<ParentCheckResponse>(`/parent?telegram_id=${telegramId}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
