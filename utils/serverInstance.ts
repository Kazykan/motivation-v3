"use server";

import axios from "axios";
import { cookies } from "next/headers";

/**
 * Создание серверного axios для добавления токена к каждому запросу.
 *
 * @example
 * ```export default async function ServerComponent() {
 * const axiosInstance = await createServerAxiosInstance();
 * const data = await axiosInstance.get("/some-server-endpoint")
 * ```
 */
export const createServerAxiosInstance = async () => {
  const token = (await cookies()).get("jwtToken")?.value;

  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
  return instance;
};
