import axios from "axios";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Перехватываем запрос и добавляем токен
// axiosInstance.interceptors.request.use(async (config) => {
//   const token = (await cookies()).get("jwtToken")?.value;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Добавляем перехватчик ответов для обработки 401 ошибки
// axiosInstance.interceptors.response.use(
//   (response) => response, // Просто возвращаем ответ при успехе
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // Если ошибка 401, то удаляем токен из куков и перенаправляем на страницу входа
//       (await cookies()).delete("jwtToken");
//       redirect("/register");
//     }
//     return Promise.reject(error); // Пробрасываем ошибку дальше для других обработок
//   }
// );
