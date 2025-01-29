import { ParentCheckResponse } from "@/lib/api/api-types";
import { axiosInstanceWithoutAuth } from "./instance";
import axios from "axios";
import { z } from "zod";
import { ParentCreateSchema } from "@/lib/types";

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

export const createParent = async (data: z.infer<typeof ParentCreateSchema>): Promise<ParentCheckResponse> => {
  try {
    const validatedData = ParentCreateSchema.parse(data);
    const parent = await axiosInstanceWithoutAuth.post<ParentCheckResponse>(`/parent`, {
      validatedData,
    });
    return parent.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};
