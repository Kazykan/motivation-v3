import { cookies } from "next/headers";
import { Payload, verifyToken } from "@/lib/jwt";


export async function checkToken() : Promise<Payload | null> {
  const token = (await cookies()).get("jwtToken")?.value;

  if (!token) {
    return null; // Нет токена, не авторизован
  }

  try {
    const payload = await verifyToken(token);
    return payload;
  } catch (error) {
    console.error("Ошибка проверки токена:", error);
    return null; // Ошибка проверки или невалидный токен
  }
}
