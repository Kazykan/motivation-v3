import { jwtVerify, errors, SignJWT } from "jose";

export enum payloadRole {
  child,
  parent,
}

export interface Payload {
  telegramId: number;
  role: payloadRole;
}

const secretKey = process.env.JWT_SECRET_KEY;
if (!secretKey) {
  throw new Error("JWT secret key is not defined");
}

// Проверка токена и получение payload
export async function verifyToken(token: string): Promise<Payload> {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secretKey));
    return payload as unknown as Payload;
  } catch (error) {
    if (error instanceof errors.JWTExpired) {
      throw new Error("Token expired");
    }
    if (error instanceof errors.JWTInvalid) {
      throw new Error("Token invalid");
    }
    throw new Error("Error verify token");
  }
}

// генерация токена
export async function generateToken(payload: { telegramId: number; role: payloadRole }): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("24h")
    .sign(new TextEncoder().encode(secretKey));
}
