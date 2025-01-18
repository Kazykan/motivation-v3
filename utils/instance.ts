import axios from "axios";

// Создаем экземпляр axios без токена
export const axiosInstanceWithoutAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
