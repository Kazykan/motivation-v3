import { Child } from "@prisma/client";
import { axiosInstance } from "./instance";

export const GetChild = async () => {
  const { data } = await axiosInstance.get<Child>("/child");

  return data;
};
